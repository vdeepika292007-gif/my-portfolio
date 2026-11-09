/* A live, skeleton-dial wall clock. Hand angles use visitor-local civil time;
   the decorative meshing train is driven from wall time, never accumulated frames. */
export function clockAngles(date=new Date()){
  const seconds=date.getSeconds()+date.getMilliseconds()/1000;
  const minutes=date.getMinutes()+seconds/60;
  const hours=date.getHours()%12+minutes/60;
  return {hour:-hours*Math.PI/6,minute:-minutes*Math.PI/30,second:-seconds*Math.PI/30};
}
export function createMechanicalClock(T,H,parent){
  const {Group,PlaneGeometry,Vector3}=T;
  const {mesh,geometry,torus,cylinder,box,rod,library}=H;
  const clock=new Group();clock.name='Live_mechanical_wall_clock';clock.position.set(-.48,5.12,4.25);clock.rotation.y=Math.PI/2;parent.add(clock);
  const brass=library.surface('metal','#bda374',{roughness:.32,emissive:'#af7d32',emissiveIntensity:0});
  const steel=library.surface('metal','#74817e',{roughness:.39,emissive:'#6a776b',emissiveIntensity:0});
  const dark=library.surface('metal','#333c3c',{metalness:.48,roughness:.48});
  const handMat=library.surface('metal','#25332f',{metalness:.4,roughness:.39,emissive:'#f4d99d',emissiveIntensity:0});
  const secondMat=library.surface('metal','#ae643d',{metalness:.5,roughness:.34,emissive:'#ffbc65',emissiveIntensity:0});
  function disc(x,y,z,r,depth,material,target=clock){const o=cylinder(x,y,z,r,depth,material,target);o.rotation.x=Math.PI/2;return o;}
  disc(0,0,-.065,.755,.09,dark);
  mesh(torus(.755,.025),brass,0,0,.02,clock);
  mesh(torus(.718,.010),steel,0,0,.054,clock);
  const faceCanvas=library.canvas(1024),ctx=faceCanvas.getContext('2d');
  ctx.translate(512,512);ctx.fillStyle='#e8e2d3';ctx.beginPath();ctx.arc(0,0,475,0,Math.PI*2);ctx.arc(0,0,335,0,Math.PI*2,true);ctx.fill();
  ctx.strokeStyle='#786746';ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,472,0,Math.PI*2);ctx.arc(0,0,337,0,Math.PI*2);ctx.stroke();
  for(let i=0;i<60;i++){const a=i*Math.PI/30;ctx.save();ctx.rotate(a);ctx.strokeStyle='#29352e';ctx.lineWidth=i%5===0?5:2;ctx.beginPath();ctx.moveTo(0,-457);ctx.lineTo(0,i%5===0?-424:-443);ctx.stroke();ctx.restore();}
  ctx.font='52px Georgia, serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#28352d';
  for(let i=1;i<=12;i++){const a=i*Math.PI/6;ctx.fillText(String(i),Math.sin(a)*385,-Math.cos(a)*385+3);}
  const dialMat=library.surface('ceramic','#ffffff',{map:library.texture(faceCanvas,true),transparent:true,alphaTest:.02,roughness:.9,envMapIntensity:.2,emissive:'#d2bc86',emissiveIntensity:0});
  const dial=mesh(new PlaneGeometry(1.48,1.48),dialMat,0,0,.12,clock);dial.castShadow=false;
  function gearGeometry(radius,teeth){
    const p=[],idx=[],segments=teeth*4,inside=radius*.64,half=.012;
    for(let i=0;i<=segments;i++){
      const a=i/segments*Math.PI*2,edge=radius*(i%4===1||i%4===2?1:.88);
      p.push(Math.cos(a)*edge,Math.sin(a)*edge,half,Math.cos(a)*inside,Math.sin(a)*inside,half,Math.cos(a)*edge,Math.sin(a)*edge,-half,Math.cos(a)*inside,Math.sin(a)*inside,-half);
      if(i<segments){const k=i*4,n=k+4;idx.push(k,n,k+1,n,n+1,k+1,k+2,k+3,n+2,n+2,k+3,n+3,k,k+2,n,n,k+2,n+2,k+1,n+1,k+3,n+1,n+3,k+3);}
    }return geometry(p,idx);
  }
  function gear(x,y,r,teeth,material){
    const g=new Group();g.position.set(x,y,.041);clock.add(g);mesh(gearGeometry(r,teeth),material,0,0,0,g);
    disc(0,0,0,r*.16,.038,material,g);
    for(let i=0;i<5;i++){const a=i*Math.PI*2/5;rod([Math.cos(a)*r*.12,Math.sin(a)*r*.12,0],[Math.cos(a)*r*.70,Math.sin(a)*r*.70,0],.009,material,g);}
    disc(0,0,.025,.016,.018,steel,g);return g;
  }
  const gearA=gear(-.225,.10,.23,30,brass),gearB=gear(.168,.13,.18,22,steel),gearC=gear(.195,-.25,.213,26,brass);
  const balance=new Group();balance.position.set(-.282,-.265,.06);clock.add(balance);mesh(torus(.092,.008),brass,0,0,0,balance);rod([-.082,0,0],[.082,0,0],.005,steel,balance);rod([0,-.082,0],[0,.082,0],.005,steel,balance);
  disc(0,0,.17,.045,.024,brass);
  function hand(length,width,z,material,tail){const g=new Group();g.position.z=z;clock.add(g);box(0,(length-tail)/2,0,width,length+tail,.011,material,g);disc(0,length,0,width*.48,.012,material,g);return g;}
  const hour=hand(.32,.030,.205,handMat,.07),minute=hand(.49,.021,.228,handMat,.085),second=hand(.55,.007,.25,secondMat,.13);
  disc(0,0,.268,.027,.022,brass);
  let lastNight=-1;
  clock.userData.update=(date,night)=>{
    const angles=clockAngles(date);hour.rotation.z=angles.hour;minute.rotation.z=angles.minute;second.rotation.z=angles.second;
    const t=date.getTime()/1000,phase=(t%30)*Math.PI*2/30;
    gearA.rotation.z=phase;gearB.rotation.z=-phase*30/22+.09;gearC.rotation.z=phase*30/26+.06;balance.rotation.z=Math.sin(t*Math.PI*5)*.26;
    if(Math.abs(night-lastNight)>.002){
      brass.emissiveIntensity=night*.16;steel.emissiveIntensity=night*.10;dialMat.emissiveIntensity=night*.18;handMat.emissiveIntensity=night*.75;secondMat.emissiveIntensity=night*.42;lastNight=night;
    }
  };
  return clock;
}
