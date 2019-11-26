function setup() {
  createCanvas(600, 400, WEBGL);
normalMaterial();
}

function draw() {
  background(300, 30, 0);
 
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  sphere(230)
  fill(0, 100, 180)
  stroke(0, 300, 300)
  
  orbitControl();
  rotateX(0.5)
  sphere(230)
  stroke(0 ,100, 300)
  fill(0, 20, 200)
  
  
    
  
  

  
}