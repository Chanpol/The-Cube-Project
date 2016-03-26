/*
elmnt.style.webkitTransform = "rotate(45deg)";
 elemnt.style.webkitTransform = "rotateX("+ rotationValue +"deg)";
 
 
 document.getElementById("demo").innerHTML = "Hello Dolly.";
 
 

 var xAngle = 0, yAngle = 0;
document.addEventListener('keydown', function(e) {
  switch(e.keyCode) {

    case 37: // left
      yAngle -= 90;
      break;

    case 38: // up
      xAngle += 90;
      break;

    case 39: // right
      yAngle += 90;
      break;

    case 40: // down
      xAngle -= 90;
      break;
  };

  $('cube-face').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}, false);
    elemnt.style.webkitTransform = "rotate(45deg)";
*/

var xAngle = 45
function myFunction() {
	xAngle += 10;
	document.getElementById("cube").style["transform"] = "rotateY("+xAngle+"deg) rotateX("+xAngle+"deg) rotateZ("+xAngle+"deg)";
}

function rotateBack() {
	xAngle -= 10;
	document.getElementById("cube").style["transform"] = "rotateY("+xAngle+"deg) rotateX("+xAngle+"deg)";
}

