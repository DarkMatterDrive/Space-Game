let pix;
let boxY = 50;
let boxX = 67; // idk bro
let speed = 3;
let timer;
var VW = 600;
var VH = 300;

if (VW >= VH){
var REM = VH/160;
}else{
var REM = VW/160;
}

let Upscale = 1
VW = VW * Upscale;
VH = VH * Upscale;
REM = REM * Upscale;

function preload(){
pix = loadImage("Astronaut_Blue.png");
}

function setup() {
  createCanvas(VW, VH);
  textSize(18);
}

function draw() {
  background(0,155,155);
  fill(255,0,0);
  //square(155,boxY,20);
  noSmooth()
  image(pix,100,boxY,16*REM,16*REM);
  boxY += speed;
  
  if (boxY < 0){
  boxY=1;
  }
  
  if (boxY > height){
  image(pix,100,500,250,100);
  text("you lasted " + round(timer,3) + " seconds riplol",250,100);
  }else{
  fill(255)
    timer = millis()/1000;
    text("you're bussin on the number " + round(timer,0/*3*/) + " second",20,100);
  }
  
}

function keyPressed(){
if (key/* == " " || keyCode == UP_ARROW*/){
boxY -= 1*REM;
speed += 0.01;
};
  
};

