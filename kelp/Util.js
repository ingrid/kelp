extend = function(baseFunc, addFunc, returnSecond, passObj){
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

color = function(red, green, blue){
    if ((red !== undefined) && (green !== undefined) && (blue !== undefined)){
        return "rgb(" + red + ", " + green + ", " + blue + ")";
    }
    else{
        // Convert from hex code. Eventually.
    }
};

Vector = function(x, y){
    var vector = {};
    vector.x = x;
    vector.y = y;
    
    return vector;
};