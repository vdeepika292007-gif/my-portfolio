/* Deterministic scroll camera path. Coordinates are in the existing room's units. */
export const clamp01=x=>Math.max(0,Math.min(1,x));
export const smooth=(a,b,x)=>{const t=clamp01((x-a)/(b-a));return t*t*(3-2*t);};
const ease=(a,b,x)=>{const t=clamp01((x-a)/(b-a));return t*t*t*(t*(6*t-15)+10);};
const mix=(a,b,t)=>a.map((x,i)=>x+(b[i]-x)*t);
const normal=v=>{const n=Math.hypot(...v)||1;return v.map(x=>x/n);};
const toward=(from,to)=>normal(to.map((x,i)=>x-from[i]));
const bezier=(a,b,c,d,t)=>a.map((x,i)=>(1-t)**3*x+3*(1-t)**2*t*b[i]+3*(1-t)*t*t*c[i]+t**3*d[i]);
// Preserve the original page layout; give the TV handoff extra scroll time so
// native content arrives during the dissolve instead of after an empty pause.
export function roomScrollProgress(scroll,height,viewport){
  const range=Math.max(1,height-viewport),raw=Math.max(0,scroll)/range;
  const finish=(height-viewport*.12)/range;
  return clamp01(raw<=.75?raw:.75+(raw-.75)*.25/Math.max(.25,finish-.75));
}
export function sampleRoomPath(progress,aspect=1.6,start=[14.7563982,2.31075716,0]){
  const p=clamp01(progress),approach=[4.15,1.85,4.15],seat=[2.23,1.28,3.22],tv=[8.545,2.10,2.7];
  const fov=Math.min(100,Math.max(55,2*Math.atan(Math.tan(Math.PI/6)/Math.max(.3,aspect))*180/Math.PI));
  let position=[...start],direction=[-1,0,0],stage='studio';
  const tangent=Math.tan(fov*Math.PI/360),heightFit=2.39/(2*tangent),widthFit=4.25/(2*Math.max(.3,aspect)*tangent);
  const fitDistance=Math.max(heightFit,widthFit)*1.10,coverDistance=Math.min(heightFit,widthFit)/1.04;
  const aligned=[tv[0]-fitDistance,tv[1],tv[2]],covered=[tv[0]-coverDistance,tv[1],tv[2]];
  if(p>.07&&p<.36){const t=smooth(.07,.36,p);position=bezier(start,[10.8,2.8,3.0],[6,2.1,4.6],approach,t);direction=normal(mix([-1,0,0],toward(position,[1.9,.95,3.22]),t));stage='approach';}
  else if(p>=.36&&p<.50){const t=smooth(.36,.50,p);position=mix(approach,seat,t);direction=normal(mix(toward(approach,[1.9,.95,3.22]),normal([.18,.06,-1]),t));stage='sit';}
  else if(p>=.50&&p<.65){const t=smooth(.50,.65,p);position=[...seat];direction=normal(mix(normal([.18,.06,-1]),toward(seat,tv),t));stage='turn';}
  else if(p>=.65&&p<.75){position=[...seat];direction=toward(seat,tv);stage='sofa';}
  else if(p>=.75){
    // First square up to the complete screen. Fade its type while it still fits.
    // Only the empty screen then expands; the camera never crosses the panel.
    if(p<.835){position=mix(seat,aligned,ease(.75,.835,p));direction=toward(position,tv);}
    else if(p<.845){position=[...aligned];direction=[1,0,0];}
    else{position=mix(aligned,covered,ease(.845,.94,p));direction=[1,0,0];}
    stage=p<.805?'tv':p<.94?'portal':'portfolio';
  }
  return {position,direction,fov,stage,blend:smooth(.07,.24,p),titleOpacity:1-smooth(.785,.84,p),portalFade:ease(.84,.94,p)};
}
