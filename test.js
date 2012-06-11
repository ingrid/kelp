window.onload = function(){
    initialize();
};

initialize = function(){
    game = Game(500, 400);
    game.setBGColor(80, 0, 80);

    player = Sprite(80, 80);
    player.loadImage("assets/player.png");
    player.setAnimation(32, 32, 36, 2);
    player.speed = 1;

    player.update = extend(player.update, function(elapsed){
        player.velocity.x = 0;
	player.velocity.y = 0;
	
	guide = game.mouse;

	var vec = {};
	vec.x = player.x - guide.x;
	vec.y = player.y - guide.y;

	if(((Math.abs(player.x - guide.x) > 20 ) || (Math.abs(player.y - guide.y) > 20))){
	    //    player.angle = Math.atan2(vec.x, vec.y);

	    player.velocity.x = -vec.x * player.speed;
	    player.velocity.y = -vec.y * player.speed;
	}

    });
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