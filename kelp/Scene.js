kelp.Scene = function(){
    scene = sprite.Sprite(0, 0);
    scene.setMask = function(url){
	img = Image(url);
	img.onload = function(){
	};
	img.src = url;
	scene.mask = img;
    };

    return scene;
};