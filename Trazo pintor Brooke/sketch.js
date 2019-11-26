let foto;

function preload() {
  foto = loadImage("brooke.jpg");
}


function setup() {
  createCanvas(foto.width , foto.height);
  noLoop();
}

let sp = 7; // spacer o "espaciador"

function draw() {
  background(0);
  noStroke();
  for (let y = 0; y < height; y += sp) {
    for (let x = 0; x < width; x += sp) {
      let col = foto.get(x, y);
      Brooke(x, y, col);
    }
  }
}


function Brooke(x, y, col){
 let b = brightness(col);
  let r = red(col);
  let g = green(col);
  let bl = blue(col);
 let n =  round(map(b, 0, 255, 40, 0));
  for(let i = 0; i < n; i++){
   let nx = random(-sp, sp);
    let ny = random(-sp, sp);
    


    
    let z = color( 50 + r, 0,11 * g,  100 + bl);
    fill(z);
arc(x + nx, y + ny, 30, 5, 0, PI + QUARTER_PI, PIE)
  
  }
}