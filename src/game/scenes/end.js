scene("outro", (level) => {
  addVHSEffects(); 
  setBackground(COLOR_BLACK);



  let lineIndex = 0;

  function addTerminalLine(text) {
    addText(text, 40, COLOR_WHITE, "ussr", "center", width() / 2, height() / 2 - 200 + lineIndex * 50);
    lineIndex++;
  }

  function displayLinesSequentially() {
    FR.outro.lines.forEach((line, i) => {  
      wait(i * 1.2, () => {
        addTerminalLine(line);
      });
    });

   
    wait(FR.outro.lines.length * 1.2 + 1, () => {
      addText("Appuyer sur ESPACE pour terminer", 36, COLOR_WHITE, "ussr", "center", width() / 2, height() / 2 + 180);

      onKeyPress("space", () => {


   go("menu")
        

       
      });
    });
  }

  displayLinesSequentially();
});


