var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

console.log(random);

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomColors);

function randomColors() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
	//console.log("color1 = " + color1 + " color2 = " + color2 + " ");
}

function randomColor() {
	// storing all letter and digit combinations 
	// for html color code 
	var letters = "0123456789ABCDEF"; 
	  
	// html color code starts with # 
	var color = '#'; 
	  
	// generating 6 times as HTML color code consist 
	// of 6 letter or digits 
	for (var i = 0; i < 6; i++) 
		color += letters[(Math.floor(Math.random() * 16))]; 
	return color;
}
