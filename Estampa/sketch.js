function preload() {
 
  img = loadImage('fuego.png');
  fondo = loadImage ('costanera.jpg');
}

function setup() {
  createCanvas(700 , 700);
  background (fondo);
  imageMode(CENTER);
}


function draw() {
  }

function mousePressed() {
  stamp(mouseX,mouseY);
  }

function stamp(x,y) {

  push();
  
  imageMode(CENTER);
  image(img, x, y, 80, 100);
  
  pop();
  }