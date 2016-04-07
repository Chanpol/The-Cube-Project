function init() {
	var panel = createPanel();
	var cube = createCube(panel);
	createSide(cube);
	rotatePanel(cube);
}

function createPanel() {
	var panel = document.createElement("div");
	var cube_side = 300;
	
	panel.style.margin = ""+cube_side+"px";
	panel.style.width = ""+cube_side+"px";
	panel.style.height = ""+cube_side+"px";
	panel.style.position = "relative";	
	panel.style.perspective = "1000px";	
	
	document.body.appendChild(panel);
	return panel;
}

function createCube(panel) {	
	var cube = document.createElement("div");
	var cube_side = 300;

	cube.setAttribute("id","Cube");
	cube.setAttribute("tabindex","1");
	cube.style.width = "100%";
	cube.style.height = "100%";
	cube.style.position = "absolute";	
	cube.style.transformStyle = "preserve-3d";
	cube.style.opacity = "0.8";
	cube.style.backfaceVisibility = "visible";
	
	panel.appendChild(cube);
	
	return cube;
}

function createSide(cube) {
	var cube_side = 300;
	var side_position = cube_side/2;
	var i=0;
	for (i=0; i<6; i++){
		var side = document.createElement("div");
		side.setAttribute("id","side"+i);
		cube.appendChild(side);
		side.style.position = "absolute";
		side.style.width = ""+cube_side+"px";
		side.style.height = ""+cube_side+"px";
		switch(i%6) {
			//Style and Position Front, Right, Back, Left, Up, and Buttom Sides. 
			case 0:
				side.style.background = "black";
				side.style.transform = "translate3d(0, 0, "+cube_side/2+"px)";
				break;
			case 1:
				side.style.background = "yellow";
				side.style.transform = "rotateY(90deg) translate3d(0, 0, "+cube_side/2+"px)";
				break;
			case 2:
				side.style.background = "red";
				side.style.transform = "rotateY(180deg) translate3d(0, 0, "+cube_side/2+"px)";
				break;
			case 3:
				side.style.background = "grey";
				side.style.transform = "rotateY(270deg) translate3d(0, 0, "+cube_side/2+"px)";
				break;
			case 4:
				side.style.background = "green";
				side.style.transform = "rotateX(90deg) translate3d(0, 0, "+cube_side/2+"px)";
				break;
			case 5:
				side.style.background = "blue";
				side.style.transform = "rotateX(270deg) translate3d(0, 0, "+cube_side/2+"px)";
				break;
		}
	}
}

var xAngle=0;
function rotatePanel(cube) {
	/*panel.addEventListener('click', function(e) {
		lastFocus = e.target;
	},false);*/

	cube.addEventListener('keydown', function(e) {
		switch(e.keyCode) {
			//Left
			case 37:
				cube.style.transform = "rotateY("+xAngle+"deg)";
				xAngle+=10;
				break;
			//Up
			case 38:
				break;
			//Right
			case 39:
				break;
			//Down
			case 40:
				break;
		};
	},false);
	
	/*$("body").keydown(function(e) {
		//switch(e.keyCode) {
			//case 81:
				
				//break;
		//};
	},false);*/
	
	//addEventListener(KeyboardEvent.KEY_DOWN, rotate);
}

function rotate(e) {
	document.getElementById("side1").style.transform = "rotateY("+xAngle+"deg) rotateX("+xAngle+"deg) rotateZ("+xAngle+"deg)";
}

function saveValue() {
	var test = document.getElementById("Panel").value;
	document.getElementById("Panel").disabled = "disabled";
	document.getElementById("haha").innerHTML = ""+test+"";
}