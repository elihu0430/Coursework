



// Calculator
const display = document.getElementById("display");
let isOn = false;

function togglePower(){
isOn = !isOn;
const btn = document.getElementById('powerBtn');

btn.classList.toggle('active');
console.log("Device is on: " + (isOn ? "ON" : "OFF"));s
}

function appendToDisplay(input){
display.value += input;
}

function clearDisplay(){
display.value = "";
}

function calculate(){
try{
display.value = eval(display.value);
}
catch(error){
display.value = "Error";
}
}

//Engineering Services
const etitle = document.querySelector(".c_title");
if (etitle){
etitle.style.fontFamily =  "Calibre, serif";
etitle.style.fontSize = "37px";
}

// Refreshco
const txt = document.querySelector(".c__text");
if (txt) {
  txt.style.fontSize = "17px";
  txt.style.fontFamily = "Times New Roman, serif";
}

const title = document.querySelector(".c_title");
if (title){
title.style.fontFamily =  "Calibre, serif";
title.style.fontSize = "30px";
}

//Training

window.addEventListener("load", () =>{
const im3 = document.getElementById("im3");
const im4 = document.getElementById("im4");
const im1 = document.getElementById("im1");
const im2 = document.getElementById("im2");

if (im1) im1.style.width = "800px";
if (im2) im2.style.width = "800px";
if (im3) im3.style.width = "800px";
if (im4) im4.style.width = "800px";

if (im2) im2.style.height = "500px";
if (im4) im4.style.height = "600px";
});

//farming
window.addEventListener("load", () =>{
const maize = document.getElementById("img1");
const soya = document.getElementById("img2");
const potatoes = document.getElementById("img3");
const sPotato = document.getElementById("img4");
const kales = document.getElementById("img5");
const bnuts = document.getElementById("img6");
const papr = document.getElementById("img7");
const toma = document.getElementById("img8");
const onions = document.getElementById("img9");


if (maize) maize.style.width = "330px";
if (soya) soya.style.width = "330px";
if (potatoes) potatoes.style.width = "330px";
if (sPotato) sPotato.style.width = "330px";
if (kales) kales.style.width = "330px";
if (bnuts) bnuts.style.width = "330px";
if (papr) papr.style.width = "330px";
if (toma) toma.style.width = "330px";
if (onions) onions.style.width = "390px";

function applyMobileStyles(){
if (window.innerWidth <= 768){
const ftitle = document.querySelector(".c_title");
if (ftitle){
ftitle.style.fontSize = "24px";
ftitle.style.textAlign = "center";
ftitle.style.marginBottom = "12px";
}

const paragraph = document.querySelectorAll(".f__txt");
paragraph.forEach(p => {
p.style.fontSize = "16px";
p.style.lineHeight = "1.5";
p.style.textAlign = "justify";
p.style.padding = "0 10px";
});
const crds = document.querySelectorAll(".card");
crds.forEach(card => {
card.style.width = "100%";
card.style.margin = "10px 0";
});
const farm = document.querySelector("#Farm"); if (farm) {
farm.style.flexDirection = "column";
farm.style.alignItems = "center";
}
}
}

if (maize) maize.style.height = "200px";
if (soya) soya.style.height = "200px";
if (potatoes) potatoes.style.height = "200px";
if (sPotato) sPotato.style.height = "200px";
if (kales) kales.style.height = "200px";
if (bnuts) bnuts.style.height = "200px";
if (papr) papr.style.height = "200px";
if (toma) toma.style.height = "200px";
if (onions) onions.style.height = "240px";
});