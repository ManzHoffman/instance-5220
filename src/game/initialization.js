const BASE_WIDTH = 1800;
const BASE_HEIGHT = 1024;

// Compute scale based on whichever dimension is more restrictive
function computeScale() {
    return Math.min(
        window.innerWidth / BASE_WIDTH,
        window.innerHeight / BASE_HEIGHT
    );
}

kaplay({
    width: BASE_WIDTH,
    height: BASE_HEIGHT,
    scale: computeScale(),
});

// DEFINE CONST GLOBAL VARIABLES
const LEVEL_TESTING = false;


// COLORS

const COLOR_WHITE = rgb(255, 255, 255);
const COLOR_BLACK = '#000000';

// STATE
let IS_GAME_PAUSED = false;
//let CAN_OPEN_INVENTORY = true;
//let IS_FIRST_CIN_OVER = false;
let IS_FOG_ACTIVATED = false;

let IS_LAST_FR_ACTIVATED = false;



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


const MUSIC_VOLUME = 0.2;
var WALK_NOISE = "";
 var WIND_AMB ="";

// INITIALIZING GLOBAL VARIABLES
var IS_CINEMATIC_MODE_ON = false;
var IS_TYPING_CODE = false;


// INVENTORY

let inventoryItems = []
let inventoryOpen = false
var glitchCanvas = null;


// States
var IS_PLAYER_WALKING = 0;

var PLATEFORM_ANGLE = -90;






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

