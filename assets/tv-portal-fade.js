const states=new WeakMap();
export function applyTVPortalFade(T,engine,texture,amount){
  if(amount<=0)return texture;
  let s=states.get(engine);
  if(!s){const {RenderTarget,Scene,Mesh,PlaneGeometry,ShaderMaterial,OrthographicCamera}=T;
    const target=new RenderTarget(1,1,{depthBuffer:false});
    const material=new ShaderMaterial({uniforms:{tColor:{value:null},uFade:{value:0}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec2 vUv;uniform sampler2D tColor;uniform float uFade;
    void main(){vec2 uv=vUv;float leftGlow=exp(-3.5*dot((uv-vec2(0.,.85))*vec2(1.1,1.),(uv-vec2(0.,.85))*vec2(1.1,1.)));float rightGlow=exp(-4.*dot(uv-vec2(1.,.2),uv-vec2(1.,.2)));vec3 c=mix(vec3(.95,.91,.99),vec3(.90,.87,.98),uv.y);c=mix(c,vec3(.77,.91,.92),leftGlow*.5);c=mix(c,vec3(1.,.84,.78),rightGlow*.65);gl_FragColor=vec4(mix(texture2D(tColor,uv).rgb,c,uFade),1.);}`,depthTest:false,depthWrite:false,toneMapped:false});
    const scene=new Scene();scene.add(new Mesh(new PlaneGeometry(2,2),material));const camera=new OrthographicCamera(-1,1,1,-1,0,2);camera.position.z=1;s={target,material,scene,camera};states.set(engine,s);
  }
  const source=engine.mainCompRenderTarget;if(s.target.width!==source.width||s.target.height!==source.height)s.target.setSize(source.width,source.height);
  s.material.uniforms.tColor.value=texture;s.material.uniforms.uFade.value=amount;
  const renderer=engine.renderer,old=renderer.getRenderTarget();renderer.setRenderTarget(s.target);renderer.clear(true,false,false);renderer.render(s.scene,s.camera);renderer.setRenderTarget(old);return s.target.texture;
}
