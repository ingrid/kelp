Sprite = function(x, y){
    var sprite = {};

    sprite.x = x;
    sprite.y = y;
    sprite.velocity = Vector(0, 0);

    sprite.setImage = function(url){
	img = new Image(url);
	img.onload = function(){
	};
	img.src = url;
	sprite.image = img;
    };

    sprite.update = function (elapsed){
	
    };

    sprite.render = function(ctx){
	if (sprite.image != null){
	    ctx.drawImage(sprite.image, sprite.x, sprite.y);
	};
    };
    return sprite;
};

