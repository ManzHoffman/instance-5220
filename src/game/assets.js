// IMPORTING GAME ASSETS
// SOUNDS
const SOUNDS = {
	menu: "./src/game/assets/sounds/menu.wav",
	popMenu: "./src/game/assets/sounds/pop_menu.wav",
	firstIntro: "./src/game/assets/sounds/intro_first.wav",
	reindeer_walking: "./src/game/assets/sounds/reindeer_walking_short.mp3",
	windAmb: "./src/game/assets/sounds/wind.wav",
	eat: "./src/game/assets/sounds/eat.wav",
	dropping_snowball: "./src/game/assets/sounds/dropping_snowball.wav",
	hit_by_snowball: "./src/game/assets/sounds/hit_by_snowball.wav",
	typing: "./src/game/assets/sounds/typing.wav",
	fragment_get: "./src/game/assets/sounds/fragment.wav",
	grab_item: "./src/game/assets/sounds/grab_item.wav",
	locked: "./src/game/assets/sounds/lock.wav",
	error: "./src/game/assets/sounds/error.wav",
	success: "./src/game/assets/sounds/success.wav",
	notif: "./src/game/assets/sounds/notif.wav",
	laser: "./src/game/assets/sounds/laser.wav",
}

// LOAD SOUNDS
loadGameElements(SOUNDS,"sound")
let soundKeys = Object.keys(SOUNDS);

//let windAmbiance = play(soundKeys[4], { loop: true, paused: true, volume: MUSIC_VOLUME});



// FONTS
const FONTS = {
	arctic: "./src/game/assets/fonts/snowy.ttf",
	travel: "./src/game/assets/fonts/travel.ttf",
	marykate: "./src/game/assets/fonts/marykate.ttf",
	ussr: "./src/game/assets/fonts/Orbitron.ttf"

}
let fontKeys = Object.keys(FONTS);

let marykateFont = fontKeys[2];


// LOAD FONTS
loadGameElements(FONTS,"font")

// SPRITES
const SPRITES = 

{
	sea:"./src/game/assets/elements/landscape/arctic/sea_colour_strip.png",
	sky:"./src/game/assets/elements/landscape/arctic/sky_colour_strip.png",
	icelongLeft:"./src/game/assets/elements/landscape/arctic/platform_edge_left_jagged.png",
	icelongMiddle:"./src/game/assets/elements/landscape/arctic/platform_short_repeating.png",
	ground:"./src/game/assets/elements/landscape/ground.png",
	iceBlock:"./src/game/assets/elements/landscape/blocks/iceBlock1.png",
	iceBlock2:"./src/game/assets/elements/landscape/arctic/block2.png",
	sign:"./src/game/assets/elements/obj/sign.png",
	platformHole:"./src/game/assets/elements/landscape/arctic/platform_hole.png",
	platformBigHole:"./src/game/assets/elements/landscape/arctic/platform_crack.png",
	iceBerg1: "./src/game/assets/elements/landscape/arctic/iceberg_02.png",
	iceBerg2: "./src/game/assets/elements/landscape/arctic/iceberg_03.png",
	iceBerg3: "./src/game/assets/elements/landscape/arctic/iceberg_04.png",
	iceBerg4: "./src/game/assets/elements/landscape/arctic/iceberg_05.png",
	iceBerg5: "./src/game/assets/elements/landscape/arctic/iceberg_06.png",
	title:"./src/game/assets/elements/title/gameTitleNew.png",
	plant:"./src/game/assets/elements/landscape/blocks/herb.png",
	triggerIntro:"",
	background: "./src/game/assets/elements/landscape/01/layers/l1-background.png",
	backgroundDay: "./src/game/assets/elements/landscape/04/layers/l1-backgrounds.png",
	backgroundNight: "./src/game/assets/elements/landscape/01/layers/l1-background.png",
	fog: "./src/game/assets/elements/landscape/01/layers/l3-fog.png",
	clouds: "./src/game/assets/elements/landscape/04/layers/l2-clouds01.png",
	borealisPurple: "./src/game/assets/elements/landscape/01/layers/l5-northern-lights02.png",
	borealis: "./src/game/assets/elements/landscape/01/layers/l2-northern-lights01.png",
	ice: "./src/game/assets/elements/landscape/01/layers/l9-ground.png",
	stars: "./src/game/assets/elements/landscape/01/layers/l4-stars.png",
	mountains: "./src/game/assets/elements/landscape/01/layers/l7-mountains01.png",
	mountainsFarAway: "./src/game/assets/elements/landscape/01/layers/l8-mountains02.png",
	mountainsDay: "./src/game/assets/elements/landscape/03/layers/l2-mountains01.png",
	starNormal: "./src/game/assets/elements/obj/star.png",
	starLocked: "./src/game/assets/elements/obj/star_lock.png",
	pinPoint: "./src/game/assets/elements/obj/pinpoint.png",
	map: "./src/game/assets/elements/obj/map.png",
	life: "./src/game/assets/elements/obj/health_potion.png",
	fragment: "./src/game/assets/elements/obj/orb.png",
	seagull: "./src/game/assets/elements/npc/seagull/seagull.png",
	rock1:"./src/game/assets/elements/rocks/rock_10.png",
	rock2:"./src/game/assets/elements/rocks/rock_14.png",
	rock3:"./src/game/assets/elements/rocks/rock_03.png",
	rock4:"./src/game/assets/elements/rocks/rock_15.png",
	doorClosed:"./src/game/assets/elements/door/door_side.png",
	doorOpened:"./src/game/assets/elements/door/door_open.png",
	key:"./src/game/assets/elements/door/key_01.png",
	blue_switch_pressed:"./src/game/assets/elements/laser/switches/blue_switch_pressed.png",
	blue_switch_unpressed:"./src/game/assets/elements/laser/switches/blue_switch_unpressed.png",
	blue_laser:"./src/game/assets/elements/laser/lasers/blue_laser.png",
	laser_blue_off:"./src/game/assets/elements/laser/lasers/laser_blue_off.png",
	laser_blue_on:"./src/game/assets/elements/laser/lasers/laser_blue_on.png",
	trampoline:"./src/game/assets/elements/jump/red_trampoline_frame_2.png",
	small_fuel_red:"./src/game/assets/elements/oil/small_fuel_red.png",
}


