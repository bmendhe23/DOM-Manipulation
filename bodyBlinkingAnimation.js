var body = document.querySelector("body");
var isBlue = false;

setInterval(function() {
	if(isBlue){//when false it shows white
		body.style.background = "white";
	}
	else{//when true is show the mentioned color
		body.style.background = "#33AFFF";//this is the color to which you want to see your screen 
	}
	isBlue = !isBlue; //this changes the bool value of isBlue
}, 1000)
