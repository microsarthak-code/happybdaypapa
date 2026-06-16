/* ==========================================
   PAPA STORYBOOK
   Made for Monu ❤️
========================================== */

const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentPage = 0;

/* ==========================================
PAGE NAVIGATION
========================================== */

function showPage(index){

pages.forEach(page=>{
page.classList.remove("active");
});

pages[index].classList.add("active");

}

nextBtn.addEventListener("click",()=>{

if(currentPage < pages.length - 1){

currentPage++;
showPage(currentPage);

}

});

prevBtn.addEventListener("click",()=>{

if(currentPage > 0){

currentPage--;
showPage(currentPage);

}

});

/* ==========================================
START JOURNEY
========================================== */

const startBtn =
document.getElementById("startJourney");

const music =
document.getElementById("bgMusic");

if(startBtn){

startBtn.addEventListener("click",()=>{

try{
music.play();
}catch(err){}

currentPage = 1;
showPage(currentPage);

});

}

/* ==========================================
KEYBOARD SUPPORT
========================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

if(currentPage < pages.length-1){

currentPage++;
showPage(currentPage);

}

}

if(e.key==="ArrowLeft"){

if(currentPage > 0){

currentPage--;
showPage(currentPage);

}

}

});

/* ==========================================
SWIPE SUPPORT
========================================== */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart",(e)=>{

touchStartX = e.changedTouches[0].screenX;

});

document.addEventListener("touchend",(e)=>{

touchEndX = e.changedTouches[0].screenX;

handleSwipe();

});

function handleSwipe(){

const distance =
touchStartX - touchEndX;

if(distance > 50){

if(currentPage < pages.length-1){

currentPage++;
showPage(currentPage);

}

}

if(distance < -50){

if(currentPage > 0){

currentPage--;
showPage(currentPage);

}

}

}

/* ==========================================
PARTICLES
========================================== */

const particleContainer =
document.getElementById("particles");

for(let i=0;i<70;i++){

const particle =
document.createElement("div");

particle.classList.add("particle");

particle.style.left =
Math.random()*100 + "%";

particle.style.animationDuration =
(8 + Math.random()*12) + "s";

particle.style.animationDelay =
Math.random()*8 + "s";

particle.style.opacity =
Math.random();

particle.style.width =
particle.style.height =
(2 + Math.random()*6) + "px";

particleContainer.appendChild(
particle
);

}

/* ==========================================
48 REASONS
========================================== */

const reasonsContainer =
document.getElementById(
"reasonsContainer"
);

const reasons = [

"Your smile",
"Your sacrifices",
"Your wisdom",
"Your kindness",
"Your patience",
"Your strength",
"Your guidance",
"Your support",
"Your honesty",
"Your hard work",
"Your discipline",
"Your values",
"Your courage",
"Your faith",
"Your positivity",
"Your laughter",
"Your care",
"Your protection",
"Your advice",
"Your dedication",
"Your humility",
"Your generosity",
"Your trust",
"Your resilience",
"Your dreams",
"Your leadership",
"Your warmth",
"Your calmness",
"Your respect",
"Your character",
"Your loyalty",
"Your responsibility",
"Your inspiration",
"Your determination",
"Your confidence",
"Your understanding",
"Your compassion",
"Your energy",
"Your presence",
"Your encouragement",
"Your life lessons",
"Your love",
"Your blessings",
"Your support system",
"Your belief in me",
"Your example",
"Your heart",
"Because you're Papa"

];

if(reasonsContainer){

reasons.forEach((reason,index)=>{

const card =
document.createElement("div");

card.className = "reason";

card.innerHTML =

`❤️ Reason #${index+1}<br><br>${reason}`;

card.addEventListener("click",()=>{

card.style.transform =
"scale(1.08)";

setTimeout(()=>{

card.style.transform =
"scale(1)";

},300);

});

reasonsContainer.appendChild(card);

});

}

/* ==========================================
FIREWORKS
========================================== */

const celebrateBtn =
document.getElementById(
"celebrateBtn"
);

const canvas =
document.getElementById(
"fireworks"
);

if(canvas){

const ctx =
canvas.getContext("2d");

function resizeCanvas(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}

resizeCanvas();

window.addEventListener(
"resize",
resizeCanvas
);

let particles = [];

class FireworkParticle{

constructor(x,y,color){

this.x = x;
this.y = y;

this.color = color;

this.radius =
Math.random()*3+1;

this.speedX =
(Math.random()-0.5)*8;

this.speedY =
(Math.random()-0.5)*8;

this.life = 100;

}

update(){

this.x += this.speedX;
this.y += this.speedY;

this.life--;

}

draw(){

ctx.beginPath();

ctx.arc(
this.x,
this.y,
this.radius,
0,
Math.PI*2
);

ctx.fillStyle =
this.color;

ctx.fill();

}

}

function launchFirework(){

const x =
Math.random()*canvas.width;

const y =
Math.random()*
(canvas.height*0.5);

const color =
`hsl(${Math.random()*360},
100%,60%)`;

for(let i=0;i<100;i++){

particles.push(

new FireworkParticle(
x,
y,
color
)

);

}

}

function animateFireworks(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(
(p,index)=>{

p.update();
p.draw();

if(p.life <= 0){

particles.splice(
index,
1
);

}

}
);

requestAnimationFrame(
animateFireworks
);

}

animateFireworks();

if(celebrateBtn){

celebrateBtn.addEventListener(
"click",
()=>{

for(let i=0;i<10;i++){

setTimeout(()=>{

launchFirework();

},i*300);

}

}
);

}

}

/* ==========================================
CONFETTI BURST
========================================== */

function createConfetti(){

for(let i=0;i<100;i++){

const conf =
document.createElement("div");

conf.style.position =
"fixed";

conf.style.width =
"10px";

conf.style.height =
"10px";

conf.style.background =
`hsl(${Math.random()*360},
100%,60%)`;

conf.style.left =
Math.random()*100+"vw";

conf.style.top =
"-20px";

conf.style.zIndex =
9999;

conf.style.pointerEvents =
"none";

document.body.appendChild(conf);

const duration =
3000 +
Math.random()*2000;

conf.animate(

[
{
transform:
"translateY(0)"
},
{
transform:
`translateY(${window.innerHeight+100}px)
rotate(720deg)`
}
],

{
duration,
easing:"linear"
}

);

setTimeout(()=>{

conf.remove();

},duration);

}

}

/* ==========================================
AUTO CONFETTI ON CELEBRATION PAGE
========================================== */

if(celebrateBtn){

celebrateBtn.addEventListener(
"click",
createConfetti
);

}

/* ==========================================
EASTER EGG
========================================== */

let secretClicks = 0;

document.body.addEventListener(
"click",
()=>{

secretClicks++;

if(secretClicks === 20){

alert(
"❤️ Papa, thank you for everything.\n\nLove,\nMonu ❤️"
);

}

}
);

/* ==========================================
FADE IN EFFECT
========================================== */

document.querySelectorAll(
".chapter, .letter, .ending"
).forEach(el=>{

el.classList.add("fade-up");

});

/* ==========================================
INITIAL PAGE
========================================== */

showPage(currentPage);
