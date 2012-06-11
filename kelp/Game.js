Game = function(width, height){
    var game = {};
    
    game.canvas = document.createElement("canvas");
    game.context = game.canvas.getContext("2d");
    game.bgColor = color(0, 0, 0);
    game.children = [];
    
    game.fps = 30;
    game.elapsed = 0;
    
    text = {};
    text.makeFont = function (color, size, font, style){
        var font = {};
	
        if (style === undefined){
            style = "";
        }
        if (font === undefined){
            font = "sans-serif";
        }
	
        font.color = color;
        font.size = size;
        font.font = font;
        font. style = style;
	
        return font;
    };
    
    parentElement = document.body;
    
    parentElement.appendChild(game.canvas);
    
    game.canvas.width = width;
    game.canvas.height = height;
    
    game.tick = function(){
        game.render();
        game.update();
        window.setTimeout(game.tick, 1000.0/game.fps);
    };
    
    game.update = function(){
        game.elapsed = 1.0/game.fps;
	for (var i = 0; i < game.children.length; i++){
	    game.children[i].update(game.elapsed);
	}
    };
    
    game.render = function(){
	
        var ctx = game.context;
	
        ctx.fillStyle = game.bgColor;
        ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
	for (var i = 0; i < game.children.length; i++){
	    game.children[i].render(ctx);
	}
	
    };
    
    game.setBGColor = function(r, g, b){
        game.bgColor = color(r, g, b);
    };
    
    game.run = function(){
        game.tick();
    };
    
    game.add = function(obj){
	game.children.push(obj);
    };
    
    game.sound = {};
    game.sound.cache = {};
    game.sound.load = function(url){
        var aud = document.createElement('audio');
        aud.setAttribute('src', url);
        aud.load();
        game.sound.cache[url] = aud;
    };
    game.sound.play = function(url){
        if(game.sound.cache[url] === undefined){
            game.sound.load(url);
        }
        game.sound.cache[url].play();
    };
    
    game.play = function(file, volume, pan, loop){
        game.sound.play("audio/" + file);
    };
    
    return game;
};