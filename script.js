// Step 1: Select h3, create class color 1 & 2 then select them
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2")

// checking
// console.log(css);
// console.log(color1);
// console.log(color2);

// Step 2: Add event for color 1 & 2, input event
// color1.addEventListener("input", function(){
// 	console.log(color1.value);
// })

// color2.addEventListener("input", function(){
// 	console.log(color2.value);
// })

// Step 3: change the background color, create ID and get the body tab
var body = document.getElementById("gradient");
// console.log(body);

// Step 4: add the style to background for gradient change
// 4.1: input inside step 2
// color1.addEventListener("input", function(){
// 	body.style.background = 
// 	"linear-gradient(to right, "
// 	+ color1.value
// 	+ ", "
// 	+ color2.value
// 	+ ")";
// })

// color2.addEventListener("input", function(){
// 	body.style.background = 
// 	"linear-gradient(to right, "
// 	+ color1.value
// 	+ ", "
// 	+ color2.value
// 	+ ")";
// })

// Step 5: Simplify the code
// function setGradient(){
// 	body.style.background = 
// 	"linear-gradient(to right, "
// 	+ color1.value
// 	+ ", "
// 	+ color2.value
// 	+ ")";
// 	css.textContent = body.style.background +";";
// }
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

// Step 6 : add css.tectContent to show the color we want to use
function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
	css.textContent = body.style.background +";";
}

