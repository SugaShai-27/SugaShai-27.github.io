$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(1350, 400, 50, 50, "hotpink")
    createPlatform(1200, 500, 50 , 50, "hotpink");
    createPlatform(500, 700, 200, 20, "hotpink ")
    createPlatform(700, 700, 0, 280, "hotpink");
    createPlatform(500, 100, 90, 390,  "hotpink")
    createPlatform(1005, 656, 50, 30,  "hotpink");
    createPlatform(1100, 600, 50, 50, "hotpink")
    
   

    // TODO 3 - Create Collectables

    createCollectable("grace", 400, 600);
    createCollectable("grace", 800, 700,);
    createCollectable("steve", 100, 700);
    createCollectable("diamond", 1100, 500, 0, 0);
    createCollectable("kennedi", 1206, 430, 0, 0);
    createCollectable("max", 1350, 320, 0, 0);
    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 2000);
    createCannon("right", 500, 2000);
    createCannon("bottom", 100, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
