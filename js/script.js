
const memories=[
{title:'Memória 1',image:'https://picsum.photos/800/500?1',date:'2026',description:'Troque por uma memória real.'},
{title:'Memória 2',image:'https://picsum.photos/800/500?2',date:'2026',description:'Troque por uma memória real.'},
{title:'Memória 3',image:'https://picsum.photos/800/500?3',date:'2026',description:'Troque por uma memória real.'},
{title:'Memória 4',image:'https://picsum.photos/800/500?4',date:'2026',description:'Troque por uma memória real.'},
{title:'Memória 5',image:'https://picsum.photos/800/500?5',date:'2026',description:'Troque por uma memória real.'}
];

const intro=document.getElementById('intro');
const sky=document.getElementById('sky');
const startBtn=document.getElementById('startBtn');
const starsDiv=document.getElementById('stars');
const counter=document.getElementById('counter');

const modal=document.getElementById('modal');
const mImg=document.getElementById('mImg');
const mTitle=document.getElementById('mTitle');
const mDate=document.getElementById('mDate');
const mDesc=document.getElementById('mDesc');

startBtn.addEventListener('click',()=>{
 intro.classList.add('hidden');
 sky.classList.remove('hidden');
});

counter.textContent=`${memories.length} memórias guardadas neste céu`;

memories.forEach((m)=>{
 const s=document.createElement('div');
 s.className='star';
 s.style.left=(10+Math.random()*80)+'%';
 s.style.top=(10+Math.random()*70)+'%';
 s.addEventListener('click',()=>{
   mImg.src=m.image;
   mTitle.textContent=m.title;
   mDate.textContent=m.date;
   mDesc.textContent=m.description;
   modal.classList.remove('hidden');
 });
 starsDiv.appendChild(s);
});

document.getElementById('closeBtn').addEventListener('click',()=>modal.classList.add('hidden'));
modal.addEventListener('click',(e)=>{if(e.target===modal) modal.classList.add('hidden')});

const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
function resize(){canvas.width=innerWidth;canvas.height=innerHeight}
resize();window.addEventListener('resize',resize);

let on=false;
document.getElementById('constBtn').addEventListener('click',()=>{
 on=!on;
 ctx.clearRect(0,0,canvas.width,canvas.height);
 if(!on) return;
 const stars=[...document.querySelectorAll('.star')];
 for(let i=0;i<stars.length-1;i++){
   const a=stars[i].getBoundingClientRect();
   const b=stars[i+1].getBoundingClientRect();
   ctx.beginPath();
   ctx.moveTo(a.left,a.top);
   ctx.lineTo(b.left,b.top);
   ctx.strokeStyle='rgba(255,255,255,.5)';
   ctx.stroke();
 }
});
