function initPlayer(posx,posy) {

let isMovingLeft = false
let isMovingRight = false
let lastDirection = true // true = right, false = left
WALK_NOISE = play("reindeer_walking", { loop: true, volume:0.2, paused:true });

//let falling = play("fall_sound", { loop: false, volume:0.5, paused:true, speed:1.5 });
var firstProjectile = 0;

const player = add([
    sprite("playerLaying"),
    pos(posx, posy),
    scale(1),
    //anchor("center"),
    body(),
    area({ shape: new Rect(vec2(0), 100, 100) }), // custom collision box
    anchor("center"),
    z(LAYERS.PLAYER)

  ])



const walk = (flipPlayer) => {
  if (player.isGrounded()) {
    if (player.curAnim() !== ANIM_WALK) {
      player.use(sprite("playerWalk"))
      player.play(ANIM_WALK)
    }
    player.flipX = flipPlayer
  }
}

const lay =(flipPlayer) => {

    player.use(sprite("playerLaying"))  
    player.play(ANIM_CHILL)  
    player.flipX = flipPlayer 
}
const idle = (flipPlayer) => {
  if (player.curAnim() !== ANIM_IDLE) {
    player.use(sprite("playerIdle"))
    player.play(ANIM_IDLE)
  }
  player.flipX = flipPlayer
}
const die =(flipPlayer) => {

    player.use(sprite("playerDie"))  
    player.play(ANIM_DIE)  
    player.flipX = flipPlayer 
}

const jump =(flipPlayer) => {

    if (player.isGrounded()) {
        player.use(sprite("playerJump"))  
        player.play(ANIM_JUMP)  
        player.jump(JUMP_FORCE)
        player.flipX = flipPlayer 

     
	}
}


lay(true);

const fixedCamY = 80

	// action() runs every frame
player.onUpdate(() => {




  camPos(vec2(player.pos.x, fixedCamY))


  if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) {
    idle(lastDirection)
    return
  }


  if (player.pos.y >= FALL_DEATH || Lifebar.getValue() <= 0) {
    go("lose")
  }

  // resolve conflicting inputs
  if (isMovingLeft && isMovingRight) {
    idle(lastDirection)
  } else if (isMovingLeft) {
    player.move(-SPEED, 0)
    walk(false)
  } else if (isMovingRight) {
    player.move(SPEED, 0)
    walk(true)
  }

  WALK_NOISE.paused = !(player.isGrounded() && player.curAnim() == ANIM_WALK)
})

    player.onGround(() => {

        if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return

        if (isKeyDown(controls.backward) && !isKeyDown(controls.forward))  
        {
            walk(false)

        }
        else if(isKeyDown(controls.forward) && !isKeyDown(controls.backward))
        {
            walk(true)
        }
        

    })
    /*
    player.onCollide("plant", (plant) => {
        if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return
      
        play("eat", { loop: false, volume:0.5 });

        destroy(plant);
    })
    
	player.onCollide(snowball_enemy, (snEnemy) => {
        if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return
        

        play("hit_by_snowball", { loop: false, volume:0.5 });

        playerHitAnim(player,0.1)

        P_HEALTH = P_HEALTH - 1
       
        //play("eat", { loop: false, volume:0.5 });
        player.hurt(1)
    
        displayBar(P_HEALTH,true)

        destroy(snEnemy);
    })*/

      

    player.on("death", () => {
		destroy(player)
		go("lose");
		
	
	})




// Function to make player blink
async function playerHitAnim(player, duration) {
// Function to make player blink
player.hidden = true; // Ensure player is visible after animation

wait(duration, () => {
    player.hidden = false; // Ensure player is visible after animation
  })

}



function shoot() {
    // Check if there is no existing projectile or the existing projectile is far enough
    if ((firstProjectile == 0 || !firstProjectile.exists()) || (player.pos.dist(firstProjectile.pos) > P_SHOT_FREQUENCY && firstProjectile.exists())) {
        firstProjectile = spawnPlayerProjectile(player.pos, player);
    }
}

onMousePress("left", async (pos) => {
    if (!IS_CINEMATIC_MODE_ON) {

    //shoot()
    }
   // const projectile = spawnPlayerProjectile(player.pos,player)   
    //spawnBullet(player.pos,player, enemy, true);
 
 
  });


onKeyPress(controls.forward, () => {

    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return

    if (!isKeyDown(controls.backward)) {
        
    walk(true)
    }
 
  

  
})



onKeyPress(controls.backward, () => {

    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return

    if (!isKeyDown(controls.forward)) {

        walk(false)
    }
   
 
 
})
onKeyDown(controls.forward, () => {
  if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return
  isMovingRight = true
  lastDirection = true
  player.move(SPEED, 0)
  walk(true)
})

onKeyRelease(controls.forward, () => {
  isMovingRight = false
  if (!isMovingLeft) idle(true)
})

onKeyDown(controls.backward, () => {
  if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return
  isMovingLeft = true
  lastDirection = false
  player.move(-SPEED, 0)
  walk(false)
})

onKeyRelease(controls.backward, () => {
  isMovingLeft = false
  if (!isMovingRight) idle(false)
})



   
    
    



onKeyPress(controls.jump, () => {

    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return


        jump(player.flipX);

    
}




)

return player;

}





