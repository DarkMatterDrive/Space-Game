let EnemyDroneAlive = true;
let AttackB = false;
let AttackR = false;
let LookB = 0;
let LookR = 0;
let BHealth = 16;
let RHealth = 16;
let EnemyDroneHealth = 16;
let CarryB = false;
let CarryR = false;
let PlayerBImage;
let PlayerRImage;
let EnemyDroneImage;
let EnemyDroneMove = true;

var VW = 400;
var VH = 600;
if (typeof window.globalWidth === 'undefined' || typeof window.globalHeight === 'undefined') {
  console.log("nope?");
} else {
  VW = window.globalWidth;
  VH = window.globalHeight;
}

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

let EnemyDroneX = ((1/2)*VW);
let EnemyDroneY = 16*REM;

let Bottom = VH;

function preload(){
PlayerBImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVR4nKSTLQ4CMRCFZzfr0Q0JQYHrNeowOO6ABY0EyxUIDoOr5BigCAmp5gQlbZhmOv2BsE9tZvZ7nd157SCVhe9qkgeEtdYgpazSQojANhx2Wu5OoTgYTiP4vF1EJi13r8HjyQhm62NU66AgDjvdb4+kVjT4Vb0N2lLj9bzCXwb71bwK4BY+smjgw6OUikz4FHSFuHL3D6LwYPNy2GQnoDAaJMJJ6ItOeAj2IRckBOlUmWg3wKJsKcxP5J8AtcuEJmRML2MMwlWDYML6uZrXGwAA///rE/i5AAAABklEQVQDAPT/RLRZ5yPnAAAAAElFTkSuQmCC");
PlayerRImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwklEQVR4nKSTwQ3DIAxFTZQRcuHYBViDa+foEB2jc/TKND1yyQ40UEzA2DRKnhQpMvrfxjYz9AT4j+p+UOycA2PMUK21LlpFxZG3tSW4EPHD+8Zkou4j8W37Xj9hYQaBhYl9mJhocJTLBpN0sMJJg3uehAROIRPQIC2PzRNAk1UQxxHiyGMPmuXBw2ebqVCL0aADK3HkOpjE7rui2CZGYV0Vs9oKyCqHWkwz0ivA6DGhSVVmwm890fsaiwbFhJxzscQXAAD//8gwZTUAAAAGSURBVAMAz0FAI7sKTL4AAAAASUVORK5CYII=");
EnemyDroneImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAABh0lEQVR4nKxVSU7DMBT9TgtnYBByEwmKegMQbOEEbBAb7tYdsAexRCBOUEFBmRiUA4AKiPjj78ohs0PC66LOzx/en5w+5HB4dIz6/Pb+qf4t+AIBi+q80LcS3bOTMWtro5F5qIJjD9H17hvpatjSxmtgY1QYDDYQcK7p+9NGJJQNmTAGJhJ9aABm/Sn5BIho1Kn0vLWzp6wxUdKqCKbCqcBMB5A/eb65uig1qqxA9BIoR+1yT0FGr6uEVfWCetfr9eAf4tfOTu0MEPM0d/KSbkBZXkxHRT279TVsVOHt3X18ffIKmTjOJqIQ4OXktAVLqxxury+7rSEFjp59+I5joHbolaIdp/x1a3VlNEEiJiQxwsqaIwfwvG0L5m0Iw0eWlSMc+NOM7qk9TM6ue5cQAcMqWtACdMEQ+GgEXWG8iMr467UKJpOCLKcInQmwUllWGoN52lsTAFZ0PPuYwXiZ/954lKiU5WHO30BAiBhELIDzdeUrCB4UmygKa9PlnD5GQtrGgAYaPwAAAP//AiZZ4QAAAAZJREFUAwC0mLBXxrgxBAAAAABJRU5ErkJggg==");
}

function setup() {
  textSize(18);
}

function draw() {
  createCanvas(VW, VH)
  background(0);
  PlayerB()
  PlayerR()
  if(EnemyDroneAlive == true)
    {
      EnemyDrone()
    }
}

