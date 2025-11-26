function initWhiteWalrus(enemy,player, shotFrequency) {

/*
    const idle =(flipEnemy) => {

        enemy.use(sprite("walrusIdle"))  
        enemy.play(ANIM_W_IDLE)  
        enemy.flipX = flipEnemy 
    }
    idle(false);*/
/*
	enemy.onUpdate(() => {
	    wait(shotFrequency, () => {
		

       })
	})*/

let hasWalrusDied = false;

	enemy.onStateEnter("idle", async () => {
		await wait(shotFrequency)
		//
		if (hasWalrusDied == false) {
		enemy.enterState("attack")
		}

	})
	enemy.onStateEnter("die", async () => {
	
		enemy.use(sprite("walrusDie", {anim: ANIM_W_DIE}))  

	})
	enemy.onStateEnter("attack", async () => {

			enemy.use(sprite("walrusAttack"))  
			enemy.play(ANIM_W_ATTACK);

		//console.log(Math.round(enemy.pos.x - player.pos.x).toFixed())
	

		if (enemy.pos.dist(player.pos) < 800) {
			play("dropping_snowball", { loop: false });
		}

		

		spawnSnowEnemyBall(enemy.pos,player,enemy)
		//await wait(shotFrequency)

	
			enemy.enterState("idle")
		
		


		//}

	})
/*
	enemy.onStateUpdate("move", () => {
		enemy.follow(player)
		if (enemy.pos.dist(player.pos) < 16) {
			enemy.enterState("attack")
		}
	})*/
	enemy.onCollide(basic_weapon_player, (bwPlayer) => {
        

       
        //play("eat", { loop: false, volume:0.5 });
        enemy.hurt(PLAYER_SHOT_FORCE)

        destroy(bwPlayer);
    })
	// triggers when hp reaches 0
	enemy.on("death", () => {

		//enemy.unuse()
		hasWalrusDied = true;
		enemy.enterState("die")

		
		wait(3, () => {
			destroy(enemy)


		})
	
		
		
	
	})


   
}