var initDemo = function(){
	var canvas = document.getElementById("game-surface");
	var gl = canvas.getContext("webgl");

	if(!gl){
		gl = canvas.getContext("experimental-gl");
	}
	if(!gl){
		alert("Your browswer does not support webGL");
	}

	// canvas.width = window.innerWidth;
	// canvas.height = window.innerHeight;
	gl.clearColor(0.75, 0.85, 0.8, 1.0);//	R, G, B, Alpha
	gl.clear();
}