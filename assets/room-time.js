/* Visitor-local scheduling shared by the room, its clock and the manual controls. */
const storageKey='sunroom.room-lighting.v1';
const modes=['auto','light','dark'];
let mode='auto';
if(typeof window!=='undefined'){try{const saved=localStorage.getItem(storageKey);if(modes.includes(saved))mode=saved;}catch{}}
export function resolveRoomLighting(preference='auto',date=new Date()){
  const hour=date.getHours();
  return preference==='dark'||(preference!=='light'&&(hour<6||hour>=18))?'dark':'light';
}
export function getRoomLighting(date=new Date()){return {mode,theme:resolveRoomLighting(mode,date),date};}
export function setRoomLighting(value){
  if(!modes.includes(value))return;
  mode=value;
  if(typeof window!=='undefined'){try{localStorage.setItem(storageKey,value);}catch{}window.dispatchEvent(new Event('sunroom:lighting'));}
}
function installControls(){
  if(document.getElementById('room-lighting-controls'))return;
  const panel=document.createElement('aside');panel.id='room-lighting-controls';panel.className='room-lighting';panel.setAttribute('aria-label','Room lighting and local clock');panel.hidden=true;
  panel.innerHTML=`<div class="room-lighting__heading"><span>Room lighting</span><span class="room-lighting__state"></span></div>
    <div class="room-lighting__switch" role="group" aria-label="Room lighting mode">
      <button type="button" data-mode="auto" title="Use your local time: light from 06:00 to 18:00">Auto</button>
      <button type="button" data-mode="light" title="Keep the room in daylight"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>Light</button>
      <button type="button" data-mode="dark" title="Keep the room in night lighting"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.5A8.5 8.5 0 018.5 4 8.5 8.5 0 1020 15.5Z"/></svg>Dark</button>
    </div><div class="room-lighting__clock"><span>Local time</span><time></time></div>`;
  document.body.append(panel);
  const buttons=[...panel.querySelectorAll('button')],status=panel.querySelector('.room-lighting__state'),time=panel.querySelector('time');
  for(const button of buttons)button.addEventListener('click',()=>setRoomLighting(button.dataset.mode));
  let lastSecond='',lastTheme='';
  function update(){
    const now=new Date(),theme=resolveRoomLighting(mode,now),root=document.documentElement;
    if(lastTheme!==theme){root.dataset.roomLighting=theme;lastTheme=theme;}
    for(const button of buttons)button.setAttribute('aria-pressed',String(button.dataset.mode===mode));
    status.textContent=mode==='auto'?`Auto · ${theme==='dark'?'Night':'Day'}`:'Manual';
    const text=now.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
    if(text!==lastSecond){time.textContent=text;time.dateTime=now.toISOString();time.title=Intl.DateTimeFormat().resolvedOptions().timeZone;lastSecond=text;}
    const header=document.querySelector('.page .headerBlock'),rect=header?.getBoundingClientRect();
    const home=!/\/(about|playground)(?:\?|$)/.test(location.hash);
    const inRoom=home&&!!rect&&rect.bottom>innerHeight*.55&&rect.top<innerHeight&&root.dataset.journeyStage!=='portfolio';
    const portal=root.dataset.journeyStage==='portal',showing=inRoom&&!portal;
    panel.hidden=!showing;root.dataset.roomHero=String(inRoom&&(!portal||Number(root.dataset.journeyProgress)<.89));
    if(showing){const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=theme==='dark'?'#14212c':'#e8e5da';}
  }
  let pending=false;
  const schedule=()=>{if(!pending){pending=true;requestAnimationFrame(()=>{pending=false;update();});}};
  window.addEventListener('sunroom:lighting',update);
  window.addEventListener('storage',e=>{if(e.key===storageKey){mode=modes.includes(e.newValue)?e.newValue:'auto';update();}});
  window.addEventListener('hashchange',schedule);window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule,{passive:true});
  document.addEventListener('visibilitychange',update);
  new MutationObserver(schedule).observe(document.getElementById('vue-app'),{childList:true,subtree:true});
  setInterval(update,1000);update();
}
if(typeof document!=='undefined'){
  document.documentElement.dataset.roomLighting=resolveRoomLighting(mode);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installControls,{once:true});else installControls();
}
