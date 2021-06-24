

// changing individual properties with code and using setInterval
var rotationSpeed = -0.01;
var goDown = true;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	if(goDown){
		rotationSpeed += -0.05;
	}else{
		rotationSpeed += 0.05;
	}
	if(rotationSpeed < 1){
		goDown = false;
	}
	if(rotationSpeed > 0){
		goDown = true;
	}
	myOtherBox.object3D.rotation.x += rotationSpeed;
    myOtherBox.object3D.rotation.y += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps