

// changing individual properties with code and using setInterval
var rotationSpeed = -0.05;
var goDown = true;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	if(goDown){
		rotationSpeed += -0.05;
	}else{
		rotationSpeed += 0.05;
	}
	if(rotationSpeed < -10){
		goDown = false;
	}
	if(rotationSpeed > 10){
		goDown = true;
	}
	myOtherBox.object3D.rotation.x += rotationSpeed;
    myOtherBox.object3D.rotation.y += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps