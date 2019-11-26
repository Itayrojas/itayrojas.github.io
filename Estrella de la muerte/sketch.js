function setup() {
  createCanvas(600, 400, WEBGL);
normalMaterial();
}

function draw() {
  background(300, 300, 0);
 
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  sphere(100)
  fill(0)
  stroke(0, 300, 300)
  
  orbitControl();
  rotateX(0.5)
  sphere(100)
  stroke(0 ,100, 300)
  fill(200, 20, 200)
  
  
    triangle(160, 150, 280, 150, 30, 50)
    triangle(150, 160, 150, 280, 50, 30)
  
  

  
}