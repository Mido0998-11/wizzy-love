// ==========================
// WIZZY LOVE PROJECT
// ==========================

// شاشة التحميل
window.addEventListener("load", () => {

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.transition="1s";

setTimeout(()=>{

loader.style.display="none";

},1000);

},1800);

});

// ==========================
// الكتابة المتحركة
// ==========================

const message=`مرحباً روان ❤️

هذا الموقع صُمم خصيصاً لك.

كل لحظة معك أجمل من التي قبلها.

محمد | WIZZY`;

const typing=document.getElementById("typing");

let index=0;

function type(){

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(type,55);

}

}

type();


// ==========================
// عداد العلاقة
// ==========================

const startDate=new Date("2026-07-14");

function timer(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/1000/60/60/24);

const hours=Math.floor(diff/1000/60/60)%24;

const minutes=Math.floor(diff/1000/60)%60;

const seconds=Math.floor(diff/1000)%60;

document.getElementById("counter").innerHTML=

`${days} يوم

${hours} ساعة

${minutes} دقيقة

${seconds} ثانية`;

}

setInterval(timer,1000);

timer();


// ==========================
// الموسيقى
// ==========================

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

musicBtn.onclick=()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="⏸️ إيقاف";

}else{

music.pause();

musicBtn.innerHTML="🎵 تشغيل الموسيقى";

}

};


// ==========================
// زر الحب
// ==========================

const loveBtn=document.getElementById("loveBtn");

loveBtn.onclick=()=>{

for(let i=0;i<80;i++){

heart();

}

alert("❤️ أحبك يا روان ❤️");

};


// ==========================
// سقوط القلوب
// ==========================

function heart(){

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.left=Math.random()*window.innerWidth+"px";

h.style.top="-20px";

h.style.fontSize=(20+Math.random()*30)+"px";

h.style.pointerEvents="none";

h.style.zIndex="999";

document.body.appendChild(h);

let y=-20;

const speed=2+Math.random()*4;

const fall=setInterval(()=>{

y+=speed;

h.style.top=y+"px";

h.style.transform=`rotate(${y}deg)`;

if(y>window.innerHeight){

clearInterval(fall);

h.remove();

}

},20);

}

setInterval(()=>{

heart();

},600);


// ==========================
// تأثير المؤشر
// ==========================

document.addEventListener("mousemove",(e)=>{

const dot=document.createElement("div");

dot.style.position="fixed";

dot.style.left=e.clientX+"px";

dot.style.top=e.clientY+"px";

dot.style.width="6px";

dot.style.height="6px";

dot.style.background="cyan";

dot.style.borderRadius="50%";

dot.style.boxShadow="0 0 15px cyan";

dot.style.pointerEvents="none";

document.body.appendChild(dot);

setTimeout(()=>{

dot.remove();

},400);

});
