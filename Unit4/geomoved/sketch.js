var num;
var distance;
var font1;

var locationData;

function preload() {
  locationData = getCurrentPosition();
  font1 = loadFont("assets/Mohave-Light.ttf");
}

function setup() {
  num = 0;
  textFont(font1, 36);
  intervalCurrentPosition(positionPing, 5000); // this is what calls positionPing function
//  createCanvas(displayWidth, displayHeight);
 createCanvas(windowWidth, windowHeight);

}

function draw() {


}

function positionPing(position) {
  // textSize(36);
  num++;
  background("#2452d1");
  fill("white");
  text("lat: " + position.latitude, 10, 40);
  text("long: " + position.longitude, 10, 90);
  text("number of updates " + num, 10, 140);

  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');
  text("you have moved " + distance, 10, 190);

  text("remember to take a screenshot before you take a picture of your surroundings!", 10, 230);

}
