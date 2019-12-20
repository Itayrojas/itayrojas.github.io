//Obra Sol Lewitt
//https://www.dorotheum.com/fileadmin/lot-images/38M141217/normal/sol-lewitt-3171907.jpg

let m = 30

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(300);
  noFill();
  strokeWeight(20);
  stroke(0);
  square(90, 90, 410, 290) //circulo

  rect(80, 80, 430, 430) //cuadrado negro

  let c = color(256, 30, 30); //margen rojo
  stroke(c);
  rect(10, 10, 580, 580);




  push();
  translate(width / 2, height / 2);
  stroke(0);
  star(-5, -5, 70, 172, 4);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}