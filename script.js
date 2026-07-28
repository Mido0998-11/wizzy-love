// شاشة التحميل
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);
});

// الكتابة المتحركة
const text =
"أهلاً بك في عالم WIZZY ❤️\nهذا الموقع صُمم بكل حب من محمد إلى روان.";

let index = 0;
const typing = document.getElementById("typing");

function typeWriter() {
    if (!typing) return;

    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 60);
    }
}

typeWriter();

// عداد العلاقة
const startDate = new Date("2026-07-14T00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / 86400000);

    const hours = Math.floor(diff / 3600000) % 24;

    const minutes = Math.floor(diff / 60000) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    const counter = document.getElementById("counter");

    if(counter){

        counter.innerHTML =
        `${days} يوم | ${hours} ساعة | ${minutes} دقيقة | ${seconds} ثانية`;

    }

}

setInterval(updateCounter,1000);

updateCounter();

// الموسيقى
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

if(musicBtn){

musicBtn.onclick=function(){

if(music.paused){

music.play();

musicBtn.innerHTML="⏸️ إيقاف الموسيقى";

}else{

music.pause();

musicBtn.innerHTML="🎵 تشغيل الموسيقى";

}

};

}

// زر الحب
const loveBtn=document.getElementById("loveBtn");

if(loveBtn){

loveBtn.onclick=function(){

createHearts(80);

alert("❤️ أحبك يا روان ❤️");

};

}

// إنشاء القلوب
function createHearts(number){

for(let i=0;i<number;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*window.innerWidth+"px";

heart.style.top="-30px";

heart.style.fontSize=(20+Math.random()*35)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

document.body.appendChild(heart);

let y=-30;

let speed=2+Math.random()*5;

const move=setInterval(()=>{

y+=speed;

heart.style.top=y+"px";

heart.style.transform=`rotate(${y}deg)`;

if(y>window.innerHeight){

heart.remove();

clearInterval(move);

}

},20);

}

}

// قلوب مستمرة
setInterval(()=>{

createHearts(2);

},700);

// تأثير تحريك الماوس
document.addEventListener("mousemove",(e)=>{

const dot=document.createElement("div");

dot.style.position="fixed";

dot.style.left=e.clientX+"px";

dot.style.top=e.clientY+"px";

dot.style.width="8px";

dot.style.height="8px";

dot.style.background="cyan";

dot.style.borderRadius="50%";

dot.style.boxShadow="0 0 15px cyan";

dot.style.pointerEvents="none";

document.body.appendChild(dot);

setTimeout(()=>{

dot.remove();

},500);

});
