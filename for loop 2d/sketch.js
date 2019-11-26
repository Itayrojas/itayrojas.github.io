function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 45, 0.01);
  cursor(CROSS);
}

function draw() {
  background(220);

  
  let numX = slider.value(); // número de elementos en X´
  let numY = slider.value(); // número de elementos en Y´
  
  let m = 80;    // margen
  
  // calculo los espaciadores de x e y
  let spx = (width - 2*m)/(numX - 1);
  let spy = (height - 2*m)/(numY - 1);
  
  // doble for loop
  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {
      
      // calculo la distancia con el mouse
      let d = dist(mouseX, mouseY, m + x*spx, m + y*spy);
      // mapeo la distancia a un ángulo´
      let r = map(d, 0, width, 0, PI);
      
      // reseteo la matriz
      push();
      translate(m + x*spx, m + y*spy); // traslado al punto de la grilla
      rotate(r); // roto en un ángulo proporcional a la distancia
      
      rotate(r); // roto en un ángulo proporcional a la distancia
      line(-spx, 0, spx, 0); // hago una línea horizontal´
      ellipse(spx, 0, 3, 3);
      pop();
    }
  }
}