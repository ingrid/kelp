window.onload = function(){
    initialize();
};

initialize = function(){
    game = Game(500, 400);
    game.setBGColor(80, 0, 80);

    player = kelp.Character(80, 80);
    player.loadImage("assets/player.png");
    player.setAnimation(32, 32, 36, 2);
    player.speed = 1;

    /** /
    scene = Scene();

    sceneCanvas = document.createElement("canvas");
    sceneContext = sceneCanvas.getContext("2d");
    sceneCanvas.width = 500;
    sceneCanvas.height = 400;
    sceneContext.fillStyle = color(255, 0, 0);
    sceneContext.fillRect(0, 0, 500, 50);
    sceneContext.fillRect(0, 0, 50, 500);
    sceneContext.fillRect(450, 0, 50, 500);
    sceneContext.fillRect(0, 350, 500, 50);
    scene.image = sceneCanvas;

    game.add(scene);
    /**/

    game.add(player);
    game.run()
};