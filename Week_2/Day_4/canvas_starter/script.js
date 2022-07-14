//Target the canvas and get the context

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

//Rectangles
// fillRect , strokeRect, clearRect

//ctx.fillStyle = 'purple';

//x, y, width, height
//ctx.fillRect(50, 50, 200, 200);

/* function draw() {
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
} */

//draw();

//paths
// beginPath
// stroke
// fill
// closePath

//moveTo
//lineTo

/* ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(450, 50);
ctx.stroke();
//ctx.moveTo(450, 50);
ctx.lineTo(450, 450);
ctx.stroke();
ctx.closePath(); */

//Triangle
/* ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();
ctx.closePath() */

//Arcs
//arc
//arcTo

/* ctx.beginPath();
//ctx.arc(x, y, radius, startingAngle, endAngle, anticlockwise)
//radians
//(Math.Pi/180) * degrees
//rawing the arc
ctx.arc(150, 170, 75, 0, Math.PI * 2);

//specifying the width of the stroke like
ctx.lineWidth = 20;

//changing the color of the stroke to green
ctx.strokeStyle = 'green';
//finally we stroke the path
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 170, 35, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();
ctx.closePath(); */

// fillStyle - change the color of the fill
//strokeStyle - change the color of the stroke
/* ctx.fillStyle = 'rgba(255, 255, 0, 0.1)';
ctx.strokeStyle = '#444';

ctx.lineWidth = 20;

ctx.strokeRect(50, 50, 150, 150);

ctx.fillRect(100, 100, 200, 200);

ctx.fillStyle = 'red';

ctx.fillRect(300, 300, 100, 100); */

// text

/* ctx.font = '48px sans-serif';

ctx.fillText('Hello world', 400, 50);
ctx.lineWidth = 2;
ctx.strokeText('Hello world', 400, 200);
 */
// Images

const tileImg = new Image();

tileImg.addEventListener('load', function () {
  //ctx.drawImage(tileImg, 0, 0, 50, 50);
});
tileImg.src = 'images/tile.jpg';

let tileX = 0;
let tileY = 0;

/* function draw() {
  //ctx.drawImage(image, x, y, width, height);
  ctx.clearRect(0, 0, 900, 600);
  ctx.drawImage(tileImg, tileX, tileY, 50, 50);

  tileX += 3;
  console.log(tileX);
} */

/* setInterval(() => {
  draw();
}, 30);
 */

/* function drawPattern() {
  let tilePattern = ctx.createPattern(tileImg, 'repeat');
  ctx.fillStyle = tilePattern;
  ctx.fillRect(150, 300, 200, 200);
}

setTimeout(() => {
  drawPattern();
}, 2);
 */

// Animation
// Repeat the drawing
//Clear the canvas before every draw

const color = {
  red: Math.floor(Math.random() * 255 + 1),
  green: Math.floor(Math.random() * 255 + 1),
  blue: Math.floor(Math.random() * 255 + 1),
  rgb: function () {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  },
};

//console.log(color.rgb());

function updateCanvas() {
  color.red = (color.red + 1) % 255;
  color.green = (color.green + 1) % 255;
  color.blue = (color.blue + 1) % 255;

  ctx.clearRect(0, 0, 900, 600);
  ctx.fillStyle = color.rgb();
  ctx.fillRect(0, 0, 900, 600);

  requestAnimationFrame(updateCanvas);
}

//updateCanvas();

//requestAnimationFrame

let speed1 = 900;
let speed2 = 0;
let speed3 = 0;

function drawSquare(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawCanvas() {
  //clear the canvas
  ctx.clearRect(0, 0, 900, 600);

  //increase the speed
  if (speed1 < -100) speed1 = 900;

  speed1 -= 3;
  speed2 += 2;
  speed3 += 2;

  //draw the squares
  drawSquare(speed1, 50, 100, 100, 'red');
  drawSquare(0, speed2, 100, 100, 'green');
  drawSquare(speed2, speed3, 100, 100, 'yellow');

  requestAnimationFrame(drawCanvas);
}

//drawCanvas();

class Pokemon {
  constructor() {
    this.x = 25;
    this.y = 25;

    const img = new Image();
    img.addEventListener('load', () => {
      this.img = img;

      this.draw();
    });
    img.src =
      'https://www.seekpng.com/png/full/182-1829970_caterpie-pokemon-sprite-animation-gifs.png';
  }

  moveUp() {
    this.y -= 25;
  }

  moveDown() {
    this.y += 25;
  }

  moveRight() {
    this.x += 25;
  }

  moveLeft() {
    this.x -= 25;
  }

  reset() {
    this.x = 25;
    this.y = 25;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}

const caterpie = new Pokemon();

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      caterpie.moveUp();
      break;
    case 'ArrowDown':
      caterpie.moveDown();
      break;
    case 'ArrowLeft':
      if (caterpie.x >= 0) {
        caterpie.moveLeft();
      }
      break;
    case 'ArrowRight':
      caterpie.moveRight();
      break;
    case 'Space':
      caterpie.reset();
      break;
  }
  pokemonCanvas();
});

function pokemonCanvas() {
  ctx.clearRect(0, 0, 900, 600);
  ctx.fillText('Caterpie X ' + caterpie.x, 700, 100);
  ctx.fillText('Caterpie Y ' + caterpie.y, 700, 200);

  caterpie.draw();
}
