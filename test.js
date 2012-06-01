window.onload = function(){
    initialize();
};

initialize = function(){
    game = Game(40, 50);
    game.setBGColor = color(255, 0, 255);
    game.run()
};