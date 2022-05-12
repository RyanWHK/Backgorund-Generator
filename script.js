var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

var color1Gradient = color1.addEventListener("input", setGradient);
var color2Gradient = color2.addEventListener("input", setGradient);


// Display the inital CSS gradient property
//onload set default Gradients properties
window.onload = setGradient();

// How to create random background color:
var random = document.getElementById("random");

function randomcolor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let g2 = Math.floor(Math.random() * 256);
    let b2 = Math.floor(Math.random() * 256);
    let color1 = "rgb(" + r + "," + g + "," + b + ")";
    let color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
    console.log("color1: ", color1);
    console.log("color2: ", color2);
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1
	+ ", " 
	+ color2
	+ ")";
	css.textContent = body.style.background + ";";
}

var	randomcolor1 = random.addEventListener("click", randomcolor);
