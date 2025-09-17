function generateSeaAndSky(){



    for (let i = 0; i < 80; i++) {
        add([
        sprite(sky),
    
        pos( vec2(-1000 + i*110, -500)),
      ])
        
      }

      for (let i = 0; i < 20; i++) {
        add([
        sprite(sea),
    
        pos( vec2(-1000 + i*600, 250)),
      ])
        
      }

      add([
        sprite("clouds"),
        pos( vec2(-200, -500)),
      
        
      ])
}

function generateFloe(posx,size)
{


    let positionMiddle = 0;

    add([
        sprite(icelongLeft),

    
        pos( vec2(posx-200, 250)),
      ])

    for (let i = 0; i < size; i++) {

        positionMiddle = (posx + i*550);


        add([
        sprite(icelongMiddle),

        pos( vec2(posx + i*550, 250)),
      ])
        
      }


      add([
        sprite(icelongRight),

    
        pos( vec2(positionMiddle+500, 250)),
      ])
              /*
        sprite(icelongLeft),
        area({ shape: new Rect(vec2(0), 135, 90 )}),
        anchor("center"),
        body({ isStatic: true }),
        scale(0.5),
       // fixed(),

      
        sprite(icelongMiddle),
        area({ shape: new Rect(vec2(0), 135, 90 )}),
        anchor("center"),
        body({ isStatic: true }),
        scale(0.5),
       // fixed(),
    */
    

}


function generateIcebergs()
{
  const ICEBERGS = [iceBerg1,iceBerg2,iceBerg3,iceBerg4,iceBerg5]
  let rdnNumberIcebergType = 0;
  let rdnNumberIcebergDistance = 0;
  
  for (let i = 0; i < 20; i++) {

    rdnNumberIcebergType  = randi(0,5);
    rdnNumberIcebergDistance  = randi(1000,1300);
   // rdnNumber = randi(4) // returns 0, 1, 2 or 3;

    add([
      sprite(ICEBERGS[rdnNumberIcebergType]),
      scale(0.5),
      pos( vec2(-800 + i*rdnNumberIcebergDistance, 150)),
    ])
  }
  

}