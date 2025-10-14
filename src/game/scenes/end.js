scene("outro", (level) => {
  addVHSEffects(); 
  setBackground(COLOR_BLACK);


 const introMusic = play("typing", { loop: false,volume:0.6 });

  // Terminal lines 

  let lineIndex = 0;

  // Helper to add one line at a time
  function addTerminalLine(text) {
    addText(text, 40, COLOR_WHITE, "ussr", "center", width() / 2, height() / 2 - 200 + lineIndex * 50);
    lineIndex++;
  }

  // Type lines with delay
  function displayLinesSequentially() {
    end_lines.forEach((line, i) => {  
      wait(i * 1.2, () => {
        addTerminalLine(line);
      });
    });

   
    wait(end_lines.length * 1.2 + 1, () => {
      addText("Appuyer sur ESPACE pour terminer", 36, COLOR_WHITE, "ussr", "center", width() / 2, height() / 2 + 180);

      onKeyPress("space", () => {


   go("menu")
        
     //  showScreenGlitch()
       //  wait(0.5,() =>{ })

       
      });
    });
  }

  displayLinesSequentially();
});