function keyPressed()
  {
    if(keyCode === LEFT_ARROW)
    {
      PlayerBImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nJyTsQ3CMBBFL1GWSIOoUqF0TECRHUCiZAqaSDQULEANC9CloGAFi4ZUCAm5ZgLDofh0tmNj8jrb97/tf3YGJgp+k/gGqmkaKMsyqM7z3NAlXLw+XqnwtJ1HmZDBdLmDcTGCe/ugwtfzBu15T2MppWOQcWcuRlCMJ+M7axONYeAjlEuUQQivAd6/mK2gqiqaw+MLIfoNNovJtwsoRC6HulupqdgWI847QPru3CXvaKmNfMV+UCjmc7yNKRcNIbV3/hcdYvJJ2/uRMH0rA+cvcFSMMGTgGIXq3gAAAP//gP7XJwAAAAZJREFUAwDHqlDgk6baSwAAAABJRU5ErkJggg==");
      LookB = -1;
    }
    if(keyCode === RIGHT_ARROW)
      {
        PlayerBImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA40lEQVR4nKRSOwrCQBCdle2tgyBWsZF01hYW23kBxdIr2Ag2tl5C0DvkGouNViLI1p5AncgOsz+j5hXZmTDvzVdCiAfUQwSGJRtjPjK11qCUIq78ljxZHsguyxJFsFIhY8FZlpGdjxfQ7vTJ7+VdWO2P5MsYGTNYYLnD+Zb8y/nqxEcrKIqierHfOkhoCEcAM+Ig/RncbydnDkkBLuJjNFtXLwptpgNQu/d/fgfOAcVE7ExSd0AkDMQ2uAg7IJ5QtOAP8DX/vAVO9gXEq2yaQ+qsWRuCPhE4QnytPiclEAilYp8AAAD///jT9i0AAAAGSURBVAMABDhSjpH12eAAAAAASUVORK5CYII=");
        LookB = 1;
      }
    if(keyCode === DOWN_ARROW)
      {
        if(LookB == 1)
        {
          PlayerBImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4klEQVR4nKRSOwoCMRCdLOmtF0Gs1ka2s7awSOcFFEuvYCPY2HoJQe+w1wg2WokgqT3ByqxJyHfjsq/JzDDvZfIyFHzUkAbxAkUWQrQyOefAGNNc+i95ubvquKoqFMFJCQ0153mu42KxhcFwovNxMYL95aZzGiLjDQo47mxz0vnz8bL6gxOUZdmc+N4UKPSEJYA3opGuB5/33fIhKmCKuJivD82JQsfVFNj5V/f2QBmofDBhTiZBTAFrA1HIFFG/o2pSjGQuqSsyt9BVxDSRyPUMwv0dkP6RSH+dIgaTNqFY7xcAAP//kjFwuwAAAAZJREFUAwAHTkoT35kVTAAAAABJRU5ErkJggg==");
          AttackB = true;
        }else if(LookB == -1)
        {
          PlayerBImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5UlEQVR4nJyTKw7CQBCGZ0kvUUNQVaSOEyB6B0iQnALTBIPgAmi4AK4CwRUaDFWEhKzmBIVpdiezT0p/t9P5v51HNwFTLfyWCB3aqqogz/OoO01Twye4eXO6UeJ5t+gFIcBstYdJNoZH86TE9+sOzeVAZymlA0g4mZtRaMbK+M0aomUAQorNpRcgpiAA+8/mayiKgmJYfl3XfsB2Oe22gEbU9ViqLyUl22YUbYEH7UFxs6pIOBVoEyba08YYb0Vd2EFG8Kf4Wo0Khpg5QHzLpjn4ZoBibThvgcsAqd82mO8DOKBY3gcAAP//AJu+ygAAAAZJREFUAwDmbFlbk3sprwAAAABJRU5ErkJggg==");
          AttackB = true;
        }
      }
    if(keyCode === 65)
    {
      PlayerRImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwElEQVR4nJxTwQ3DIAyEiCV4dgEm6J9Z2h2aNToL/07AAnnyyQ4USxRdTHBpTyISwXe2z2DUEVl9hx5tcghBOedEtrX2wNNIfnnfAu8pTYk0gUf5XMraIHAv6wn7VEVRwKDyxjIRmSrDzIlVZtQEJF+mBCQMBaj/W1kejKXyY4znAtc6hb3u19rrCsGcTOjuAeGs5+p8x21jxBN+oYiM/3CMC5L+wcIz/4qPibq4PXxI5D7zoHsLiDxDlAQ6ISnuDQAA//+g0WcoAAAABklEQVQDAD4URAAprGVRAAAAAElFTkSuQmCC");
      LookR = -1;
    }
    if(keyCode === 68)
      {
        PlayerRImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nKSTwRHCIBBFF4cSvHC0ASrwTi0W4cUi7IW7FdCARy72oGwMzAcWY5I/w4QZ9r+F3Y2mXm9aluo22Rxj/OkMIZBzrnjVv+a7MWV/9r5AtBRsIPiS1hHOTmk9vuZJWjL7lCGLM13h/NnEizew1k5ffu+SNO1UBeCMXMi2Bi+q6zAEIKTVbYYyiLtAcyGrNqJBguSa4BxoycSB/AyEwABhQnWgDcI2r+4CmluAStcudRiNNTyj+xdQFQjb2npGgA40iv0AAAD//+AcE5QAAAAGSURBVAMAgKRJwtGbfzkAAAAASUVORK5CYII=");
        LookR = 1;
      }
    if(keyCode === 83)
      {
        if(LookR == 1)
        {
          PlayerRImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVR4nKRTsRHDIAwUPkZIQ5kFmCA9s2SINBkiu9BnAhZISZMdHOQgTggw8eXvOGPQv+AlNLRYYQ7VTIgcY9xlhhDAOVe46lfyw5gyv3hfRHQv2LDgaxontndO4/klb9A9sk8ZCJjpxvZfIr57Amvt9sX7zqDhT1QCmBGNlB68ofZhKMBFJO5ZFIWwCpCNbPqADCQfOPjJMlTVB3wHhbgIVYfWsphaJOkoFrlwVISbqFLTDB+SrA503gLHOiN2f/aERrEfAAAA//93S6VMAAAABklEQVQDAIO6QUeAnaMKAAAAAElFTkSuQmCC");
          AttackR = true;
        }else if(LookR == -1)
        {
          PlayerRImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVR4nJxTyw3DIAyFiiU4dgEm6J1Z2h2aNToL907AAjlyyQ4prhz0+JbmSUQy8nt+tokSOXbxG7IX7M45YYwZsrXWGU8i+W1tSnyEMCWSBJ7xc41nhcQtnhfEgUVRQKHyWlQiMjnDyqFwpsQERnOZEhihK0D93+OxMFiy771vC9x4CxvHC/e6QHJJJqQt4GVorPAgsyNZOThIlFhOm+6wFS74FbmIP4FrzRycIaOAjLbTHELnGUMb1b+AyIT42XbzWwKV0CjvAwAA//85DPCNAAAABklEQVQDAFzWTHslpjpLAAAAAElFTkSuQmCC");
          AttackR = true;
        }
      }
  }

