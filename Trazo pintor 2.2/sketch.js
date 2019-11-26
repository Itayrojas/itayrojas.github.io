let foto;

function preload() {
  foto = loadImage("lana del rey.jpg");
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
    


    
    let z = color(  r, 100 + g,  50 + bl);
    fill(z);
    rect( x + nx, y + ny, 5, 30);
     
    
    let c = color( 110 + r,  0 * g, 0 * bl);
    if( x < height / 4)
    fill(c);
    ellipse( x + nx, y + ny, 5, 5);
    
        
    let e = color( 110 + r,  0 * g, 0 * bl);
    if( y < height / 5)
    fill(e);
    ellipse( x + nx, y + ny, 5, 5);
    
        let m = color( 110 + r,  0 * g, 0 * bl);
    if( x < height / 4)
    fill(m);
    ellipse(  x + nx, y + ny, 5, 5);
    
    
    
           

     
     
    
    
  }
}