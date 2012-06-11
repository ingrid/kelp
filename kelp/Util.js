kelp.extend = function(baseFunc, addFunc, returnSecond, passObj){
    var newFunc = function(){
        var firstCall = baseFunc.apply(null, arguments);
	if (passObj){
	    var args = [firstCall];
	    for(var i = 0; i < arguments.length; i++){
		args[i+1] = arguments[i];
	    }
	}
	var secondCall = addFunc.apply(null, passObj ? args : arguments);
	return (returnSecond === true) ? secondCall : firstCall;
    };
    return newFunc;
};

kelp.color = function(red, green, blue){
    if ((red !== undefined) && (green !== undefined) && (blue !== undefined)){
        return "rgb(" + red + ", " + green + ", " + blue + ")";
    }
    else{
        // Convert from hex code. Eventually.
    }
};

kelp.Vector = function(x, y){
    var vector = {};
    vector.x = x;
    vector.y = y;
    
    return vector;
};

kelp.cache = {};

kelp.loadImage = function(url, onload){
    if (kelp.cache[url] === undefined){
	if (onload = undefined){
	    onload = function(){
	    };
	}
	// ICC: WTF figure out this 'new' keyword.
	img = new Image(url);
	img.onload = onload;
	img.src = url;
    } else {
	// ICC: Figure out what to do with onload in this case.
	img = kelp.cache[url];
    }
    return img;
};

kelp.makeFont = function (size, color, font, style){
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

// ICC: Should animations always be independent of images?
kelp.Animation = function(numFrames, frameWidth, frameHeight, frameRate, offsetX, offsetY, callback){
    if(offsetX == undefined){offsetX = 0;}
    if(offsetX == undefined){offsetY = 0;}
    if(callback == undefined){callback = function(){};}

    var anim = {};

    anim.width = frameWidth;
    anim.height = frameHeight;
    anim.numFrames = numFrames;
    anim.frameRate = frameRate;
    anim.offset = kelp.Vector(offsetX, offsetY);
    anim.frames = [];

    for(var i = 0; i < numFrames; i++){
	var frame = {};
	frame.x = (frames[i] * anim.width);
	frame.y = 0;
	frame.width = anim.width;
	frame.height = anim.height;
	anim.frames.push(frame);
    }

	return anim;
};