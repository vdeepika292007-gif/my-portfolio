import {createTVWall} from './tv-room-wall.js?v=portal3';
import {getRoomLighting} from './room-time.js?v=portal3';
import {createMechanicalClock} from './mechanical-clock.js?v=clock1';
import {createRoomMaterials} from './room-materials.js?v=interior4';
/* Orbital Atelier: original procedural architecture, furniture and decorations.
   Uses the existing renderer's Three.js classes so flower/camera behavior stays intact. */
export function createStudioRoom(T) {
  const {Group, Mesh, BufferGeometry, BufferAttribute, BoxGeometry, SphereGeometry, PlaneGeometry,
    PhongMaterial, BasicMaterial, ShaderMaterial, AmbientLight, DirectionalLight, PointLight, Vector3,renderer}=T;
  const room=new Group();room.name='Sunroom_OrbitalAtelier';
  const library=createRoomMaterials(T);
  const phong=(name,color)=>library.material(name,color);
  const plaster=phong('warm-plaster','#e9cfc0',5),teal=phong('teal','#517e7a',16),cream=phong('cream','#e9e0cc',8),
    violet=phong('violet-upholstery','#8e83b7',8),coral=phong('coral','#d88d71',20),copper=phong('copper','#b77953',70),
    ink=phong('ink','#384c5f',30),yellow=phong('ochre','#d4ab58',22),paper=phong('paper','#f0e5d1',8);
  function geometry(positions,indices,uvs){const g=new BufferGeometry();g.setAttribute('position',new BufferAttribute(new Float32Array(positions),3));if(uvs)g.setAttribute('uv',new BufferAttribute(new Float32Array(uvs),2));g.setIndex(indices);g.computeVertexNormals();return g;}
  function mesh(g,m,x=0,y=0,z=0,parent=room,name=''){const o=new Mesh(g,m);o.position.set(x,y,z);o.name=name;o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
  const box=(x,y,z,w,h,d,m,parent=room)=>mesh(new BoxGeometry(w,h,d),m,x,y,z,parent);
  const sphere=(x,y,z,r,m,scale=[1,1,1],parent=room)=>{const o=mesh(new SphereGeometry(r,32,24),m,x,y,z,parent);o.scale.set(...scale);return o;};
  function lathe(profile,segments=64){const p=[],i=[],uv=[];for(let row=0;row<profile.length;row++){const[r,y]=profile[row];for(let s=0;s<=segments;s++){const a=s/segments*Math.PI*2;p.push(Math.cos(a)*r,y,Math.sin(a)*r);uv.push(s/segments,row/(profile.length-1));if(row<profile.length-1&&s<segments){const n=row*(segments+1)+s;i.push(n,n+1,n+segments+1,n+1,n+segments+2,n+segments+1);}}}return geometry(p,i,uv);}
  function cylinder(x,y,z,r,h,m,parent=room){return mesh(lathe([[0,-h/2],[r,-h/2],[r,h/2],[0,h/2]]),m,x,y,z,parent);}
  function torus(R,r,arc=Math.PI*2){const p=[],i=[],uv=[],n=100,m=14;for(let a=0;a<=n;a++)for(let b=0;b<=m;b++){const t=a/n*arc,v=b/m*Math.PI*2;p.push((R+r*Math.cos(v))*Math.cos(t),(R+r*Math.cos(v))*Math.sin(t),r*Math.sin(v));uv.push(a/n,b/m);if(a<n&&b<m){const k=a*(m+1)+b;i.push(k,k+m+1,k+1,k+1,k+m+1,k+m+2);}}return geometry(p,i,uv);}
  function rod(a,b,r,material,parent=room){const start=new Vector3(...a),end=new Vector3(...b),delta=end.clone().sub(start);const o=cylinder(0,0,0,r,delta.length(),material,parent);o.position.copy(start.add(end).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new Vector3(0,1,0),delta.normalize());return o;}
  function diskYZ(x,y,z,r,material,parent=room){const o=cylinder(x,y,z,r,.025,material,parent);o.rotation.z=Math.PI/2;return o;}

  function roundedBox(x,y,z,w,h,d,r,m,parent=room){
    r=Math.min(r,w/2-.001,h/2-.001,d/2-.001);
    const g=new BoxGeometry(w,h,d,10,6,10),p=g.attributes.position,normals=[];
    for(let i=0;i<p.count;i++){const v=new Vector3(p.getX(i),p.getY(i),p.getZ(i));const inner=new Vector3(Math.max(-w/2+r,Math.min(w/2-r,v.x)),Math.max(-h/2+r,Math.min(h/2-r,v.y)),Math.max(-d/2+r,Math.min(d/2-r,v.z)));const normal=v.sub(inner).normalize();const result=inner.addScaledVector(normal,r);p.setXYZ(i,result.x,result.y,result.z);normals.push(normal.x,normal.y,normal.z);}
    g.setAttribute('normal',new BufferAttribute(new Float32Array(normals),3));return mesh(g,m,x,y,z,parent);
  }
  function tubePath(points,r,closed=true){const p=[],idx=[],count=points.length,sides=8;for(let i=0;i<count;i++){const prev=points[(i-1+count)%count],next=points[(i+1)%count],tangent=new Vector3(next[0]-prev[0],next[1]-prev[1],next[2]-prev[2]).normalize();const up=Math.abs(tangent.y)>.9?new Vector3(0,0,1):new Vector3(0,1,0);const u=new Vector3().crossVectors(tangent,up).normalize(),v=new Vector3().crossVectors(tangent,u).normalize();for(let j=0;j<sides;j++){const a=j/sides*Math.PI*2;const off=u.clone().multiplyScalar(Math.cos(a)*r).addScaledVector(v,Math.sin(a)*r);p.push(points[i][0]+off.x,points[i][1]+off.y,points[i][2]+off.z);if(i<count-1||closed){const ni=(i+1)%count,k=i*sides+j,l=i*sides+(j+1)%sides;idx.push(k,ni*sides+j,l,l,ni*sides+j,ni*sides+(j+1)%sides);}}}return geometry(p,idx);}
  function seatPiping(x,y,z,w,d,r,material,parent){const points=[];for(const[cx,cz,start]of[[w/2-r,d/2-r,0],[-w/2+r,d/2-r,Math.PI/2],[-w/2+r,-d/2+r,Math.PI],[w/2-r,-d/2+r,Math.PI*1.5]])for(let j=0;j<12;j++){const a=start+j/12*Math.PI/2;points.push([cx+Math.cos(a)*r,y,cz+Math.sin(a)*r]);}const line=mesh(tubePath(points,.0055),material,x,0,z,parent);return line;}
  const oak=library.surface('wood','#ffffff'),linen=library.surface('fabric','#dbd5c7'),piping=library.surface('fabric','#a59d8f'),darkOak=library.surface('wood','#ffffff',{color:'#86715d',roughness:.62});

  if(renderer){renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.shadowType;}
  // Window daylight leads; restrained fill preserves material shape and shadow.
  const ambient=new AmbientLight('#e6e9eb',.40);room.add(ambient);
  const key=new DirectionalLight('#fff7ed',1.3);key.position.set(-5,6.6,-3.3);key.target.position.set(4,0,1);room.add(key.target);key.castShadow=true;
  key.shadow.mapSize.set(innerWidth<768?1024:2048,innerWidth<768?1024:2048);Object.assign(key.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.2,far:35});key.shadow.bias=-.00009;key.shadow.normalBias=.012;key.shadow.radius=3;room.add(key);
  const fill=new DirectionalLight('#e4edf5',.76);fill.position.set(8,5,3);room.add(fill);
  const bounce=new DirectionalLight('#e9dfd0',.23);bounce.position.set(3,.8,-5);room.add(bounce);

  // Continuous plaster wall around one circular opening; no old window geometry.
  const wallPositions=[],wallIndices=[],wallUvs=[],N=160,centerY=2.95,radius=2.12;
  for(let k=0;k<=N;k++){const a=k/N*Math.PI*2,du=Math.sin(a),dv=Math.cos(a);const boundary=Math.min(8/Math.max(.00001,Math.abs(du)),(dv>0?7.5-centerY:centerY)/Math.max(.00001,Math.abs(dv)));wallPositions.push(-.8,centerY+dv*radius,du*radius,-.8,centerY+dv*boundary,du*boundary);wallUvs.push(du*radius/3,(centerY+dv*radius)/3,du*boundary/3,(centerY+dv*boundary)/3);if(k<N){const q=k*2;wallIndices.push(q,q+1,q+2,q+1,q+3,q+2);}}
  mesh(geometry(wallPositions,wallIndices,wallUvs),plaster,0,0,0,room,'Circular_plaster_wall');
  const reveal=mesh(torus(2.12,.028),ink,-.67,centerY,0,room,'Oculus_teal_reveal');reveal.rotation.y=Math.PI/2;
  const trim=mesh(torus(2.19,.009),copper,-.69,centerY,0,room,'Oculus_brass_detail');trim.rotation.y=Math.PI/2;
  const tunnel=mesh(lathe([[2.12,-.25],[2.12,.25]],100),cream,-1.03,centerY,0);tunnel.rotation.z=Math.PI/2;
  const skyMaterial=new ShaderMaterial({uniforms:{uNight:{value:0}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:`varying vec2 vUv;uniform float uNight;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}float cloud(vec2 p){return noise(p)*.6+noise(p*2.)*.3+noise(p*4.)*.1;}
    void main(){vec3 c=mix(vec3(.86,.82,.75),vec3(.65,.76,.81),smoothstep(.08,.95,vUv.y));float haze=cloud(vUv*vec2(8.,17.));c=mix(c,vec3(.92,.92,.89),smoothstep(.48,.76,haze)*.4);float sun=1.-smoothstep(.049,.063,length(vUv-vec2(.70,.69)));c=mix(c,vec3(1.,.96,.84),sun*.75);vec3 night=mix(vec3(.025,.037,.075),vec3(.008,.018,.045),vUv.y);
    float moon=1.-smoothstep(.041,.047,length(vUv-vec2(.69,.72)));
    night+=vec3(.48,.57,.66)*moon;
    vec2 cell=floor(vUv*vec2(105.,80.));float star=step(.991,hash(cell))*pow(max(0.,1.-length(fract(vUv*vec2(105.,80.))-.5)*2.),4.);
    night+=vec3(.32,.40,.54)*star;
    gl_FragColor=vec4(mix(c,night,uNight),1.);}`,side:2});
  const sky=mesh(new PlaneGeometry(10,8),skyMaterial,-1.5,2.95,0,room,'Original_sky');sky.rotation.y=Math.PI/2;
  sky.castShadow=false;sky.receiveShadow=false;
  // A deep sill and a low ledge give the window real depth as the camera moves.
  roundedBox(-.1,.28,0,1.35,.26,4.5,.045,cream);
  box(-.72,.075,0,.07,.15,15.8,cream);box(-.735,.005,0,.06,.013,15.8,ink);
  const glass=library.surface('ceramic','#d8e1dc',{transparent:true,opacity:.045,roughness:.18,metalness:.32,depthWrite:false,envMapIntensity:.8});
  const glazing=diskYZ(-.57,centerY,0,2.03,glass);glazing.castShadow=false;glazing.receiveShadow=false;
  box(4.0,3.75,7.0,9.8,7.5,.22,plaster);
  box(4.0,3.75,-7.0,9.8,7.5,.22,plaster);
  box(4.8,7.55,0,11.5,.15,14.2,library.surface('plaster','#e0dfd8',{emissive:'#c7cbd0',emissiveIntensity:.32}));
  // Unbroken plaster ceiling: slim recessed coves replace the heavy strip pattern.
  box(4.6,7.39,6.85,10.7,.025,.09,ink);box(4.6,7.39,-6.85,10.7,.025,.09,ink);
  const cove=library.surface('plaster','#ede9df',{emissive:'#fff0d6',emissiveIntensity:.18});
  box(4.6,7.38,6.82,10.6,.013,.025,cove);box(4.6,7.38,-6.82,10.6,.013,.025,cove);

  // Honed limestone with restrained grain and fine tile joints.
  const floor=mesh(new PlaneGeometry(17,15),library.surface('stone','#ffffff',{emissive:'#b4afa3',emissiveIntensity:.075}),5,-.025,0,room,'Honed_limestone_floor');floor.rotation.x=-Math.PI/2;floor.castShadow=false;
  const grout=library.surface('stone','#a7a397',{roughness:1});
  for(let z=-6;z<=6;z+=2)box(5,-.023,z,17,.001,.007,grout);
  for(let x=-2;x<=12;x+=2)box(x,-.023,0,.007,.001,15,grout);
  const rugPositions=[0,0,0],rugUvs=[.5,.5],rugIndices=[];for(let i=0;i<=100;i++){const a=i/100*Math.PI*2;rugPositions.push(Math.cos(a)*2.05,0,Math.sin(a)*2.05);rugUvs.push(Math.cos(a)*.5+.5,Math.sin(a)*.5+.5);if(i<100)rugIndices.push(0,i+1,i+2);}
  const rug=mesh(geometry(rugPositions,rugIndices,rugUvs),phong('rug','#ffffff'),2.75,-.004,0);rug.scale.set(1.08,1,.87);rug.castShadow=false;
  const rugBorder=mesh(torus(2.02,.006),linen,2.75,-.001,0);rugBorder.rotation.x=Math.PI/2;rugBorder.scale.set(1.08,.87,1);
  // Contact shading under retained flower and newly designed furniture.
  const shadowMaterial=new ShaderMaterial({vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 vUv;void main(){float a=exp(-dot((vUv-.5)*4.,(vUv-.5)*4.))*.25;gl_FragColor=vec4(.055,.05,.04,a);}',transparent:true,depthWrite:false,side:2});
  function shadow(x,z,w,d){const o=mesh(new PlaneGeometry(w,d),shadowMaterial,x,.006,z);o.rotation.x=-Math.PI/2;o.castShadow=false;return o;}
  shadow(2.85,0,2.3,2.2);

  // A low, full-size linen sofa with soft cushion crowns and recessed seams.
  const sofa=new Group();sofa.name='Tailored_linen_sofa';sofa.position.set(1.9,0,3.22);room.add(sofa);
  const sofaFabric=library.surface('fabric','#ddd5c5'),seamFabric=library.surface('fabric','#a69c8c');
  roundedBox(-.01,.36,0,1.29,.32,3.16,.08,sofaFabric,sofa);
  roundedBox(-.035,.21,0,1.19,.10,3.06,.025,darkOak,sofa);
  function cushionMesh(x,y,z,w,h,d,r,material,parent,axis='y',bulge=.025){
    const o=roundedBox(x,y,z,w,h,d,r,material,parent),p=o.geometry.attributes.position;
    for(let i=0;i<p.count;i++){
      const px=p.getX(i),py=p.getY(i),pz=p.getZ(i);
      if(axis==='y'){const crown=Math.max(0,1-(px/(w*.5))**2)*Math.max(0,1-(pz/(d*.5))**2);p.setY(i,py+Math.sign(py)*bulge*crown);}
      else{const crown=Math.max(0,1-(py/(h*.5))**2)*Math.max(0,1-(pz/(d*.5))**2);p.setX(i,px+Math.sign(px)*bulge*crown);}
    }p.needsUpdate=true;o.geometry.computeVertexNormals();return o;
  }
  for(const z of[-.98,0,.98]){
    cushionMesh(.09,.59,z,1.13,.26,.945,.09,sofaFabric,sofa,'y',.034);
    seatPiping(.09,.69,z,1.07,.895,.07,seamFabric,sofa);
    const back=cushionMesh(-.51,1.04,z,.29,.79,.95,.12,sofaFabric,sofa,'x',.038);back.rotation.z=.14;
  }
  for(const z of[-1.57,1.57])roundedBox(-.04,.68,z,1.28,.72,.21,.075,sofaFabric,sofa);
  for(const x of[-.46,.46])for(const z of[-1.29,1.29])mesh(lathe([[.023,0],[.035,.19],[.044,.22]]),darkOak,x,0,z,sofa);
  const cushion=cushionMesh(-.20,1.01,1.02,.19,.50,.50,.09,linen,sofa,'x',.05);cushion.rotation.set(.14,0,.19);
  const cushion2=cushionMesh(-.20,.97,-1.03,.18,.45,.47,.085,library.surface('fabric','#727c76'),sofa,'x',.045);cushion2.rotation.set(-.16,.03,.23);
  function pillowSeam(pillow,w,h,d){const points=[],r=.075;for(const[cy,cz,start]of[[h/2-r,d/2-r,0],[-h/2+r,d/2-r,Math.PI/2],[-h/2+r,-d/2+r,Math.PI],[h/2-r,-d/2+r,Math.PI*1.5]])for(let j=0;j<10;j++){const a=start+j/10*Math.PI/2;points.push([w/2+.001,cy+Math.cos(a)*r,cz+Math.sin(a)*r]);}mesh(tubePath(points,.0025),seamFabric,0,0,0,pillow);}
  pillowSeam(cushion,.19,.50,.50);pillowSeam(cushion2,.18,.45,.47);
  // A softly folded throw drapes over one arm, rather than a rigid block.
  const throwP=[],throwI=[],throwUv=[];
  for(let i=0;i<=32;i++)for(let j=0;j<=20;j++){
    const u=i/32,v=j/20,x=-.43+u*.95,z=1.28+v*.43;
    const drop=Math.max(0,(v-.45)/.55)*.72;
    throwP.push(x,.995-drop+Math.sin(u*Math.PI*9+v*.7)*(.009+drop*.028),z);throwUv.push(u,v);
    if(i<32&&j<20){const k=i*21+j;throwI.push(k,k+21,k+1,k+1,k+21,k+22);}
  }mesh(geometry(throwP,throwI,throwUv),library.surface('fabric','#a5a69a'),0,0,0,sofa);
  shadow(1.9,3.22,2.8,4.0);

  // Solid oak writing desk: tapered legs, apron, joinery and a dressed worktop.
  const desk=new Group();desk.position.set(2.35,0,-3.24);desk.name='Solid_oak_console';room.add(desk);
  roundedBox(0,1.12,0,1.05,.075,2.42,.018,oak,desk);
  for(const z of[-1.02,1.02])for(const x of[-.37,.37]){
    const leg=mesh(lathe([[.025,0],[.038,.94],[.047,1.07]],8),oak,x,.02,z,desk);leg.rotation.z=x*.065;
    cylinder(x,.023,z,.026,.018,ink,desk);
  }
  for(const x of[-.38,.38])roundedBox(x,.995,0,.055,.17,2.1,.008,oak,desk);
  for(const z of[-1.02,1.02])roundedBox(0,.995,z,.77,.17,.055,.008,oak,desk);
  roundedBox(.414,1.005,0,.025,.145,1.64,.006,oak,desk);
  box(.43,1.073,0,.002,.003,1.63,darkOak,desk);rod([.45,1.015,-.14],[.45,1.015,.14],.008,copper,desk);
  shadow(2.35,-3.24,2.5,3.5);
  function book(x,y,z,w,d,h,cover,parent=room){roundedBox(x,y,z,w,h,d,.004,paper,parent);for(const sign of[-1,1])roundedBox(x,y+sign*(h/2+.004),z,w+.015,.006,d+.015,.002,cover,parent);for(let i=1;i<5;i++)box(x+w/2+.001,y-h/2+i*h/5,z,.001,.001,d-.025,cream,parent);}
  const leather=library.surface('fabric','#626a63',{roughness:.81,bumpScale:.002});
  roundedBox(.10,1.163,-.04,.67,.008,1.1,.012,leather,desk);
  book(.05,1.205,.69,.45,.32,.060,ink,desk);book(.05,1.253,.68,.42,.30,.025,linen,desk);
  // Closed notebook, slim pen and ceramic coffee cup with a visible interior.
  book(.15,1.184,-.02,.43,.32,.021,library.surface('fabric','#756a58'),desk);
  rod([.34,1.208,-.25],[.12,1.208,-.25],.006,ink,desk);
  cylinder(-.05,1.173,-.79,.14,.018,cream,desk);
  mesh(lathe([[.064,0],[.076,.015],[.079,.14],[.072,.15],[.066,.14],[.063,.025]]),library.surface('ceramic','#d3cec3'),-.05,1.184,-.79,desk);
  const coffee=cylinder(-.05,1.312,-.79,.064,.002,library.surface('ceramic','#3f3024',{roughness:.2}),desk);coffee.castShadow=false;
  const handle=mesh(torus(.046,.011,Math.PI*1.65),cream,-.05,1.265,-.69,desk);handle.rotation.y=Math.PI/2;
  // Upholstered desk chair, tucked to one side, with a slender steel frame.
  const chair=new Group();chair.position.set(3.23,0,-3.62);chair.rotation.y=-.12;room.add(chair);
  const chairFabric=library.surface('fabric','#6f7973');
  roundedBox(0,.49,0,.59,.11,.62,.07,chairFabric,chair);
  const chairBack=cushionMesh(.23,.91,0,.12,.72,.61,.065,chairFabric,chair,'x',.025);chairBack.rotation.z=-.10;
  for(const x of[-.21,.21])for(const z of[-.22,.22])rod([x,.46,z],[x*1.25,.025,z*1.2],.014,ink,chair);
  for(const z of[-.24,.24])rod([.23,.47,z],[.26,1.11,z],.012,ink,chair);
  shadow(3.23,-3.62,1.4,1.5);

  // Linen-shade floor lamp with a warm diffuser and a restrained pool of light.
  cylinder(1.15,.035,-4.5,.28,.07,ink);
  rod([1.15,.06,-4.5],[1.15,2.78,-4.5],.018,copper);
  const shade=mesh(lathe([[.37,-.28],[.26,.29]],80),library.surface('fabric','#e1d9c8',{emissive:'#edcf9e',emissiveIntensity:.12,envMapIntensity:.22}),1.15,2.83,-4.5);
  const diffuser=cylinder(1.15,2.555,-4.5,.345,.008,library.surface('ceramic','#f6e5c5',{emissive:'#ffddb0',emissiveIntensity:.45}));diffuser.castShadow=false;
  const lampLight=new PointLight('#ffdeb2',.6,4.8,2);lampLight.position.set(1.15,2.48,-4.5);room.add(lampLight);
  shadow(1.15,-4.5,1.0,1.0);

  // Floating pill shelves, ceramics and original geometric wall composition.
  for(const[y,z,w]of[[2.1,4.5,2.2],[3.5,4.4,1.65]]){roundedBox(-.25,y,z,1.0,.07,w,.022,oak);for(const supportZ of[z-w*.3,z+w*.3])box(-.68,y-.10,supportZ,.08,.14,.035,copper);}
  mesh(lathe([[.19,0],[.27,.12],[.23,.4],[.12,.53],[.12,.65]]),teal,-.07,2.16,4.85);
  sphere(-.05,2.45,3.8,.22,yellow);
  const ring=mesh(torus(.30,.085),ink,-.03,3.84,4.45);ring.rotation.y=Math.PI/2;
  for(let i=0;i<3;i++)box(-.05,3.59+i*.06,4.95,.5,.045,.4,[yellow,paper,violet][i]);
  // A fine dark frame, paper mat and quiet landscape print.
  box(-.60,3.45,-4.35,.07,2.05,1.50,ink);box(-.55,3.45,-4.35,.025,1.98,1.43,paper);
  const artCanvas=library.canvas(1024),ac=artCanvas.getContext('2d');
  ac.fillStyle='#ddd9cc';ac.fillRect(0,0,1024,1024);
  const wash=ac.createLinearGradient(0,0,0,1024);wash.addColorStop(0,'#c7ccc8');wash.addColorStop(.55,'#e4e0d4');wash.addColorStop(1,'#b0aa94');ac.fillStyle=wash;ac.fillRect(0,0,1024,1024);
  for(let layer=0;layer<5;layer++){ac.fillStyle=['#a8b0a4','#919d8c','#87927f','#73806e','#687561'][layer];ac.beginPath();ac.moveTo(0,1024);for(let x=0;x<=1024;x+=8)ac.lineTo(x,540+layer*66+Math.sin(x*.004+layer*2)*42+Math.sin(x*.012+layer)*15);ac.lineTo(1024,1024);ac.fill();}
  const art=mesh(new PlaneGeometry(1.05,1.52),library.surface('ceramic','#ffffff',{map:library.texture(artCanvas,true),roughness:.95,envMapIntensity:.1}),-.529,3.45,-4.35);art.rotation.y=Math.PI/2;art.castShadow=false;
  // Offset wall fluting is architectural, not a copied window pattern.
  for(let i=0;i<8;i++)box(-.73,2.15,6.0+i*.13,.018,4.3,.018,darkOak);

  // A suspended mobile adds slow, independent secondary motion.
  const mobile=new Group();mobile.position.set(3.3,4.9,-2.4);mobile.name='Counterpoise_mobile';room.add(mobile);
  rod([0,0,0],[0,2.0,0],.008,copper,mobile);
  rod([0,0,-.9],[0,0,.9],.012,copper,mobile);
  const pendantGlow=library.surface('ceramic','#e9ddc5',{roughness:.28,emissive:'#ffdfae',emissiveIntensity:.03});
  for(const[z,drop,r]of[[-.9,.38,.19],[.0,.85,.16],[.9,.58,.22]]){
    rod([0,0,z],[0,-drop,z],.007,copper,mobile);
    cylinder(0,-drop-.015,z,r*.24,.07,copper,mobile);
    sphere(0,-drop-r-.025,z,r,pendantGlow,[1,1.05,1],mobile);
  }
  const pendantLight=new PointLight('#ffe1b8',0,5.5,2);pendantLight.position.set(3.3,4.15,-2.4);room.add(pendantLight);
  const clock=createMechanicalClock(T,{mesh,geometry,torus,cylinder,box,rod,library},room);
  clock.scale.setScalar(1.05);clock.position.y=4.94;clock.position.z=3.95;
  const clockLight=new PointLight('#ffe1af',0,2.2,2);clockLight.position.set(.0,4.94,3.95);room.add(clockLight);
  // A bronze wall sconce and warm shelf strip balance the floor lamp at night.
  const luminous=library.surface('ceramic','#e7dcc7',{emissive:'#ffd59a',emissiveIntensity:0,roughness:.47});
  roundedBox(-.64,2.94,5.63,.10,.60,.18,.035,copper);
  rod([-.58,2.75,5.63],[-.22,2.75,5.63],.017,copper);
  const sconce=cylinder(-.22,2.98,5.63,.105,.46,luminous);
  cylinder(-.22,2.745,5.63,.112,.023,copper);cylinder(-.22,3.215,5.63,.112,.023,copper);
  const sconceLight=new PointLight('#ffdeb7',0,5.3,2);sconceLight.position.set(.05,2.98,5.63);room.add(sconceLight);
  const shelfGlow=library.surface('ceramic','#fff1d2',{emissive:'#ffcf88',emissiveIntensity:0});
  box(-.11,2.056,4.5,.13,.012,1.85,shelfGlow);
  const shelfLight=new PointLight('#ffe3c0',0,3.5,2);shelfLight.position.set(.22,1.98,4.5);room.add(shelfLight);
  const flowerLight=new PointLight('#ffb953',0,6.5,2);flowerLight.position.set(3.1,2.7,0);room.add(flowerLight);
  const tvWall=createTVWall(T,{mesh,box,roundedBox,cylinder,library,plaster,oak,ink,copper},room);
  const materialDefaults=new Map();
  room.traverse(o=>{if(o.material?.isMeshStandardMaterial&&!materialDefaults.has(o.material))materialDefaults.set(o.material,{env:o.material.envMapIntensity,emissive:o.material.emissiveIntensity});});
  let dustAdjusted=false,previousFrame=performance.now(),lastNight=-1;
  let nightAmount=getRoomLighting().theme==='dark'?1:0;
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function applyLighting(n){
    ambient.intensity=.40*(1-n)+.12*n;ambient.color.set(n>.5?'#91a6ce':'#e6e9eb');
    key.intensity=1.3*(1-n)+.105*n;key.color.setRGB(1-(.49*n),.93-(.29*n),.85+.15*n);
    fill.intensity=.76*(1-n)+.14*n;bounce.intensity=.23*(1-n)+.075*n;
    for(const[m,base]of materialDefaults){m.envMapIntensity=base.env*(1-.83*n);m.emissiveIntensity=base.emissive*(1-.94*n);}
    shade.material.emissiveIntensity=.12+1.1*n;diffuser.material.emissiveIntensity=.45+1.5*n;
    luminous.emissiveIntensity=.03+1.9*n;shelfGlow.emissiveIntensity=2.5*n;cove.emissiveIntensity=.18+1.15*n;
    lampLight.intensity=.6+2.0*n;sconceLight.intensity=1.6*n;shelfLight.intensity=.50*n;flowerLight.intensity=.65*n;clockLight.intensity=.38*n;
    pendantGlow.emissiveIntensity=.03+1.1*n;pendantLight.intensity=1.25*n;
    tvWall.userData.update(n);
    skyMaterial.uniforms.uNight.value=n;room.userData.night=n;
  }
  applyLighting(nightAmount);
  room.userData.update=time=>{
    mobile.rotation.y=Math.sin(time*.00016)*.12;
    if(room.parent?._bgGradientMesh)room.parent._bgGradientMesh.visible=false;
    const dust=room.parent?._particlesMesh?._material?.uniforms;
    if(dust&&!dustAdjusted){dust.uOpacity.value=.10;dust.uScale.value*=.40;dustAdjusted=true;}
    const now=new Date(),stamp=performance.now(),dt=Math.min(.1,(stamp-previousFrame)/1000);previousFrame=stamp;
    const target=getRoomLighting(now).theme==='dark'?1:0;
    nightAmount=reducedMotion?target:nightAmount+(target-nightAmount)*(1-Math.exp(-dt*4.5));
    if(Math.abs(nightAmount-target)<.001)nightAmount=target;
    if(Math.abs(nightAmount-lastNight)>.001){applyLighting(nightAmount);lastNight=nightAmount;}
    clock.userData.update(now,nightAmount);
  };
  room.userData.design='Orbital Atelier: neutral linen and oak, honed stone, soft window daylight; flower and camera retained separately.';
  return room;
}
