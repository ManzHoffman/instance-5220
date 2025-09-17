function createVariables(objectArray)
{
// Create variables dynamically with key names as their values
for (let key in objectArray) {
  if (objectArray.hasOwnProperty(key)) {
      window[key] = key;
  }
}
}
function loadGameElements(objectArray, type)
{
    // Loop through the object properties
for (var key in objectArray) {


 
    if (objectArray.hasOwnProperty(key)) {
      // Get the title (property name) and value of each entry
      var title = key;
      var value = objectArray[key];
     
      // Output the title and value
     // console.log("Title:", title);
     // console.log("Value:", value);

        switch (type) {
            case "sound":
                loadSound(title, value);

                break;
                case "font":
                    loadFont(title, value);
    
                    break;

                    case "sprite":
                      loadSprite(title, value);
      
                      break;

                      
                    case "animatedSprite":
                     // loadSprite(title, value);
                   //  console.log("dvcwsdfgvsdgvsdfds : " +  objectArray[key][0].src)
                    const subcategory =  objectArray[key][0];

                    // for (let i = 0; i < objectArray.length; i++) {
                      loadSprite(key,subcategory.src, {
                        // The image contains 9 frames layed out horizontally, slice it into individual frames
                        sliceX: subcategory.sliceX,
                          sliceY: subcategory.sliceY,
                        // Define animations
                        anims: {
                          [subcategory.anim] : {
                            // Starts from frame 0, ends at frame 3
                            from: subcategory.from,
                            to: subcategory.to,
                            // Frame per second
                            speed: subcategory.speed ,
                            loop: subcategory.loop,
                          },
                      
                        },
                      })
                     //}

             
                      break;
            default:
                break;
        }



    }
  }
}