loadGameElements(SPRITES,"sprite")
createVariables(SPRITES);

const ANIMATED_SPRITES = 
{
	snowball_enemy:[{name: "snowball_enemy", src:"./src/game/assets/elements/projectile/snowball.png",sliceX:3,sliceY:2,anim: ANIM_SNOWBALL,from:0,to:5,speed:3,loop:true}],
	playerIdle:[{name: "playerIdle", src:"./src/game/assets/elements/player/basicReindeer/reindeer_idle.png",sliceX:5,sliceY:4,anim: ANIM_IDLE,from:0,to:19,speed:FRAME_SPEED,loop:true}],
	playerWalk:[{name: "playerWalk", src:"./src/game/assets/elements/player/basicReindeer/reindeer_walking.png",sliceX:5,sliceY:3,anim: ANIM_WALK,from:0,to:14,speed:FRAME_SPEED,loop:true}],
	playerJump:[{name: "playerJump", src:"./src/game/assets/elements/player/basicReindeer/reindeer_jump.png",sliceX:5,sliceY:3,anim: ANIM_JUMP,from:0,to:14,speed:FRAME_SPEED,loop:false}],
	playerDie:[{name: "playerDie", src:"./src/game/assets/elements/player/basicReindeer/reindeer_die.png",sliceX:5,sliceY:2,anim: ANIM_DIE,from:0,to:9,speed:FRAME_SPEED,loop:false}],
	playerLaying:[{name: "playerLaying", src:"./src/game/assets/elements/player/basicReindeer/reindeer_laying.png",sliceX:5,sliceY:4,anim: ANIM_CHILL,from:0,to:19,speed:FRAME_SLOW_SPEED,loop:true}],
	orb:[{name: "orb", src:"./src/game/assets/elements/obj/orb_anim.png",sliceX:4,sliceY:4,anim: ANIM_ORB,from:0,to:15,speed:FRAME_SLOW_SPEED,loop:true}],
	smallSpike:[{name: "smallSpike", src:"./src/game/assets/elements/spikes/long_wood/wood_spike_sprite_sheet.png",sliceX:5,sliceY:1,anim: ANIM_SP,from:0,to:4,speed:FRAME_SLOW_SPEED,loop:true}],


	//playerEat:[{name: "playerDie", src:"./src/game/assets/elements/player/basicReindeer/reindeer_eat.png",sliceX:5,sliceY:2,anim: ANIM_EAT,from:0,to:9,speed:FRAME_SPEED,loop:false}],
	walrusIdle:[{name: "walrusIdle", src:"./src/game/assets/elements/enemy/walrus/walrusWhite/walrus_idle.png",sliceX:5,sliceY:4,anim: ANIM_W_IDLE,from:0,to:19,speed:3,loop:true}],
	walrusAttack:[{name: "walrusAttack", src:"./src/game/assets/elements/enemy/walrus/walrusWhite/walrus_idle.png",sliceX:4,sliceY:2,anim: ANIM_W_ATTACK,from:0,to:7,speed:3,loop:false}],
	walrusDie:[{name: "walrusDie", src:"./src/game/assets/elements/enemy/walrus/walrusWhite/walrus_die.png",sliceX:5,sliceY:3,anim: ANIM_W_DIE,from:0,to:7,speed:3,loop:false}],
	//basic_weapon_player:[{name: "basic_weapon_player", src:"./src/game/assets/elements/projectile/basic_weapon_player.png",sliceX:3,sliceY:2,anim: ANIM_BASIC_WEAPON_P,from:0,to:5,speed:3,loop:true}],
	//seagullFly:[{name: "seagullFly", src:"./src/game/assets/elements/npc/seagull/seagull_fly.png",sliceX:4,sliceY:3,anim: ANIM_S_FLY,from:0,to:9,speed:5,loop:true}],
	friendIdle:[{name: "friendIdle", src:"./src/game/assets/elements/npc/friend/friend_idle.png",sliceX:5,sliceY:4,anim: ANIM_IDLE,from:0,to:19,speed:FRAME_SPEED,loop:true}],

}

loadGameElements(ANIMATED_SPRITES,"animatedSprite")
createVariables(ANIMATED_SPRITES);




// TITLE



var displayLivesArray =[starNormal,starNormal,starNormal]

