let state = 0 ;
let timer = 0 ;
let vol ;
let mic ;
let cake ;
let x = 0 ; 



function setup() {
  createCanvas(500, 500);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();

  cake = loadImage("assets/cake.jpg") ;
}



function draw() {

  switch(state){
    case 0:
    background("black") ;
    image(cake, x, 200, 150, 150) ;
    x++ ;
    if (x > width) x = 0 ;
    text("please click the cake to start!", 100, 100) ;
    break ;

    case 1:
    background('blue') ;
    vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1
    if (vol > .2) {
      state = 2 ;
    }
    text("listening", 100, 100) ;
    break;

    case 2:
    background('red') ;
    timer++ ;
    if (timer > 3*60) {
      timer = 0 ;
      state = 3 ;
    }
    break ;

    case 3:
    background('green') ;
    timer++ ;
    if (timer > 5*60) {
      timer = 0 ;
      state = 0 ;
    }
    break ;

  }

  fill('white') ;
  text(mouseX + ", " + mouseY, 15, 15) ;
}

function mouseReleased() {
  if ((state == 0) && (mouseX > x) && (mouseX < x+150) && (mouseY > 200) && (mouseY < 350)) {
    state = 1 ;
  }

}

function touchStarted() {
  getAudioContext().resume();
}
