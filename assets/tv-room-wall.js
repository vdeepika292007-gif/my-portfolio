/* Opposite wall revealed from the sofa; all media stays inside the static site. */
export function createTVWall(T,H,parent){
  const {Group,PlaneGeometry,ShaderMaterial,PointLight,DirectionalLight}=T;
  const {mesh,box,roundedBox,cylinder,library,plaster,oak,ink,copper}=H;
  const wall=new Group();wall.name='Sofa_TV_gallery_wall';wall.position.set(8.8,0,0);wall.rotation.y=-Math.PI/2;wall.visible=false;parent.add(wall);
  const wallMaterial=plaster.clone();wallMaterial.side=0;
  mesh(new PlaneGeometry(14,7.5),wallMaterial,0,3.75,0,wall);
  box(0,.075,.025,14,.15,.035,library.surface('plaster','#d8d6ce'),wall);
  const center=2.7;
  roundedBox(center,2.10,.17,4.46,2.57,.14,.035,ink,wall);
  roundedBox(center,2.10,.245,4.32,2.43,.012,.015,library.surface('metal','#131b20',{metalness:.35,roughness:.32}),wall);
  const canvas=library.canvas(2048);canvas.width=1920;canvas.height=1080;const ctx=canvas.getContext('2d');
  // Transparent typography over the same airy palette used by the portfolio.
  ctx.clearRect(0,0,1920,1080);ctx.fillStyle='#28362f';ctx.textAlign='left';
  ctx.font='30px Arial, sans-serif';ctx.fillText('DEEPIKA V  /  SELECTED WORK',120,130);
  ctx.font='176px Georgia, serif';ctx.fillText('Data into',112,385);ctx.fillText('solutions.',112,575);
  ctx.font='36px Arial, sans-serif';ctx.fillText('Data Science · Web Development · Machine Learning',120,690);
  ctx.strokeStyle='#66766b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(120,805);ctx.lineTo(1800,805);ctx.stroke();
  ctx.font='28px Arial, sans-serif';ctx.fillText('SCROLL TO STEP INSIDE',120,900);ctx.textAlign='right';ctx.fillText('↓  PORTFOLIO',1800,900);
  // An original abstract accent keeps the TV screen recognizable while moving.
  ctx.fillStyle='#d6a06e';ctx.beginPath();ctx.arc(1580,390,130,0,Math.PI*2);ctx.fill();ctx.fillStyle='#7b938d';ctx.fillRect(1460,505,240,62);ctx.strokeStyle='#324c45';ctx.lineWidth=7;ctx.beginPath();ctx.arc(1590,390,175,.2,Math.PI*1.7);ctx.stroke();
  const screenMaterial=new ShaderMaterial({uniforms:{tType:{value:library.texture(canvas,true)},uTitleOpacity:{value:1}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec2 vUv;uniform sampler2D tType;uniform float uTitleOpacity;
    void main(){vec2 uv=vUv;float leftGlow=exp(-3.5*dot((uv-vec2(0.,.85))*vec2(1.1,1.),(uv-vec2(0.,.85))*vec2(1.1,1.)));float rightGlow=exp(-4.*dot(uv-vec2(1.,.2),uv-vec2(1.,.2)));vec3 c=mix(vec3(.95,.91,.99),vec3(.90,.87,.98),uv.y);c=mix(c,vec3(.77,.91,.92),leftGlow*.5);c=mix(c,vec3(1.,.84,.78),rightGlow*.65);vec4 type=texture2D(tType,uv);gl_FragColor=vec4(mix(c,type.rgb,type.a*uTitleOpacity),1.);}`,
    depthWrite:true,side:0,toneMapped:false});
  const screen=mesh(new PlaneGeometry(4.25,2.39),screenMaterial,center,2.10,.255,wall,'Portfolio_TV_screen');screen.castShadow=false;
  // Standby indicator, thin soundbar and a low floating oak console.
  const led=library.surface('ceramic','#e4d7af',{emissive:'#e7d4a0',emissiveIntensity:.5});
  const indicator=cylinder(center+2.02,.866,.26,.012,.008,led,wall);indicator.rotation.x=Math.PI/2;
  roundedBox(center,.80,.32,2.25,.07,.10,.025,ink,wall);
  roundedBox(center,.39,.29,4.9,.50,.58,.025,oak,wall);
  const shadow=library.surface('metal','#2a2d2a',{metalness:0,roughness:1});
  for(const x of[center-1.55,center,center+1.55])box(x,.39,.595,.006,.40,.004,shadow,wall);
  for(const x of[center-1.9,center+1.9])cylinder(x,.07,.28,.025,.13,ink,wall);
  function painting(x,y,w,h,variant){
    box(x,y,.06,w+.10,h+.10,.055,ink,wall);box(x,y,.093,w+.055,h+.055,.012,library.surface('plaster','#e7e2d8'),wall);
    const art=library.canvas(512),ac=art.getContext('2d');ac.fillStyle=variant?'#d7ccba':'#c4cdc6';ac.fillRect(0,0,512,512);
    if(!variant){for(let i=0;i<5;i++){ac.fillStyle=['#a5afa2','#8f9c91','#6d827b','#46665f','#284b48'][i];ac.beginPath();ac.moveTo(0,512);for(let t=0;t<=512;t+=8)ac.lineTo(t,230+i*42+Math.sin(t*.008+i)*38);ac.lineTo(512,512);ac.fill();}}
    else{ac.fillStyle='#a86f50';ac.beginPath();ac.arc(260,215,115,0,Math.PI*2);ac.fill();ac.strokeStyle='#4e5d52';ac.lineWidth=18;for(let i=0;i<4;i++){ac.beginPath();ac.moveTo(100+i*65,420);ac.bezierCurveTo(80+i*65,350,160+i*50,220,170+i*55,90);ac.stroke();}}
    const picture=mesh(new PlaneGeometry(w-.13,h-.13),library.surface('ceramic','#ffffff',{map:library.texture(art,true),roughness:.95,envMapIntensity:.15}),x,y,.105,wall);picture.castShadow=false;
  }
  painting(-.62,2.63,1.23,1.72,0);painting(6.12,2.68,1.18,1.58,1);
  const backlight=new PointLight('#c5d5ed',.18,5,2);backlight.position.set(center,2.0,.68);wall.add(backlight);
  // Broad reflected screen/gallery light keeps the paintings readable at night.
  const galleryFill=new DirectionalLight('#e4e7e5',.55);galleryFill.position.set(center,4.5,4);galleryFill.target.position.set(center,2,0);wall.add(galleryFill,galleryFill.target);
  const pictureGlow=library.surface('ceramic','#e4d9be',{emissive:'#ffdeb0',emissiveIntensity:0});
  for(const[x,y]of[[-.62,3.65],[6.12,3.64]]){
    roundedBox(x,y,.17,.48,.035,.10,.012,copper,wall);
    box(x,y-.022,.19,.40,.009,.07,pictureGlow,wall);
  }
  wall.traverse(o=>{if(o.isMesh)o.castShadow=false;});
  wall.userData.update=night=>{backlight.intensity=.18+.65*night;galleryFill.intensity=.55*(1-night)+.14*night;pictureGlow.emissiveIntensity=night*1.3;led.emissiveIntensity=.5+night*.45;};
  wall.userData.setEntryOpacity=opacity=>{screenMaterial.uniforms.uTitleOpacity.value=opacity;};
  wall.userData.screenTarget=[8.545,2.10,2.7];
  return wall;
}
