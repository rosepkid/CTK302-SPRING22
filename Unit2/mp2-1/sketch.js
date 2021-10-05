var mic;
var vol;
let x = 0;
let state = 0;
let programStarted = false;
let timer = 0 ;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();

  // cake = loadImage("assets/cake.jpg");  // from my other program
}


function draw() {


timer++ ;
if (timer > 30) {
  timer = 0 ;
  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1
}


  if (programStarted) {
    state = 1;
  } else {
    state = 0;
  }

  // check how loud the input is
  if (vol > .01) { // if the volume is LOUD?
    // do something
    state = 2;
  }

  if (vol > .05) {
    state = 3;
  }


  switch (state) {
    case 0: // splash screen - click to advance
      background(100);
      textSize(18);
      text("click to start", 100, 100);
      break;

    case 1: // no audience
      background(150);
      text("no audience", 100, 100);
      break;

    case 2: // a little audience
      background(175);
      text("a little audience", 100, 100);
      break;

    case 3: // a lot of audience
      background(200);
      text("more audience", 100, 100);
      break;



  }

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
  programStarted = true;
}
