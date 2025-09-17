function spawnSnowEnemyBall(p,player,enemy) {

    let dir = player.pos.sub(enemy.pos).unit();

    if (enemy.exists() == false) {
        return
    }
  
 
    let snowball = add([
        sprite(snowball_enemy),
        scale(0.1),
        area(),
        pos(p),
        anchor("center"),
        //body(),
        move(dir, P_BULLET_SPEED),
        offscreen({ destroy: true }),
        // strings here means a tag
        snowball_enemy,
    ])
    snowball.play(ANIM_SNOWBALL);
  
  
  
  
    return snowball;
  }
  /*
  function spawnPlayerProjectile(p,player) {

    let flipXProj = false;

    let dir =  vec2(-15,0)

    if (player.flipX == true) {
        flipXProj = true;
        dir =  vec2(15,0)
    }
    

    let projectile = add([
        sprite(basic_weapon_player),
        scale(0.3),
        area(),
        pos(p),
        anchor("center"),
        //body(),
        move(dir, P_BULLET_SPEED),
        offscreen({ destroy: true }),
        // strings here means a tag
        basic_weapon_player,
    ])

    projectile.flipX = flipXProj;
  
    projectile.play(ANIM_BASIC_WEAPON_P);



    
  
  
  
    return projectile;
  } */
  