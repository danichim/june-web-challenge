let x = document.createElement("CANVAS");
x.width = 608;
x.height = 608;
var ctx = x.getContext("2d");
var box = 32;

function gPos() {
	return {
		x: Math.floor(Math.random() * 17 + 1) * box,
		y: Math.floor(Math.random() * 15 + 3) * box
	}
}

var bg = new Image();
bg.src = "b.png";

var goatImg = new Image();
goatImg.src = "g.png";

// create the dragon
let dragon = [];

dragon[0] = {
	x: 9 * box,
	y: 10 * box
};

// create the goat
let goat = gPos();

//control the dragon
let d;
document.addEventListener("keydown", move);
function move(e) {
	let key = e.keyCode;
	if (key == 37 && d != "RIGHT") {
		d = "LEFT";
	} else if (key == 38 && d != "DOWN") {
		d = "UP";
	} else if (key == 39 && d != "LEFT") {
		d = "RIGHT";
	} else if (key == 40 && d != "UP") {
		d = "DOWN";
	}
}

function draw() {
	ctx.drawImage(bg, 0, 0);
	for (let i = 0; i < dragon.length; i++) {
		ctx.fillStyle = (i == 0) ? "red" : "salmon";
		ctx.fillRect(dragon[i].x, dragon[i].y, box, box);
	}
	ctx.drawImage(goatImg, goat.x, goat.y);

	// old head position
	let dragonX = dragon[0].x;
	let dragonY = dragon[0].y;

	// which direction
	if (d == "LEFT") dragonX -= box;
	if (d == "UP") dragonY -= box;
	if (d == "RIGHT") dragonX += box;
	if (d == "DOWN") dragonY += box;

	// if the dragon eats the goat
	if (dragonX == goat.x && dragonY == goat.y) {
		goat = gPos();
	} else {
		dragon.pop();
	}

	// end game
	if (dragonX < box || dragonX > 17 * box || dragonY < 3 * box || dragonY > 17 * box) {
		clearInterval(game);
	}

	//move new head pos
	dragon.unshift({
		x: dragonX,
		y: dragonY
	});
}

// call draw function every 100 ms
document.body.appendChild(x);
let game = setInterval(draw, 100);