function keyReleased()
{
  if(keyCode === 83)
      {
        if(LookR == 1)
        {
          PlayerRImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVR4nKSTwRHCIBBFF4cSvHC0ASrwTi0W4cUi7IW7FdCARy72oGwMzAcWY5I/w4QZ9r+F3Y2mXm9aluo22Rxj/OkMIZBzrnjVv+a7MWV/9r5AtBRsIPiS1hHOTmk9vuZJWjL7lCGLM13h/NnEizew1k5ffu+SNO1UBeCMXMi2Bi+q6zAEIKTVbYYyiLtAcyGrNqJBguSa4BxoycSB/AyEwABhQnWgDcI2r+4CmluAStcudRiNNTyj+xdQFQjb2npGgA40iv0AAAD//+AcE5QAAAAGSURBVAMAgKRJwtGbfzkAAAAASUVORK5CYII=");
          AttackR = false;
        }else if(LookR == -1)
        {
          PlayerRImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwElEQVR4nJxTwQ3DIAyEiCV4dgEm6J9Z2h2aNToL/07AAnnyyQ4USxRdTHBpTyISwXe2z2DUEVl9hx5tcghBOedEtrX2wNNIfnnfAu8pTYk0gUf5XMraIHAv6wn7VEVRwKDyxjIRmSrDzIlVZtQEJF+mBCQMBaj/W1kejKXyY4znAtc6hb3u19rrCsGcTOjuAeGs5+p8x21jxBN+oYiM/3CMC5L+wcIz/4qPibq4PXxI5D7zoHsLiDxDlAQ6ISnuDQAA//+g0WcoAAAABklEQVQDAD4URAAprGVRAAAAAElFTkSuQmCC");
          AttackR = false;
        }
      }
  if(keyCode === DOWN_ARROW)
      {
        if(LookB == 1)
        {
          PlayerBImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA40lEQVR4nKRSOwrCQBCdle2tgyBWsZF01hYW23kBxdIr2Ag2tl5C0DvkGouNViLI1p5AncgOsz+j5hXZmTDvzVdCiAfUQwSGJRtjPjK11qCUIq78ljxZHsguyxJFsFIhY8FZlpGdjxfQ7vTJ7+VdWO2P5MsYGTNYYLnD+Zb8y/nqxEcrKIqierHfOkhoCEcAM+Ig/RncbydnDkkBLuJjNFtXLwptpgNQu/d/fgfOAcVE7ExSd0AkDMQ2uAg7IJ5QtOAP8DX/vAVO9gXEq2yaQ+qsWRuCPhE4QnytPiclEAilYp8AAAD///jT9i0AAAAGSURBVAMABDhSjpH12eAAAAAASUVORK5CYII=");
          AttackB = false;
        }else if(LookB == -1)
        {
          PlayerBImage = loadImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVR4nJyTsQ3CMBBFL1GWSIOoUqF0TECRHUCiZAqaSDQULEANC9CloGAFi4ZUCAm5ZgLDofh0tmNj8jrb97/tf3YGJgp+k/gGqmkaKMsyqM7z3NAlXLw+XqnwtJ1HmZDBdLmDcTGCe/ugwtfzBu15T2MppWOQcWcuRlCMJ+M7axONYeAjlEuUQQivAd6/mK2gqiqaw+MLIfoNNovJtwsoRC6HulupqdgWI847QPru3CXvaKmNfMV+UCjmc7yNKRcNIbV3/hcdYvJJ2/uRMH0rA+cvcFSMMGTgGIXq3gAAAP//gP7XJwAAAAZJREFUAwDHqlDgk6baSwAAAABJRU5ErkJggg==");
          AttackB = false;
        }
      }
}
