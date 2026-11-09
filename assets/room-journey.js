import {sampleRoomPath,smooth,roomScrollProgress} from './room-path.js?v=portal3';
const cache=new WeakMap();let hud=null,pendingSkip=false,pointer=[0,0];
if(typeof document!=='undefined'){
  document.documentElement.dataset.journeyEnabled='true';
  window.addEventListener('pointermove',e=>{pointer=[e.clientX/Math.max(1,innerWidth)*2-1,e.clientY/Math.max(1,innerHeight)*2-1];},{passive:true});
}
function controls(){
  if(hud)return hud;
  hud=document.createElement('div');hud.className='room-journey-hud';hud.hidden=true;
  hud.innerHTML='<div class="room-journey-hud__copy"><span class="room-journey-hud__number">01 / 04</span><span class="room-journey-hud__title">The studio</span></div><div class="room-journey-hud__track" aria-hidden="true"><span></span></div><button type="button" aria-label="Skip room tour and view portfolio">Skip to portfolio <span aria-hidden="true">↗</span></button>';
  hud.querySelector('button').addEventListener('click',()=>{pendingSkip=true;});document.body.append(hud);return hud;
}
const labels={studio:['01 / 04','Scroll to take a seat'],approach:['01 / 04','A seat in the studio'],sit:['02 / 04','Make yourself comfortable'],turn:['02 / 04','Turn toward the other wall'],sofa:['03 / 04','Your view from the sofa'],tv:['04 / 04','Step inside the portfolio'],portal:['04 / 04','Opening the portfolio'],portfolio:['04 / 04','Explore the portfolio']};
export function beginRoomJourney(engine,app){
  const root=document.documentElement,room=engine.scene.getObjectByName('Sunroom_OrbitalAtelier'),wall=room?.getObjectByName('Sofa_TV_gallery_wall');
  if(!room||engine.scene._currentRouteName!=='home'||!app.isLoaderRevealComplete||engine._pageTransitionHidingGroups){
    if(hud)hud.hidden=true;if(wall){wall.visible=false;wall.userData.setEntryOpacity?.(1);}root.dataset.journeyStage='off';if(room){room.userData.portalFade=0;room.userData.journeyProgress=0;}return null;
  }
  const header=document.querySelector('.page .headerBlock');if(!header)return null;
  const scroll=app.lenis?.animatedScroll??scrollY,rect=header.getBoundingClientRect(),top=rect.top+scroll,end=top+rect.height;
  if(pendingSkip){pendingSkip=false;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;if(app.lenis)app.lenis.scrollTo(end+8,{duration:reduced?0:1.0,immediate:reduced});else window.scrollTo({top:end+8,behavior:reduced?'instant':'smooth'});}
  const active=scroll>=top-2&&scroll<end;
  if(!active){if(hud)hud.hidden=true;if(wall){wall.visible=false;wall.userData.setEntryOpacity?.(1);}root.dataset.journeyStage='off';room.userData.portalFade=0;room.userData.journeyProgress=0;return null;}
  let state=cache.get(engine);
  if(!state){const c=engine.camera;state={basePosition:c.position.clone(),baseWorld:c.position.clone(),baseWorldQ:c.quaternion.clone(),worldPosition:c.position.clone(),look:c.position.clone(),direction:c.position.clone(),up:c.up.clone(),rotationMatrix:c.matrixWorld.clone(),q:c.quaternion.clone(),parentQ:c.quaternion.clone(),lastStage:''};cache.set(engine,state);}
  const camera=engine.camera;
  camera.parent.updateWorldMatrix(true,false);camera.updateWorldMatrix(true,false);
  const p=roomScrollProgress(scroll-top,rect.height,innerHeight);
  if(p<.075){camera.getWorldPosition(state.baseWorld);camera.getWorldQuaternion(state.baseWorldQ);}
  const path=sampleRoomPath(p,camera.aspect,state.baseWorld.toArray());
  room.userData.journeyProgress=p;room.userData.portalFade=path.portalFade;wall?.userData.setEntryOpacity?.(path.titleOpacity);
  root.dataset.journeyStage=path.stage;root.dataset.journeyProgress=p.toFixed(3);
  root.style.setProperty('--journey-copy-opacity',String(1-smooth(.035,.15,p)));
  root.style.setProperty('--journey-hud-opacity',String(1-smooth(.77,.805,p)));
  root.style.setProperty('--journey-controls-opacity',String(1-smooth(.77,.805,p)));
  const panel=controls();panel.hidden=path.stage==='portal'||path.stage==='portfolio';
  if(state.lastStage!==path.stage){const text=labels[path.stage];panel.querySelector('.room-journey-hud__number').textContent=text[0];panel.querySelector('.room-journey-hud__title').textContent=text[1];state.lastStage=path.stage;}
  panel.querySelector('.room-journey-hud__track span').style.transform=`scaleX(${p})`;
  if(path.stage==='portfolio'||path.stage==='portal'){if(p>.89)root.dataset.roomHero='false';const lightPanel=document.getElementById('room-lighting-controls');if(lightPanel)lightPanel.hidden=true;}
  const old={position:camera.position.clone(),quaternion:camera.quaternion.clone(),zoom:camera.zoom,fov:camera.fov,visible:room.parent.visible,onHeader:app.isOnHeader};
  app.isOnHeader=true;room.parent.visible=path.portalFade<.999;
  if(!engine.isHomeAboutGroupsRenderActive)room.userData.update?.(performance.now());
  if(wall)wall.visible=path.position[0]<8.2&&p>.2&&path.portalFade<.999;
  if(p>.07){
    state.worldPosition.fromArray(path.position);state.direction.fromArray(path.direction);
    const subtle=(1-smooth(.77,.815,p))*.009;state.direction.z+=pointer[0]*subtle;state.direction.y-=pointer[1]*subtle;
    state.look.copy(state.worldPosition).add(state.direction);
    state.rotationMatrix.lookAt(state.worldPosition,state.look,state.up);
    state.q.setFromRotationMatrix(state.rotationMatrix);
    state.q.copy(state.baseWorldQ).slerp(state.parentQ.setFromRotationMatrix(state.rotationMatrix),smooth(.07,.18,p));
    camera.position.copy(camera.parent.worldToLocal(state.worldPosition));
    camera.parent.getWorldQuaternion(state.parentQ).invert();camera.quaternion.copy(state.parentQ.multiply(state.q));
    camera.fov=old.fov+(path.fov-old.fov)*path.blend;camera.zoom=old.zoom+(1-old.zoom)*path.blend;camera.updateProjectionMatrix();camera.updateWorldMatrix(true,false);
  }
  return()=>{camera.position.copy(old.position);camera.quaternion.copy(old.quaternion);camera.zoom=old.zoom;camera.fov=old.fov;camera.updateProjectionMatrix();camera.updateWorldMatrix(true,false);room.parent.visible=old.visible;app.isOnHeader=old.onHeader;};
}
