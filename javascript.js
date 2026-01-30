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

