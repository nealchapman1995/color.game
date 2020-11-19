var colors = generateRandomColors(6);
var reset = document.getElementById("reset");
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var results = document.getElementById("results");
var h1 = document.querySelector("h1");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

colorDisplay.innerHTML = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//set intial color of each square
	squares[i].style.backgroundColor = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to clicked color
		if(clickedColor === pickedColor){
			results.innerHTML = "Correct!";
			h1.style.backgroundColor = clickedColor;
			reset.innerHTML = "Play again?";
			for (var i = 0; i < squares.length; i++){
				squares[i].style.backgroundColor = pickedColor;
			}
		}
		else{
			this.style.backgroundColor = "#232323";
			results.innerHTML = "Try Again!";
		}
	});
}

//sets one of the colors at random the be the "winning color"
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//push the random colors into the array
function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

//make a random color
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")"
}

reset.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		//set intial color of each square
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	results.innerHTML = " ";
	reset.innerHTML = "New Colors";
	easy.classList.remove("selected");
	hard.classList.add("selected");
});

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor;
	for (var i = 0; i < colors.length; i++) {
		//set intial color of each square
		squares[i].style.backgroundColor = colors[i];
	}
	for (var i = 5; i > colors.length - 1; i --){
		squares[i].style.backgroundColor = "#232323";
	}
	h1.style.backgroundColor = "steelblue"
	results.innerHTML = " ";
	reset.innerHTML = "New Colors";
});

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor;
	for (var i = 0; i < colors.length; i++) {
		//set intial color of each square
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue"
	results.innerHTML = " ";
	reset.innerHTML = "New Colors";
});