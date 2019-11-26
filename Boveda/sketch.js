function setup() {
  createCanvas(600, 400, WEBGL);
normalMaterial();
}

function draw() {
  background(300, 300, 0);
 
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  sphere(2200)
  fill(200, 100, 200)
  stroke(0, 300, 300)
  
  orbitControl();
  rotateX(0.5)
  sphere(80)
  stroke(0 ,100, 300)
  fill(100, 20, 200)
  
  
  fill(0)

  
}