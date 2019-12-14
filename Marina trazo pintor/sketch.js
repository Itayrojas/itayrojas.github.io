let foto;

function preload() {
  foto = loadImage("Marina.jpg");
}


function setup() {
  createCanvas(foto.width, foto.height);
  noLoop();
}

let sp = 25; // spacer o "espaciador"

function draw() {
  background(0);
  noStroke();
  for (let y = 0; y < height; y += sp) {
    for (let x = 0; x < width; x += sp) {
      let col = foto.get(x, y);
      Froot(x, y, col);
    }
  }
}

function Froot(x, y, col){
 let b = brightness(col);
  let r = red(col);
  let g = green(col);
  let bl = blue(col);
  let n =  round(map(b, 0, 255, 40, 0));
  for(let i = 0; i < n; i++){
   let nx = random(-sp, sp);
    let ny = random(-sp, sp);
    

    
    let p = color( 110 + r,  70 + g,  80 + bl );
    fill(p);
    arc(x+ nx, y + ny, 50, 50, 10, PI + QUARTER_PI, PIE);
    
    let z = color( 250 + r, 0 * g, 100 + bl, 25);
    fill(z);
    ellipse( x + nx, y + ny, 20, 20);
     
    
    
  }
}