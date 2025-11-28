function PlayerR()
{
  fill(0,255,0)
  rect(PlayerRX,PlayerRY-5*REM,RHealth*REM,2*REM)
  fill(255,0,0)
  rect(PlayerRX+RHealth*REM,PlayerRY-5*REM,16*REM-RHealth*REM,2*REM)
  noSmooth()
  image(PlayerRImage,PlayerRX,PlayerRY,16*REM,16*REM);
  PlayerRY += GravityR*REM
  PlayerRX += MotionR*REM
  if(PlayerRY < Bottom-16*REM)
  {
    OnGroundR = false
  }
  if(PlayerRY > Bottom-16*REM)
  {
    PlayerRY = Bottom-16*REM
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
  if(PlayerRX+16*REM >= PlayerBX && PlayerRX <= PlayerBX+16*REM && PlayerRY+16*REM >= PlayerBY && PlayerRY+16 <= PlayerBY+16*REM)
    {
      PlayerRY = PlayerBY-16*REM;
      OnGroundR = true;
      CarryR = true;
    }else
      {
        CarryR = false;
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
  if(CarryB == true)
    {
      GravityR = -0.75;
    }else
    {
      GravityR = -1.5;
    }
}
  }
  if(GravityR < 1.5)
  {
    GravityR += 0.025;
  }
}
