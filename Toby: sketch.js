let BHealth = 16;
let RHealth = 16;
let CarryB = false;
let CarryR = false;
let PlayerBImage;
let PlayerRImage;
let speed = 3;
let timer;
var VW = 400;
var VH = 600;
let OnGroundB = false;
let OnGroundR = false;
let GravityB = 1.5;
let MotionB = 0;
let GravityR = 1.5;
let MotionR = 0;

if (VW >= VH){
var REM = VH/160;
}else{
var REM = VW/160;
}

let Upscale = 1
VW = VW * Upscale;
VH = VH * Upscale;
REM = REM * Upscale;

let PlayerBY = 16*REM;
let PlayerBX = 16*REM;

let PlayerRY = 16*REM;
let PlayerRX = VW-32*REM;

function preload(){
PlayerBImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nKSTLQ4CMRCFZzfr0Q0JQYHrNeowOO6ABY0EyxUIDoOr5BigCAmp5gQlbZhmOv2BsE9tZvZ7nd157SCVhe9qkgeEtdYgpazSQojANhx2Wu5OoTgYTiP4vF1EJi13r8HjyQhm62NU66AgDjvdb4+kVjT4Vb0N2lLj9bzCXwb71bwK4BY+smjgw6OUikz4FHSFuHL3D6LwYPNy2GQnoDAaJMJJ6ItOeAj2IRckBOlUmWg3wKJsKcxP5J8AtcuEJmRML2MMwlWDYML6uZrXGwAA///rE/i5AAAABklEQVQDAPT/RLRZ5yPnAAAAAElFTkSuQmCC");
PlayerRImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nKSTwQ3DIAxFTZQRcuHYBViDa+foEB2jc/TKND1yyQ40UEzA2DRKnhQpMvrfxjYz9AT4j+p+UOycA2PMUK21LlpFxZG3tSW4EPHD+8Zkou4j8W37Xj9hYQaBhYl9mJhocJTLBpN0sMJJg3uehAROIRPQIC2PzRNAk1UQxxHiyGMPmuXBw2ebqVCL0aADK3HkOpjE7rui2CZGYV0Vs9oKyCqHWkwz0ivA6DGhSVVmwm890fsaiwbFhJxzscQXAAD//8gwZTUAAAAGSURBVAMAz0FAI7sKTL4AAAAASUVORK5CYII=");
}

function setup() {
  createCanvas(VW, VH);
  textSize(18);
}

function draw() {
  background(0);
  PlayerB()
  PlayerR()
}
