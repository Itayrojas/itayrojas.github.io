function setup() {
  createCanvas(650, 400);

}

function draw() {
  background(240, 10, 40);

  let numX = 33;
  let numY = 33;

  let m = 80;

  let spx = (width - 2 * m) / (numX - 2);
  let spy = (height - 3 * m) / (numY - 2);

  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {

      let d = dist(mouseX, mouseY, 2 + x * spx, 2 + y * spy);
      let r = map(d, 0, width, 0, PI);
       
      push();
      translate(70 + x*spx, 170 + y*spy); 
      rotate(r); 
      
      rotate(r); 
     translate(10 + x*spx, 10 + y*spy); //sin querer pego un translate de más y aparece esta maravilla de  ola
      
     c = color( random(0,0, 300), random(0,100, 300), random(300,200,300))
      stroke(random (100,300))
      fill(c)
      triangle(0, mouseX, spx/0.5, 0, 2, 3); 
     
      stroke(300, 0)
      pop();
    }
  }


    }