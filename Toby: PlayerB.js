function PlayerB()
{
  fill(0,255,0)
  rect(PlayerBX,PlayerBY-5*REM,BHealth*REM,2*REM)
  fill(255,0,0)
  rect(PlayerBX+BHealth*REM,PlayerBY-5*REM,16*REM-BHealth*REM,2*REM)
  noSmooth()
  image(PlayerBImage,PlayerBX,PlayerBY,16*REM,16*REM);
  PlayerBY += GravityB*REM
  PlayerBX += MotionB*REM
  if(PlayerBY < VH-16*REM)
  {
    OnGroundB = false
  }
  if(PlayerBY > VH-16*REM)
  {
    PlayerBY = VH-16*REM
    OnGroundB = true
  }
  if(PlayerBX < 0*REM)
    {
      PlayerBX = 0*REM
    }
  if(PlayerBX > VW-16*REM)
    {
      PlayerBX = VW-16*REM
    }
  if(PlayerBX+16*REM >= PlayerRX && PlayerBX <= PlayerRX+16*REM && PlayerBY+16*REM >= PlayerRY && PlayerBY+16 <= PlayerRY+16*REM)
    {
      PlayerBY = PlayerRY-16*REM;
      OnGroundB = true;
      CarryB = true;
    }else
      {
        CarryB = false;
      }
  if (keyIsDown(LEFT_ARROW) === true) {
    MotionB = -1.25;
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    MotionB = 1.25;
  }
  
  if(keyIsDown(LEFT_ARROW) === false)
  {
    if(keyIsDown(RIGHT_ARROW) === false)
  {
    MotionB = 0;
  }
  }
  
  if (keyIsDown(UP_ARROW) === true) {
    if(OnGroundB == true)
{
  OnGroundB = false
  if(CarryR == true)
    {
      GravityB = -0.75;
    }else
    {
      GravityB = -1.5;
    }
}
  }
  if(GravityB < 1.5)
  {
    GravityB += 0.025;
  }
}
