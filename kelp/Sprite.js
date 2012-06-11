// ICC: Move animations and other non core functionality out so Character.js or
// something...unless Scene.js needs animation...maybe, but it would be better
// to animate induvidual objects on a screen...maybe.

kelp.Sprite = function(x, y){
    var sprite = {};

    sprite.x = x;
    sprite.y = y;
    sprite.velocity = kelp.Vector(0, 0);

    sprite.loadImage = function(url){
	sprite.image = kelp.loadImage(url);
    };

    sprite.setAnimation = function(numFrames, width, height, frameRate){
	var anim = kelp.Animation(numFrames, width, height, frameRate);
	sprite.animation = anim;
	sprite.currFrame = 0;
    };

    sprite.update = function (elapsed){
	sprite.x += sprite.velocity.x * elapsed;
	sprite.y += sprite.velocity.y * elapsed;
    };

    sprite.render = function(ctx){
	if (sprite.image != null && sprite.animation == null){
	    ctx.drawImage(sprite.image, sprite.x, sprite.y);
	}
	if (sprite.image != null && sprite.animation != null){
	    // ICC: Maybe move frames back to sprite.
	    var frame = sprite.animation.frames[sprite.currFrame];
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

