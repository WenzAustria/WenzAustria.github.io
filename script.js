const r=document.documentElement;
try{const s=localStorage.getItem("theme");if(s)r.dataset.theme=s}catch(e){}
document.getElementById("theme").onclick=()=>{r.dataset.theme=r.dataset.theme==="dark"?"light":"dark";try{localStorage.setItem("theme",r.dataset.theme)}catch(e){}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));

const bar=document.getElementById("bar"),links=[...document.querySelectorAll("nav ul a[href^='#']")],secs=links.map(a=>document.querySelector(a.getAttribute("href")));
addEventListener("scroll",()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%";
let c=-1;secs.forEach((x,i)=>{if(x&&x.getBoundingClientRect().top<innerHeight*.4)c=i});links.forEach((a,i)=>a.classList.toggle("on",i===c))},{passive:true});

document.addEventListener("mousemove",e=>{const c=e.target.closest&&e.target.closest(".card");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")}});
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const el=e.target,end=parseFloat(el.dataset.n),d=(el.dataset.n.split(".")[1]||"").length,t0=performance.now();
(function f(t){const p=Math.min((t-t0)/1200,1),v=end*(1-Math.pow(1-p,3));el.textContent=v.toFixed(d);if(p<1)requestAnimationFrame(f)})(t0)}),{threshold:.6});
document.querySelectorAll("[data-n]").forEach(el=>co.observe(el));

const roles=["Visual Director","Events Management Head","Graphic Designer","Social Media Manager"],re=document.getElementById("role");let ri=0;
setInterval(()=>{re.classList.add("out");setTimeout(()=>{ri=(ri+1)%roles.length;re.textContent=roles[ri];re.classList.remove("out")},400)},2600);
const mn=document.getElementById("mnav");document.getElementById("menu").onclick=()=>mn.classList.toggle("show");mn.onclick=e=>{if(e.target.tagName==="A")mn.classList.remove("show")};
document.querySelectorAll(".f").forEach(b=>b.onclick=()=>{document.querySelectorAll(".f").forEach(x=>x.classList.toggle("on",x===b));document.querySelectorAll("[data-t]").forEach(c=>c.style.display=(b.dataset.f==="all"||c.dataset.t===b.dataset.f)?"":"none")});
const tb=document.getElementById("topbtn");tb.onclick=()=>scrollTo({top:0,behavior:"smooth"});addEventListener("scroll",()=>tb.classList.toggle("show",scrollY>600),{passive:true});

document.querySelectorAll(".sw button").forEach(b=>b.onclick=()=>{const t=b.innerHTML;try{navigator.clipboard.writeText(b.dataset.c)}catch(e){}const cp=document.getElementById("cp");cp.textContent="Copied "+b.dataset.c;setTimeout(()=>cp.textContent="Click a swatch to copy its code.",1400)});
const ph=document.querySelector(".photo"),rg=document.querySelector(".ring");
ph.addEventListener("mousemove",e=>{const r=ph.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;rg.style.transform="perspective(900px) rotateY("+x*10+"deg) rotateX("+(-y*10)+"deg)"});
ph.addEventListener("mouseleave",()=>rg.style.transform="");
