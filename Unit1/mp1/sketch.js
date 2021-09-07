function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {

  background(255, 0, 123);



  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    rect(100, 100, 100, 100) ;

  }



  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);


  text("Lorem ipsum dolor sit amet, \"consectetur\" \
  adipiscing elit, \n      sed do eiusmod tempor incididunt \
  ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
  ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 20, 20) ;

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
