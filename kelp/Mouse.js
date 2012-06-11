Game = extend(Game, function(game){
    var MOUSE_BUTTON_MAP = {
	1:'MOUSE_LEFT',
	3:'MOUSE_RIGHT'
    };

    game._justPressedButtons = [];
    game._justReleasedButtons = [];
    game._buttons = {};
    game.mouse = Vector(0,0);
    
    var _getMouseCoords = function(e){
	if(game.canvas === undefined) { return; }
	var x;
	var y;
	if (e.pageX || e.pageY) {
	    // Chrome, Opera
	    x = e.pageX;
	    y = e.pageY;
	}
	else { 
	    // FireFox
	    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
	    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
	} 
	x -= game.canvas.offsetLeft;
	y -= game.canvas.offsetTop;
	
	if(x >= 0 && x < game.canvas.width && y >= 0 && y < game.canvas.height){
	    return Vector(x, y);
	}
    };

    game._getMouseButton = function(code){
	if(MOUSE_BUTTON_MAP[code] != undefined){
	    return MOUSE_BUTTON_MAP[code];
	}
	else{
	    return "UNKNOWN";
	}
    };
    
    game.update = extend(game.update, function(){
	game._justPressedButtons = [];
	game._justReleasedButtons = [];
    });

    game.justPressed = function(name){
	return game._justPressedButtons.indexOf(name) !== -1;
    };
	
    game.justReleased = function(name){
	return game._justReleasedButtons.indexOf(name) !== -1;
    };
	
    game.buttonDown = function(name){
	return game._buttons[name];
    };	
    
    document.onmousedown = function(e){
	var button = game._getMouseButton(e.which);
	if(game._buttons[button] === false || game._buttons[button] === undefined){
	    game._buttons[button] = true;
	    game._justPressedButtons.push(button);
	}
    };
    document.onmouseup = function(e){
	var button = game._getMouseButton(e.which);
	if(game._buttons[button] === true){
	    game._buttons[button] = false;
	    game._justReleasedButtons.push(button);
	}
    };
    document.onmousemove = function(e){
	var mouse = _getMouseCoords(e);
	if(mouse != undefined){
	    game.mouse = mouse;
	}
	// Else mouse is not on the canvas so we don't update the position.
    };	

    return game;
    
}, true, true);