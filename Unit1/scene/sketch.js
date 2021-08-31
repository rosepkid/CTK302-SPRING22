function setup() {
    createCanvas(720, 400);
}

function draw() {
  // Sets the screen to be 720 pixels wide and 400 pixels high

  background('blue');
 // noStroke();
  stroke('red') ;
  strokeWeight(20) ;


  // sailboat
  fill(204);
  triangle(18, 200, 18, 360, 81, 360);
  fill('yellow');



  fill(102);
  rect(81, 81, 63, 63);

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  // sun
  fill('yellow');
 // ellipse(252, 144, 72, 72);
 ellipse(451, 88, 150, 150);


  fill(204);
  triangle(288, 18, 351, 360, 288, 360);

  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI);

  noStroke() ;
  fill('white') ;
  text(mouseX + ", " + mouseY, 15, 15) ;
}
