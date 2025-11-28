let BHealth = 16;
let RHealth = 16;
let CarryB = false;
let CarryR = false;
let PlayerBImage;
let PlayerRImage;
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

let Bottom = VH;

function preload(){
PlayerBImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nKSTLQ4CMRCFZzfr0Q0JQYHrNeowOO6ABY0EyxUIDoOr5BigCAmp5gQlbZhmOv2BsE9tZvZ7nd157SCVhe9qkgeEtdYgpazSQojANhx2Wu5OoTgYTiP4vF1EJi13r8HjyQhm62NU66AgDjvdb4+kVjT4Vb0N2lLj9bzCXwb71bwK4BY+smjgw6OUikz4FHSFuHL3D6LwYPNy2GQnoDAaJMJJ6ItOeAj2IRckBOlUmWg3wKJsKcxP5J8AtcuEJmRML2MMwlWDYML6uZrXGwAA///rE/i5AAAABklEQVQDAPT/RLRZ5yPnAAAAAElFTkSuQmCC");
PlayerRImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nKSTwQ3DIAxFTZQRcuHYBViDa+foEB2jc/TKND1yyQ40UEzA2DRKnhQpMvrfxjYz9AT4j+p+UOycA2PMUK21LlpFxZG3tSW4EPHD+8Zkou4j8W37Xj9hYQaBhYl9mJhocJTLBpN0sMJJg3uehAROIRPQIC2PzRNAk1UQxxHiyGMPmuXBw2ebqVCL0aADK3HkOpjE7rui2CZGYV0Vs9oKyCqHWkwz0ivA6DGhSVVmwm890fsaiwbFhJxzscQXAAD//8gwZTUAAAAGSURBVAMAz0FAI7sKTL4AAAAASUVORK5CYII=");
  frameRate(1000)
}

function setup() {
  textSize(18);
}

function draw() {
  createCanvas(VW, VH)
  background(0);
  PlayerB()
  PlayerR()
}

function keyPressed()
  {
    if(keyCode === LEFT_ARROW)
    {
      PlayerBImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nJyTsQ3CMBBFL1GWSIOoUqF0TECRHUCiZAqaSDQULEANC9CloGAFi4ZUCAm5ZgLDofh0tmNj8jrb97/tf3YGJgp+k/gGqmkaKMsyqM7z3NAlXLw+XqnwtJ1HmZDBdLmDcTGCe/ugwtfzBu15T2MppWOQcWcuRlCMJ+M7axONYeAjlEuUQQivAd6/mK2gqiqaw+MLIfoNNovJtwsoRC6HulupqdgWI847QPru3CXvaKmNfMV+UCjmc7yNKRcNIbV3/hcdYvJJ2/uRMH0rA+cvcFSMMGTgGIXq3gAAAP//gP7XJwAAAAZJREFUAwDHqlDgk6baSwAAAABJRU5ErkJggg==");
    }
    if(keyCode === RIGHT_ARROW)
      {
        PlayerBImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA40lEQVR4nKRSOwrCQBCdle2tgyBWsZF01hYW23kBxdIr2Ag2tl5C0DvkGouNViLI1p5AncgOsz+j5hXZmTDvzVdCiAfUQwSGJRtjPjK11qCUIq78ljxZHsguyxJFsFIhY8FZlpGdjxfQ7vTJ7+VdWO2P5MsYGTNYYLnD+Zb8y/nqxEcrKIqierHfOkhoCEcAM+Ig/RncbydnDkkBLuJjNFtXLwptpgNQu/d/fgfOAcVE7ExSd0AkDMQ2uAg7IJ5QtOAP8DX/vAVO9gXEq2yaQ+qsWRuCPhE4QnytPiclEAilYp8AAAD///jT9i0AAAAGSURBVAMABDhSjpH12eAAAAAASUVORK5CYII=");
      }
    if(keyCode === 65)
    {
      PlayerRImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwElEQVR4nJxTwQ3DIAyEiCV4dgEm6J9Z2h2aNToL/07AAnnyyQ4USxRdTHBpTyISwXe2z2DUEVl9hx5tcghBOedEtrX2wNNIfnnfAu8pTYk0gUf5XMraIHAv6wn7VEVRwKDyxjIRmSrDzIlVZtQEJF+mBCQMBaj/W1kejKXyY4znAtc6hb3u19rrCsGcTOjuAeGs5+p8x21jxBN+oYiM/3CMC5L+wcIz/4qPibq4PXxI5D7zoHsLiDxDlAQ6ISnuDQAA//+g0WcoAAAABklEQVQDAD4URAAprGVRAAAAAElFTkSuQmCC");
    }
    if(keyCode === 68)
      {
        PlayerRImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nKSTwRHCIBBFF4cSvHC0ASrwTi0W4cUi7IW7FdCARy72oGwMzAcWY5I/w4QZ9r+F3Y2mXm9aluo22Rxj/OkMIZBzrnjVv+a7MWV/9r5AtBRsIPiS1hHOTmk9vuZJWjL7lCGLM13h/NnEizew1k5ffu+SNO1UBeCMXMi2Bi+q6zAEIKTVbYYyiLtAcyGrNqJBguSa4BxoycSB/AyEwABhQnWgDcI2r+4CmluAStcudRiNNTyj+xdQFQjb2npGgA40iv0AAAD//+AcE5QAAAAGSURBVAMAgKRJwtGbfzkAAAAASUVORK5CYII=");
      }
  }
