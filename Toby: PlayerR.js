function PlayerR()
{
  noSmooth()
  image(PlayerRImage,PlayerRX,PlayerRY,16*REM,16*REM);
  PlayerRY += GravityR*REM
  PlayerRX += MotionR*REM
  if(PlayerRY < VH-16*REM)
  {
    OnGroundR = false
  }
  if(PlayerRY > VH-16*REM)
  {
    PlayerRY = VH-16*REM
    OnGroundR = true
  }
  if(PlayerRX < 0*REM)
    {
      PlayerRX = 0*REM
    }
  if(PlayerRX > VW-16*REM)
    {
      PlayerRX = VW-16*REM
    }
  if (keyIsDown(65) === true) {
    MotionR = -1.25;
  }

  if (keyIsDown(68) === true) {
    MotionR = 1.25;
  }
  
  if(keyIsDown(65) === false)
  {
    if(keyIsDown(68) === false)
  {
    MotionR = 0;
  }
  }
  
  if (keyIsDown(87) === true) {
    if(OnGroundR == true)
{
  OnGroundR = false
  GravityR = -1.5;
}
  }
  if(GravityR < 1.5)
  {
    GravityR += 0.025;
  }
}
