function setup() {
  createCanvas(320, 430);
 
}

function draw() {
  background(250, 80, 130);
  
  line(10, 400, 30, 50)
  stroke( 100, 300, 100)
  
  line(30, 200, 400, 200)
   line(400, 400, 30, 400)
  
  stroke(200)

  triangle(210, 30, 60, 40, 80, 300,)
  
  speed= sin(millis()/10) * 5
  circle( 30, speed + 30, 50, 230)
  fill(100, 300, 100) 
  
  circle(250, 380, speed + 200, 250) 
  
   
  triangle(210, 70, 90, 80, 160, 350)
  fill( 30, 360, 310)
  
}
  
  
  