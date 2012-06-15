kelp = {};
// ICC: Curently bloated because of testing, will trim once we get proper modules hooks working.
kelp.core = ['Util', 'Game', 'Sprite', 'Scene', 'Input', 'Keyboard', 'Input', 'Mouse', 'Character'];
kelp.init = function(){
    for(var i = 0; i < kelp.core.length; i++){
	module = kelp.core[i];
	script = "<script language='javascript' src='kelp/" + module + ".js'></script>"
	console.log(script);
	document.write(script);
    }
}();