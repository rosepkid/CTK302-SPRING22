let state = 0 ;

function setup() {
  createCanvas(500, 500);

}

function draw() {

  switch(state) {

    case 0:
    background('grey') ;
    text("why did the chicken \n cross the road?", 100, height/2) ;
    break ;

    case 1:
    background('yellow') ;
    text("to get to the other side", 100, height/2) ;

    break ;
  }

}


function mouseReleased() {
  state++ ;
  if (state > 1) state = 0 ;
}
