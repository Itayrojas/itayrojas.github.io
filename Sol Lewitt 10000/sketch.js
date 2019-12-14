let m = 28;
function setup() {
  createCanvas(1000, 400);
  strokeWeight (2);
 stroke(0,256,256,50);
  noLoop ();
}

function draw() {
  
  background(180,20,10);
  
  for(i = 0; i < 10000; i++) {
    
    push();
    let X = random (m, width -m);
    let Y = random (m, height- m);
     
    translate (X,Y);
    rotate(random(TWO_PI));
    line(-20,0,20,0);
    pop();
  }
}