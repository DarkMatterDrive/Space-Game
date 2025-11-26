function PlayerB()
{
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
  GravityB = -1.5;
}
  }
  if(GravityB < 1.5)
  {
    GravityB += 0.025;
  }
}
