extend = function(baseFunc, addFunc){
    var newFunc = function(){
        var firstCall = baseFunc.apply(null, arguments);
        var secondCall = addFunc.apply(null, arguments);
        return firstCall;
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
    vector = {};
    vector.x = x;
    vector.y = y;
    
    return vector;
};