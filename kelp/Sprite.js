Sprite = function(x, y){
    var sprite = {};

    sprite.x = x;
    sprite.y = y;
    sprite.velocity = kelp.Vector(0, 0);

    sprite.loadImage = function(url){
	sprite.image = kelp.loadImage(url);
    };

    sprite.setAnimation = function(width, height, numFrames, frameRate){
	var anim = {};
	anim.width = width;
	anim.height = height;
	anim.numFrames = numFrames;
	anim.frameRate = frameRate;
	sprite.frames = [];

	for(var i = 0; i < numFrames; i++){
	    var frame = {};
	    frame.x = (frames[i] * width);
	    frame.y = 0;
	    frame.width = anim.width;
	    frame.height = anim.height;
	    sprite.frames.push(frame);
	}

	sprite.animation = anim;
	sprite.currFrame = 0;
    };

    sprite.update = function (elapsed){
	console.log(sprite.velocity.x);
	console.log(elapsed);
	console.log(sprite.velocity.x * elapsed);
	sprite.x += sprite.velocity.x * elapsed;
	sprite.y += sprite.velocity.y * elapsed;
	console.log(sprite.velocity.x);
    };

    sprite.render = function(ctx){
	if (sprite.image != null && sprite.animation == null){
	    ctx.drawImage(sprite.image, sprite.x, sprite.y);
	}
	if (sprite.image != null && sprite.animation != null){
	    var frame = sprite.frames[sprite.currFrame];
	    ctx.drawImage(sprite.image, frame.width * sprite.currFrame, 0, frame.width, frame.height, sprite.x, sprite.y, frame.width, frame.height);
	    if (sprite.currFrame >= sprite.animation.numFrames - 1){
		sprite.currFrame = 0;
	    }else{
		sprite.currFrame++;
	    }
	}
    };
    return sprite;
};

