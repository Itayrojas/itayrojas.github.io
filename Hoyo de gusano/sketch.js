

function setup() {
  createCanvas(450, 450, WEBGL);
 
  
}

function draw() {
  background(30, 0, 30);
  
  let b = color(50, 0 ,0, 60)
   fill(b)
  torus(mouseX, mouseY);
   stroke(300, 300, 0)
  
  let c = color(0,300, 40); 
  fill(c);
  circle(width%2, height%2, 80);
  
  
  
  if (mouseIsPressed){
  stroke(random(100,0, 300), random(50,0, 300), random(0, 300, 300))
  }else{
    fill(300, 0, 30)
    torus(mouseX, mouseY);
  
  }
 
  
  
  }
 
