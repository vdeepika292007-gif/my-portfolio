/* Selective low-resolution bloom: luminous flower and bright practical lights only.
   The interface is composed after this pass, so text and buttons stay crisp. */
const cache=new WeakMap();
const vertex='varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}';
function setup(T){
  const {RenderTarget,Scene,Mesh,PlaneGeometry,ShaderMaterial,OrthographicCamera,Vector2}=T;
  const a=new RenderTarget(1,1,{depthBuffer:false}),b=new RenderTarget(1,1,{depthBuffer:false}),out=new RenderTarget(1,1,{depthBuffer:false});
  const bright=new ShaderMaterial({vertexShader:vertex,fragmentShader:`varying vec2 vUv;uniform sampler2D tColor;uniform sampler2D tSubject;uniform vec4 uTVBounds;uniform vec4 uClockBounds;
    void main(){if((vUv.x>uTVBounds.x&&vUv.x<uTVBounds.z&&vUv.y>uTVBounds.y&&vUv.y<uTVBounds.w)||(vUv.x>uClockBounds.x&&vUv.x<uClockBounds.z&&vUv.y>uClockBounds.y&&vUv.y<uClockBounds.w)){gl_FragColor=vec4(0.,0.,0.,1.);return;}vec3 c=texture2D(tColor,vUv).rgb;float subject=texture2D(tSubject,vUv).r;vec3 light=max(c-vec3(.57),vec3(0.))*1.3;gl_FragColor=vec4(mix(light,c*.30,subject),1.);}`,
    uniforms:{tColor:{value:null},tSubject:{value:null},uTVBounds:{value:[0,0,-1,-1]},uClockBounds:{value:[0,0,-1,-1]}},depthTest:false,depthWrite:false,toneMapped:false});
  const blur=new ShaderMaterial({vertexShader:vertex,fragmentShader:`varying vec2 vUv;uniform sampler2D tColor;uniform vec2 uDirection;
    void main(){vec3 c=texture2D(tColor,vUv).rgb*.227027;c+=(texture2D(tColor,vUv+uDirection*1.384615).rgb+texture2D(tColor,vUv-uDirection*1.384615).rgb)*.316216;c+=(texture2D(tColor,vUv+uDirection*3.230769).rgb+texture2D(tColor,vUv-uDirection*3.230769).rgb)*.070270;gl_FragColor=vec4(c,1.);}`,
    uniforms:{tColor:{value:null},uDirection:{value:new Vector2()}},depthTest:false,depthWrite:false,toneMapped:false});
  const combine=new ShaderMaterial({vertexShader:vertex,fragmentShader:`varying vec2 vUv;uniform sampler2D tColor;uniform sampler2D tBloom;uniform sampler2D tSubject;uniform float uNight;
    void main(){vec4 base=texture2D(tColor,vUv);float subject=texture2D(tSubject,vUv).r;vec3 bloom=texture2D(tBloom,vUv).rgb;gl_FragColor=vec4(base.rgb*(1.+.04*uNight*subject)+bloom*.85*uNight*(1.-.80*subject),base.a);}`,
    uniforms:{tColor:{value:null},tBloom:{value:null},tSubject:{value:null},uNight:{value:0}},depthTest:false,depthWrite:false,toneMapped:false});
  const scene=new Scene(),quad=new Mesh(new PlaneGeometry(2,2),bright);scene.add(quad);
  const camera=new OrthographicCamera(-1,1,1,-1,0,2);camera.position.z=1;
  return {a,b,out,bright,blur,combine,scene,quad,camera};
}
export function applyRoomBloom(T,engine,color,subject,night,protectedAreas={}){
  if(night<.001)return color;
  let s=cache.get(engine);if(!s){s=setup(T);cache.set(engine,s);}
  const source=engine.mainCompRenderTarget,w=source.width,h=source.height,qw=Math.max(1,Math.ceil(w/4)),qh=Math.max(1,Math.ceil(h/4));
  if(s.out.width!==w||s.out.height!==h){s.out.setSize(w,h);s.a.setSize(qw,qh);s.b.setSize(qw,qh);}
  const renderer=engine.renderer,oldTarget=renderer.getRenderTarget();
  function draw(material,target){s.quad.material=material;renderer.setRenderTarget(target);renderer.clear(true,false,false);renderer.render(s.scene,s.camera);}
  s.bright.uniforms.uTVBounds.value=protectedAreas.tv||[0,0,-1,-1];s.bright.uniforms.uClockBounds.value=protectedAreas.clock||[0,0,-1,-1];
  s.bright.uniforms.tColor.value=color;s.bright.uniforms.tSubject.value=subject;draw(s.bright,s.a);
  const ratio=w/Math.max(1,innerWidth);
  for(let i=0;i<2;i++){
    s.blur.uniforms.tColor.value=s.a.texture;s.blur.uniforms.uDirection.value.set(1.7*ratio/qw,0);draw(s.blur,s.b);
    s.blur.uniforms.tColor.value=s.b.texture;s.blur.uniforms.uDirection.value.set(0,1.7*ratio/qh);draw(s.blur,s.a);
  }
  s.combine.uniforms.tColor.value=color;s.combine.uniforms.tBloom.value=s.a.texture;s.combine.uniforms.tSubject.value=subject;s.combine.uniforms.uNight.value=night;draw(s.combine,s.out);
  renderer.setRenderTarget(oldTarget);return s.out.texture;
}
