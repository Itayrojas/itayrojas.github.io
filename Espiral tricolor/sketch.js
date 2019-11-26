var a = 0;
var r = 20;

function setup() {
  createCanvas(300,500);
  background(300);
  frameRate(70);
}

function draw() {
  
  var x = r * cos(a);
  var y = r * sin(a);

  a += 10;
  r += 0.5;

  push();
  translate(width / 3, height / 3);
 
  let c = color(0, 0, 300, 90)
  let w = color(0, 240, 50)
   strokeWeight(2)
  stroke(300,300, 0);
  line(x, y, 40, 40);
  stroke(c)
  line(x, y, 60, 60)
  stroke(w)
  strokeWeight(1.5)
  line(x, y, 30, 80)
  pop();

}