kaplay({
    width: 1800,
    height: 1024,
    //font: "sans-serif",
    //canvas: document.querySelector("#mycanvas"),
    //background: [ 0, 0, 10, ],
})

// INITIALIZING CONST GLOBAL VARIABLES
const LEVEL_TESTING = true;


// COLORS

const COLOR_WHITE = rgb(255, 255, 255);
const COLOR_BLACK = '#000000';

// STATE
let IS_GAME_PAUSED = false;
let CAN_OPEN_INVENTORY = false;

// DAMAGE
const SPIKE_DAMAGE = 0.1;

// ITEMS
const ITEM_KEY_DOOR_01 = "Key01";
const ITEM_FRAGMENT = "Fragment";
const ITEM_FUEL = "FuelCan";

const SPEED = 220
const SPEED_JUMP = 1000
const RUN_SPEED = 500
const FRAME_SPEED = 20
const FRAME_SLOW_SPEED = 5
const JUMP_FORCE = 500
const GRAVITY_AMOUNT = 700
const FALL_DEATH = 500
const FALL_DEATH_SOUND = FALL_DEATH - 500
const W_WALRUS_BULLET_SPEED = 900;
const P_BULLET_SPEED = 800;

const W_WHITE_HEALTH = 3;
const W_WHITE_SHOT_FREQUENCY = 1.8;

const S_HEALTH = 2;


// ANIMATIONS 
const ANIM_IDLE = "idle";
const ANIM_WALK = "walk";
const ANIM_JUMP = "jump";
const ANIM_DIE = "die";
const ANIM_CHILL = "chill";
const ANIM_ORB = "orbanim";
const ANIM_SP = "small_spike_anim";
const ANIM_W_IDLE = "w_idle";
const ANIM_W_ATTACK = "w_attack";
const ANIM_W_DIE = "w_die";
const ANIM_S_FLY = "fly";
const ANIM_SNOWBALL = "fly";
const ANIM_BASIC_WEAPON_P = "shot";


// GLOBAL VARIABLES THAT WILL BE GET FROM LOCAL STORAGE
var PLAYER_SHOT_FORCE = 1
var P_SHOT_FREQUENCY = 400;
var PLAYER_NAME = "FROSTELL";
var MUSIC_VOLUME = 0.2;
var WALK_NOISE = "";
 var WIND_AMB ="";

// INITIALIZING GLOBAL VARIABLES
var IS_CINEMATIC_MODE_ON = false;
var IS_TYPING_CODE = false;
var HAS_ALREADY_PLAYED = false;
StorageUtils.save(HAS_ALREADY_PLAYED, false)

// INVENTORY

let inventoryItems = []
let inventoryOpen = false


// States
var IS_PLAYER_WALKING = 0;

const LAYERS = {

    PLAYER: 100,
    INVENTORY_1: 1400,
    INVENTORY_2: 1401,
    INVENTORY_3: 1402,
    UI_1: 1500,
    UI_2: 1501,
    UI_3: 1502,
    UI_4: 1503,
    NOTIF_1: 2000,
    NOTIF_2: 2001,
    
    INTRO_TEXT: 3000,
  



}

