// Do we need seperate Character and Player classes?
// What about when you have both?
// PlayerSophia, NPCSophia?

// Requires mouse and keyboard input.

// What syntax do we use to init this?

kelp.Character = function(x, y, upAnim, downAnim, leftAnim, rightAnim){
    character = kelp.Sprite(x, y);

    character.speed = 0;

    character.update = kelp.extend(character.update, function(elapsed){
        character.velocity.x = 0;
	character.velocity.y = 0;
	
	guide = game.mouse;

	var vec = {};
	vec.x = character.x - guide.x;
	vec.y = character.y - guide.y;

	if(((Math.abs(character.x - guide.x) > 20 ) || (Math.abs(character.y - guide.y) > 20))){
	    //    character.angle = Math.atan2(vec.x, vec.y);

	    character.velocity.x = -vec.x * character.speed;
	    character.velocity.y = -vec.y * character.speed;
	}

    });

    return character;
    
};
