import {applyTVPortalFade} from './tv-portal-fade.js?v=journey1';
import {applyRoomBloom} from './room-bloom.js?v=journey1';
/* Subject-priority depth of field for the opening room only.
   Uses native scene depth and a geometry mask of the unchanged sunflower.
   UI, project media and the existing motion effects remain in their own passes. */
const states=new WeakMap();
const originalGrain=new WeakMap();
const vertexShader='varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}';
const fragmentShader=`
  varying vec2 vUv;
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform sampler2D tSubject;
  uniform vec2 uResolution;
  uniform float uNear;
  uniform float uFar;
  uniform float uFocus;
  uniform float uPixelRatio;
  uniform float uBlurStrength;
  uniform vec4 uClockBounds;
  float distanceAt(vec2 uv){float d=texture2D(tDepth,uv).r;return (uNear*uFar)/(uFar-d*(uFar-uNear));}
  void main(){
    vec4 center=texture2D(tColor,vUv);
    float subject=texture2D(tSubject,vUv).r;
    if(subject>.5||(vUv.x>uClockBounds.x&&vUv.x<uClockBounds.z&&vUv.y>uClockBounds.y&&vUv.y<uClockBounds.w)){gl_FragColor=center;return;}
    // A smaller aperture: no forced blur at the focal plane. Circle of
    // confusion grows with relative optical depth, rather than world distance.
    float depth=distanceAt(vUv);
    float coc=max(0.,abs(1.-uFocus/max(depth,.1))-.035);
    float screenScale=clamp((uResolution.x/uPixelRatio)/900.,.65,1.);
    float radius=min(coc*3.,.8)*screenScale*uPixelRatio*uBlurStrength;
    if(radius<.15){gl_FragColor=center;return;}
    vec3 color=vec3(0.);float weight=0.;
    for(int i=0;i<32;i++){
      float fi=float(i)+.5;
      float r=sqrt(fi/32.);
      float angle=fi*2.39996323;
      vec2 sampleUv=clamp(vUv+vec2(cos(angle),sin(angle))*r*radius/uResolution,vec2(.001),vec2(.999));
      float sampleSubject=texture2D(tSubject,sampleUv).r;
      float w=(1.-smoothstep(.05,.45,sampleSubject))*(1.-.35*r*r);
      color+=texture2D(tColor,sampleUv).rgb*w;weight+=w;
    }
    gl_FragColor=vec4(weight>.01?mix(center.rgb,color/weight,.35*uBlurStrength):center.rgb,center.a);
  }
`;

function createState(T,renderer){
  const {RenderTarget,Scene,Mesh,PlaneGeometry,ShaderMaterial,BasicMaterial,OrthographicCamera,Vector2,Vector3,Color}=T;
  const maskTarget=new RenderTarget(1,1,{depthBuffer:true,stencilBuffer:false});
  const outputTarget=new RenderTarget(1,1,{depthBuffer:false,stencilBuffer:false});
  const maskScene=new Scene();
  const maskMaterial=new BasicMaterial({color:'#ffffff',toneMapped:false,side:2});
  const subjectMesh=new Mesh(undefined,maskMaterial);subjectMesh.matrixAutoUpdate=false;subjectMesh.frustumCulled=false;maskScene.add(subjectMesh);
  const uniforms={tColor:{value:null},tDepth:{value:null},tSubject:{value:maskTarget.texture},uResolution:{value:new Vector2(1,1)},uNear:{value:.01},uFar:{value:500},uFocus:{value:12},uPixelRatio:{value:1},uBlurStrength:{value:1},uClockBounds:{value:[0,0,-1,-1]}};
  const material=new ShaderMaterial({vertexShader,fragmentShader,uniforms,depthTest:false,depthWrite:false,toneMapped:false});
  const postScene=new Scene();postScene.add(new Mesh(new PlaneGeometry(2,2),material));
  const postCamera=new OrthographicCamera(-1,1,1,-1,0,2);postCamera.position.z=1;
  return{maskTarget,outputTarget,maskScene,subjectMesh,uniforms,postScene,postCamera,focusPoint:new Vector3(),clearColor:new Color(),tvBounds:[0,0,-1,-1]};
}

