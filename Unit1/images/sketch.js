let cake, capo, ice;

function setup() {
  createCanvas(500, 500);
  cake = loadImage("assets/cake.jpg");
  capo = loadImage("assets/capo.jpg");
  ice = loadImage("assets/icec.jpeg");
  imageMode(CENTER) ;
}

function draw() {
  background('green');
  image(cake, width/2, height/2, 100, 100) ;
  image(capo, width/2, height/2-120, 100, 100) ;
  image(ice, width/2, height/2+120, 100, 100) ;
}
