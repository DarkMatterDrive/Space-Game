function EnemyDrone()
{
  fill(0,255,0)
  rect(EnemyDroneX+4*REM,EnemyDroneY-5*REM,EnemyDroneHealth*REM,2*REM)
  fill(255,0,0)
  rect(EnemyDroneX+((EnemyDroneHealth*REM)+(+4*REM)),EnemyDroneY-5*REM,16*REM-EnemyDroneHealth*REM,2*REM)
  noSmooth()
  image(EnemyDroneImage,EnemyDroneX,EnemyDroneY,24*REM,12*REM)
  if(dist(EnemyDroneX,EnemyDroneY,PlayerBX,PlayerBY) < 10*REM)
  {
    EnemyDroneMove = false;
  }
  if(dist(EnemyDroneX,EnemyDroneY,PlayerRX,PlayerRY) < 10*REM)
  {
    EnemyDroneMove = false;
  }
  if(dist(EnemyDroneX,EnemyDroneY,PlayerRX,PlayerRY) > 10*REM && dist(EnemyDroneX,EnemyDroneY,PlayerBX,PlayerBY) > 10*REM)
    {
      EnemyDroneMove = true;
    }
  if(EnemyDroneMove == true)
    {
  if(dist(EnemyDroneX,EnemyDroneY,PlayerBX,PlayerBY)<dist(EnemyDroneX,EnemyDroneY,PlayerRX,PlayerRY))
    {
  if(EnemyDroneX>PlayerBX)
    {
      EnemyDroneX -= 0.25*REM;
    }else if(EnemyDroneX<PlayerBX)
      {
        EnemyDroneX += 0.25*REM;
      }
  if(EnemyDroneY>PlayerBY)
    {
      EnemyDroneY -= 0.25*REM;
    }else if(EnemyDroneY<PlayerBY)
      {
        EnemyDroneY += 0.25*REM;
      }
    }else if(dist(EnemyDroneX,EnemyDroneY,PlayerBX,PlayerBY)>dist(EnemyDroneX,EnemyDroneY,PlayerRX,PlayerRY))
      {
        if(EnemyDroneX>PlayerRX)
    {
      EnemyDroneX -= 0.5*REM;
    }else if(EnemyDroneX<PlayerRX)
      {
        EnemyDroneX += 0.5*REM;
      }
  if(EnemyDroneY>PlayerRY)
    {
      EnemyDroneY -= 0.5*REM;
    }else if(EnemyDroneY<PlayerRY)
      {
        EnemyDroneY += 0.5*REM;
      }
      }
    }
  if(EnemyDroneMove == false)
    {
      if(dist(EnemyDroneX,EnemyDroneY,PlayerBX,PlayerBY)<dist(EnemyDroneX,EnemyDroneY,PlayerRX,PlayerRY))
    {
      BHealth -= 0.05;
    }else if(dist(EnemyDroneX,EnemyDroneY,PlayerBX,PlayerBY)>dist(EnemyDroneX,EnemyDroneY,PlayerRX,PlayerRY))
      {
        RHealth -= 0.05;
      }
    }
  if(AttackR == true)
    {
      if(LookR == 1)
        {
          if(EnemyDroneX > PlayerRX+8*REM && EnemyDroneX < PlayerRX+32*REM && EnemyDroneY < PlayerRY+24*REM && EnemyDroneY > PlayerRY-8*REM)
            {
              EnemyDroneHealth -= 1;
              EnemyDroneX += 16*REM
            }
        }
      if(LookR == -1)
        {
          if(EnemyDroneX < PlayerRX+8*REM && EnemyDroneX > PlayerRX-32*REM && EnemyDroneY < PlayerRY+24*REM && EnemyDroneY > PlayerRY-8*REM)
            {
              EnemyDroneHealth -= 1;
              EnemyDroneX -= 16*REM
            }
        }
    }
  if(AttackB == true)
    {
      if(LookB == 1)
        {
          if(EnemyDroneX > PlayerBX+8*REM && EnemyDroneX < PlayerBX+32*REM && EnemyDroneY < PlayerBY+24*REM && EnemyDroneY > PlayerBY-8*REM)
            {
              EnemyDroneHealth -= 1;
              EnemyDroneX += 16*REM
            }
        }
      if(LookB == -1)
        {
          if(EnemyDroneX < PlayerBX+8*REM && EnemyDroneX > PlayerBX-32*REM && EnemyDroneY < PlayerBY+24*REM && EnemyDroneY > PlayerBY-8*REM)
            {
              EnemyDroneHealth -= 1;
              EnemyDroneX -= 16*REM
            }
            }
        }
  if(EnemyDroneHealth <= 0)
    {
      EnemyDroneAlive = false;
    }
}
