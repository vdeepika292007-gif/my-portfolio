/* Shared, locally generated PBR materials. No image downloads or runtime services. */
export function createRoomMaterials(T) {
  const {StandardMaterial,Texture,CubeTexture,PMREMGenerator,renderer,srgb}=T;
  let seed=31729;
  const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  const canvas=(size=512)=>{const c=document.createElement('canvas');c.width=c.height=size;return c;};
  function texture(c,color=false,repeat=1){const t=new Texture(c);t.wrapS=t.wrapT=1000;t.repeat.set(repeat,repeat);if(color)t.colorSpace=srgb;t.anisotropy=Math.min(8,renderer?.capabilities.getMaxAnisotropy?.()||1);t.needsUpdate=true;return t;}
  function noiseMap(kind){
    const c=canvas(),ctx=c.getContext('2d'),image=ctx.createImageData(512,512);
    for(let y=0;y<512;y++)for(let x=0;x<512;x++){
      let v=128;
      if(kind==='fabric')v=128+(x%4<2?11:-11)+(y%4<2?9:-9)+(random()-.5)*14;
      else if(kind==='brushed')v=128+(random()-.5)*8+Math.sin(y*1.7)*5;
      else v=128+(random()-.5)*13+Math.sin(x*.035)*Math.sin(y*.048)*4;
      const i=(y*512+x)*4;image.data[i]=image.data[i+1]=image.data[i+2]=v;image.data[i+3]=255;
    }ctx.putImageData(image,0,0);return c;
  }
  const plasterBump=texture(noiseMap('plaster'),false,7),fabricBump=texture(noiseMap('fabric'),false,9),brushedBump=texture(noiseMap('brushed'),false,3);
  const fabric=canvas(),f=fabric.getContext('2d');f.fillStyle='#eeece6';f.fillRect(0,0,512,512);
  for(let i=0;i<512;i++){f.strokeStyle=i%4===0?'#c1beb452':'#faf9f024';f.lineWidth=.6;f.beginPath();f.moveTo(i,0);f.lineTo(i,512);f.stroke();f.beginPath();f.moveTo(0,i);f.lineTo(512,i);f.stroke();}
  const fabricMap=texture(fabric,true,7);
  const wood=canvas(1024),w=wood.getContext('2d'),pixels=w.createImageData(1024,1024);
  for(let y=0;y<1024;y++)for(let x=0;x<1024;x++){
    const wave=x+Math.sin(y*.004)*9+Math.sin(y*.013+x*.005)*3;
    const grain=Math.sin(wave*.38+Math.sin(wave*.031)*4)*.028+Math.sin(wave*.085)*.018+(random()-.5)*.025;
    const i=(y*1024+x)*4;pixels.data[i]=171+grain*150;pixels.data[i+1]=145+grain*130;pixels.data[i+2]=111+grain*110;pixels.data[i+3]=255;
  }w.putImageData(pixels,0,0);
  // Long, low-contrast pores and occasional darker growth lines.
  for(let i=0;i<180;i++){w.strokeStyle=`rgba(73,52,29,${.015+random()*.035})`;w.lineWidth=.3+random()*.7;let x=random()*1024;w.beginPath();w.moveTo(x,0);w.bezierCurveTo(x+20,300,x-18,700,x+8,1024);w.stroke();}
  const woodMap=texture(wood,true),woodBump=texture(wood,false);
  const stone=canvas(1024),s=stone.getContext('2d'),stoneImage=s.createImageData(1024,1024);
  for(let y=0;y<1024;y++)for(let x=0;x<1024;x++){
    const cloud=Math.sin(x*.008+y*.003)*Math.sin(y*.006)*2.2+(random()-.5)*3;
    const i=(y*1024+x)*4;stoneImage.data[i]=185+cloud;stoneImage.data[i+1]=180+cloud;stoneImage.data[i+2]=169+cloud;stoneImage.data[i+3]=255;
  }s.putImageData(stoneImage,0,0);
  for(let i=0;i<12000;i++){s.fillStyle=i%3===0?'#68645d0b':'#fffdf30c';const r=.25+random()*.65;s.beginPath();s.arc(random()*1024,random()*1024,r,0,Math.PI*2);s.fill();}
  const stoneMap=texture(stone,true,3),stoneBump=texture(stone,false,3);
  const rug=canvas(1024),r=rug.getContext('2d');r.fillStyle='#c5bbae';r.fillRect(0,0,1024,1024);
  for(let i=0;i<1024;i++){r.strokeStyle=i%6<3?'#faf7e91c':'#73675115';r.lineWidth=.8;r.beginPath();r.moveTo(i,0);r.lineTo(i,1024);r.stroke();r.beginPath();r.moveTo(0,i);r.lineTo(1024,i);r.stroke();}
  const rugMap=texture(rug,true,2),rugBump=texture(rug,false,2);
  // Neutral room reflections, with one broad window rather than six bright softboxes.
  const faces=[];
  for(let i=0;i<6;i++){
    const c=canvas(128),ctx=c.getContext('2d'),g=ctx.createLinearGradient(0,0,0,128);
    g.addColorStop(0,'#c6cbd0');g.addColorStop(.55,'#9c9b96');g.addColorStop(1,'#68665f');ctx.fillStyle=g;ctx.fillRect(0,0,128,128);
    if(i===1){ctx.fillStyle='#e5edf1';ctx.fillRect(20,16,78,86);ctx.fillStyle='#a7a9a6';ctx.fillRect(56,16,3,86);}
    faces.push(c);
  }
  let envMap=null;
  if(renderer&&CubeTexture&&PMREMGenerator){const cube=new CubeTexture(faces);cube.colorSpace=srgb;cube.needsUpdate=true;const pmrem=new PMREMGenerator(renderer);envMap=pmrem.fromCubemap(cube).texture;pmrem.dispose();cube.dispose();}
  function surface(kind,color,overrides={}){
    const settings={color,roughness:.8,metalness:0,envMap,envMapIntensity:.65,side:2};
    if(kind==='plaster')Object.assign(settings,{roughness:.96,bumpMap:plasterBump,bumpScale:.008});
    if(kind==='fabric')Object.assign(settings,{map:fabricMap,roughness:.97,bumpMap:fabricBump,bumpScale:.007,envMapIntensity:.24});
    if(kind==='wood')Object.assign(settings,{map:woodMap,bumpMap:woodBump,bumpScale:.002,roughness:.56,envMapIntensity:.43});
    if(kind==='metal')Object.assign(settings,{roughness:.39,metalness:.82,bumpMap:brushedBump,bumpScale:.0008,envMapIntensity:.7});
    if(kind==='stone')Object.assign(settings,{map:stoneMap,bumpMap:stoneBump,bumpScale:.0015,roughness:.83,envMapIntensity:.23});
    if(kind==='rug')Object.assign(settings,{map:rugMap,bumpMap:rugBump,bumpScale:.009,roughness:1,envMapIntensity:.16});
    if(kind==='ceramic')Object.assign(settings,{roughness:.29,envMapIntensity:.5,bumpMap:plasterBump,bumpScale:.001});
    return new StandardMaterial({...settings,...overrides});
  }
  const colors={'warm-plaster':'#e1dfd8',teal:'#67736e',cream:'#e0ddd4','violet-upholstery':'#c0b8aa',coral:'#9a6d54',copper:'#a38b66',ink:'#303433',ochre:'#a59477',paper:'#ebe8df',rug:'#ffffff'};
  const cache=new Map();
  function material(name,color){if(!cache.has(name)){const kind=name.includes('plaster')?'plaster':name.includes('upholstery')?'fabric':name==='rug'?'rug':name==='copper'?'metal':name==='cream'||name==='paper'?'plaster':'ceramic';cache.set(name,surface(kind,colors[name]||color));}return cache.get(name);}
  return {material,surface,envMap,texture,canvas};
}