export function applySunflowerLens(T,engine,colorTexture,enabled){
  const grain=engine.mainCompMaterial?.uniforms?.uNoiseStrength;
  if(grain){
    if(!originalGrain.has(engine))originalGrain.set(engine,grain.value);
    grain.value=enabled?Math.min(.012,originalGrain.get(engine)):originalGrain.get(engine);
  }
  if(!enabled)return colorTexture;
  const room=engine.scene.getObjectByName('Sunroom_OrbitalAtelier');
  const flower=room?.parent?.getObjectByName('TexFleur');
  if(!flower||!engine.mainCompRenderTarget.depthTexture)return colorTexture;
  let state=states.get(engine);if(!state){state=createState(T,engine.renderer);states.set(engine,state);}
  const renderer=engine.renderer,camera=engine.camera,source=engine.mainCompRenderTarget;
  if(state.outputTarget.width!==source.width||state.outputTarget.height!==source.height){state.outputTarget.setSize(source.width,source.height);state.maskTarget.setSize(source.width,source.height);}
  // The original mesh and all original transforms are shared, never modified.
  state.subjectMesh.geometry=flower.geometry;
  state.subjectMesh.matrix.copy(flower.matrixWorld);
  state.focusPoint.set(2.75,2.85,0).applyMatrix4(flower.matrixWorld).applyMatrix4(camera.matrixWorldInverse);
  state.uniforms.uFocus.value=Math.max(.1,-state.focusPoint.z);
  state.uniforms.uNear.value=camera.near;state.uniforms.uFar.value=camera.far;
  state.uniforms.uResolution.value.set(source.width,source.height);
  state.uniforms.uPixelRatio.value=source.width/Math.max(1,innerWidth);
  state.uniforms.tColor.value=colorTexture;state.uniforms.tDepth.value=source.depthTexture;
  state.uniforms.uBlurStrength.value=1-Math.min(1,Math.max(0,((room.userData.journeyProgress||0)-.12)/.25));
  function projectedBounds(object,halfWidth,halfHeight,bounds){
    bounds.splice(0,4,0,0,-1,-1);if(!object)return;
    const point=state.focusPoint;point.set(0,0,0).applyMatrix4(object.matrixWorld).project(camera);
    if(point.z>-1&&point.z<1){bounds.splice(0,4,1,1,0,0);for(const x of[-halfWidth,halfWidth])for(const y of[-halfHeight,halfHeight]){point.set(x,y,.01).applyMatrix4(object.matrixWorld).project(camera);const u=point.x*.5+.5,v=point.y*.5+.5;bounds[0]=Math.min(bounds[0],u);bounds[1]=Math.min(bounds[1],v);bounds[2]=Math.max(bounds[2],u);bounds[3]=Math.max(bounds[3],v);}}
  }
  projectedBounds(room.getObjectByName('Live_mechanical_wall_clock'),.82,.82,state.uniforms.uClockBounds.value);
  const television=room.getObjectByName('Portfolio_TV_screen');
  projectedBounds(television?.parent?.visible&&(room.userData.journeyProgress||0)>.58?television:null,2.125,1.195,state.tvBounds);
  const oldTarget=renderer.getRenderTarget(),oldAlpha=renderer.getClearAlpha();renderer.getClearColor(state.clearColor);
  renderer.setRenderTarget(state.maskTarget);renderer.setClearColor(0x000000,0);renderer.clear(true,true,true);renderer.render(state.maskScene,camera);
  renderer.setRenderTarget(state.outputTarget);renderer.clear(true,true,true);renderer.render(state.postScene,state.postCamera);
  renderer.setRenderTarget(oldTarget);renderer.setClearColor(state.clearColor,oldAlpha);
  const luminous=applyRoomBloom(T,engine,state.outputTarget.texture,state.maskTarget.texture,room.userData.night||0,{tv:state.tvBounds,clock:state.uniforms.uClockBounds.value});
  return applyTVPortalFade(T,engine,luminous,room.userData.portalFade||0);
}
