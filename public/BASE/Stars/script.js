let earth;
let img;
let vid;
let locX;
let locY;
let rotateTheY, rotateTheX;
let mouseIsDown = false;
let theta = 0;
let earthR = 100;
let minStars = 1000;
let maxStars = 3000;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  cursor('grab');
}

function draw() {
    background(18, 46, 62);
    ambientLight(150);
  }

  function windowResized(){
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

let h = window.innerHeight;
let w = window.innerWidth;
let starNum = randNum(minStars,maxStars);
let starField = document.querySelector(".starfield");

/*Helper functions*/
/******************/
//random number generator
function randNum(from, to) {
	return Math.floor(Math.random() * (to - from + 1) + from);
}

//why load jQuery when you can use this 1 function?
function addClass(query, theClass) {
	var x = document.querySelectorAll(query);
	for (var i = 0; i < x.length; i++) {
		x[i].classList.add(theClass);
	}
}
/******************/

function twinkleTwinkle() {
	h = window.innerHeight;
	w = window.innerWidth;
	let svgStars = "";
    for (var i = 0; i<starNum; i++){
        svgStars += `<circle class="star" fill="white" cx="${randNum(0,w)}" cy="${randNum(0,h)}" r="${10 / randNum(6,20)}"/>`;
    }
    let svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"">
            <g mask="url(#worldHole)">
                ${svgStars}
            </g>
        </svg>
        `;
	
	starField.innerHTML = svg;
	var allCircles = document.querySelectorAll(".star");
	for (var i = 0; i < allCircles.length; i++) {
		allCircles[i].style.animationDelay = (randNum(-8000, 0) + "ms");
	}
	addClass(".star", "twinkle");
}

window.addEventListener("resize", twinkleTwinkle);

//run the twinkler at start
window.onload = twinkleTwinkle;