function spawnElements() {

  const groundWidth = 7110
  const repeatCount = 4


  // GENERATING SNOW GROUND
  for (let i = 0; i < repeatCount; i++) {
    add([
      sprite("ground"),
      pos(i * groundWidth, 350),
      //dfdz(1),
    ])
  }

  // END GENERATING SNOW GROUND
  // TRIGGERS


  const keyTrigger = add([
    area(),
    pos(4900, 480),
    rect(100, 100),
    opacity(0), // fully invisible
    z(10),
    "keyTrigger"
  ])

  const laserTrigger = add([
    area(),
    pos(2480, -130),
    rect(20, 20),
    opacity(0), // fully invisible
    z(10),
    "laserTrigger"
  ])




  // END TRIGGERS




// END OIL
  // LASERS
   add([
    sprite("blue_switch_unpressed"),
    pos(2450, -145),
    scale(0.5),
    body({ isStatic: true }),
    "laserSwitch"

  ])



     add([
    sprite("laser_blue_off"),
    pos(2520, -130),
    scale(0.4),
    body({ isStatic: true }),
    "laserBase"
  ])

    let laserInverted =  add([
    sprite("laser_blue_off"),
    pos(3400, -130),
    scale(0.4),
    body({ isStatic: true }),
    "laserBaseRevert"
  ])

    laserInverted.flipX = true
  // END LASERS


  
  // ICE BLOCKS

  add([
    sprite("iceBlock"),
    pos(2100, 50),
    area(),
    scale(0.5),
    body({ isStatic: true }),
    area(),

  ])

  
// OIL

    const oilJerrican = add([
          area(),
    sprite("small_fuel_red"),
   rotate(30),
    pos(1580, -200), // og 2080 diff 500
    scale(0.2),
  
    z(400),
    "fuel"
  ])
// OIL BLock
  add([
    sprite("iceBlock"),
    pos(1500, -140),
    area(),
    scale(0.5),
    body({ isStatic: true }),
    area(),

  ])

  add([
    sprite("side_connector_mechanism"),
    pos(1630, -120),
    area(),
    scale(0.3),
    //body({ isStatic: true }),
    area(),

  ])


    add([
    sprite("dark_wood_long"),
    pos(1630, -120),
    area(),
    scale(0.3),
    body({ isStatic: true }),
    area(),
    rotate(PLATEFORM_ANGLE)

  ])

    add([
    sprite("handle"),
    pos(4700, 480),
    area(),
    scale(0.5),
    //body({ isStatic: true }),
    area(),
    "handleSwitch"
   // rotate(PLATEFORM_ANGLE)

  ])
//	side_connector_mechanism:"./src/game/assets/elements/trapdoor/parts/side_connector_mechanism.png",
	//dark_wood_long:"./src/game/assets/elements/trapdoor/parts/dark_wood_long.png",
  
  add([
    sprite("iceBlock"),
    pos(1600, 200),
    area(),
    scale(0.5),
    body({ isStatic: true }),
    area(),

  ])

  add([
    sprite("iceBlock"),
    pos(1900, 350),
    area(),
    scale(0.5),
    body({ isStatic: true }),
    area(),

  ])
  add([
    sprite("iceBlock"),
    pos(2400, -100),
    area(),
    scale(0.5),
    body({ isStatic: true }),
    area(),

  ])
  add([
    sprite("iceBlock"),
    pos(3500, -100),
    area(),
    scale(0.5),
    body({ isStatic: true }),
    area(),

  ])
  add([
    sprite("iceBlock"),
    pos(4500, -200),
    area(),
    scale(0.5),
    body({ isStatic: true }),
    area(),

  ])




  // END ICE BLOCKS



  // INVISIBLE GROUND & LIMITS

  add([
    rect(width() * 2, 10 * 2),
    pos(0, 510),
    area(),
    body({ isStatic: true }), 
    color(0, 0, 0, 1), // invisible
    opacity(0)
  ])




  add([
    rect(width() * 2, 10 * 2),
    pos(4000, 500),
    area(),
    body({ isStatic: true }), //
    //color(255, 255, 255, 100), // invisible
    opacity(0)
  ])




  add([
    rect(10, height()),
    pos(0, -510),
    area(),
    body({ isStatic: true }), 
    color(255, 255, 255, 0), // invisible
    opacity(0)

  ])


  
  add([
    rect(10, height()),
    pos(5100, -510),
    area(),
    body({ isStatic: true }), 
    color(255, 255, 255, 0), // invisible
    opacity(0)

  ])


    add([
    rect(10, height()),
    pos(3800, -1200),
    area(),
    body({ isStatic: true }), 
    color(255, 255, 255, 0), // invisible
    opacity(0)

  ])

  // END INVISIBLE GROUND & LIMITS

  // HOLES

  add([
    sprite("platformHole"),
    pos(3600, 480),
    scale(0.8),
    body({ isStatic: true }),


  ])

  // END HOLES



  // ROCKS
  add([
    sprite("rock1"),
    pos(-200, 200),

    scale(1),
    body({ isStatic: true }),
    //area(),

  ])


  add([
    sprite("rock3"),
    pos(-600, 100),

    scale(1),
    body({ isStatic: true }),
    //area(),

  ])


  add([
    sprite("rock4"),
    pos(-850, 50),

    scale(1),
    body({ isStatic: true }),
    //area(),

  ])

  add([
    sprite("rock1"),
    pos(5100, -100),
    area(),

    scale(1),
    body({ isStatic: true }),
    //area(),

  ])

  add([
    sprite("rock3"),
    pos(5000, 100),
    area(),
    scale(1),
    body({ isStatic: true }),
    //area(),

  ])

  
  add([
    sprite("rock3"),
    pos(4650, 500),
    area(),
    scale(1),
    body({ isStatic: true }),
    //area(),

  ])
  // END ROCKS

  // DOOR

  let door = add([
    sprite("doorClosed"),
    pos(4990, 320),
    scale(0.5),
    body({ isStatic: true }),
    
    "doorClosed"

  ])
  door.flipX = true;
  // END DOOR
  // KEY

  let key = add([
    sprite("key"),
    pos(3560, -140),
    area(), 
    scale(0.4),
    body({ isStatic: true }),
    "keyDoor"

  ])
itemIdleAnimation(key)


  // END KEY

  let trampoline = add([
    sprite("trampoline"),
    pos(4300, 450),
    area(), 
    scale(0.4),
    body({ isStatic: true }),
    "trampolineJump"

  ])
  /*
    add([
    sprite("rope_end_left"),
    pos(5200, 100),
    area(),
    scale(0.2),
    body({ isStatic: true }),
    rotate(120),
    //area(),

  ])

  
    add([
    sprite("rope_end_left"),
    pos(4600, -150),
    area(),
    scale(0.2),
    body({ isStatic: true }),
    rotate(270),
    //area(),

  ])

  
    add([
    sprite("runner_rope"),
    pos(5000, -50),
    area(),
    scale(0.2),
    body({ isStatic: true }),
    rotate(30),
    //area(),

  ])

const start = vec2(4650, -170);  // where the rope begins
const angleDeg = 28;           // rope angle
const tiles = 9;              // how many pieces
const scaleF = 0.2;            // your scale

// pixel width of the source rope sprite (edit this to your asset)
const spritePxWidth = 300;

// distance between tiles after scaling
const step = spritePxWidth * scaleF;

// unit direction along the rope
const dir = vec2(Math.cos(deg2rad(angleDeg)), Math.sin(deg2rad(angleDeg)));

for (let i = 0; i < tiles; i++) {
  add([
    sprite("rope_repeating"),
    pos(start.add(dir.scale(i * step))),
    rotate(angleDeg),
    scale(scaleF),
    anchor("left"),           // kaboom v3000+  (use origin("left") on older versions)
    area(),
    body({ isStatic: true }),
  ]);
}

function deg2rad(d) { return d * Math.PI / 180; }

  // END ROPES

*/
  // SPAWN


  //const seagull = spawnSeagull(0,0);
  spawnSpikes(700, 450, 0.6)

  spawnSpikes(990, 420, 0.8)

  spawnSpikes(1200, 450, 0.6)

spawnSpikes(2600, 450, 0.7)


spawnSpikes(2900, 420, 0.8)

  spawnMemoryFragment(1500, 370, {
    message: "« Ce mot me hante encore. Fynn…  Une lettre gravée. »",
    codePiece: "F"
  })

  spawnMemoryFragment(3400, 250, {
    message: "« Deux cris. Deux pas. Combien de fois suis-je tombé ? »",
    codePiece: "2"
  })

  spawnMemoryFragment(4560, -300, {
    message: "« Sept marches. Sept silences. »",
    codePiece: "7"
  })




}