var vertexShaderText = 
['percision mediump float;',
'',
'attribute vec2 vertPosition;',
'',
'void main()',
'{',
'	gl_Position = vec4(vertPosition, 0.0, 1.0);',
'}'
].join('\n');

var fragmentShaderText = 
['percision mediump float;',
'',
'void main()',
'{',
'	gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);',
'}'
].join('\n');

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
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
}