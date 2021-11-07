var bubbles = [];

function setup() {


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  let url = "https://opensheet.vercel.app/11jn-KP9LJIzGxBiY3Mcoaa2CJFSIE3dqLnK6ousml4k/Form+Responses+1";
  url = "https://opensheet.vercel.app/1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0/Form+Responses+1";
//https://docs.google.com/spreadsheets/d/1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0/edit?usp=sharing
  loadJSON(url, gotData);
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i]['What makes you happy?'], data[i]["What are you thankful for?"], data[i]["Your name here"])); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('blue');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myFood, myArt) {
    this.name = myName;
    this.food = myFood;
    this.art = myArt;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(4, 7), 0);
  }


  display() {

    ellipse(this.pos.x, this.pos.y, 50, 50);

    text(this.name + "\n" + this.food + "\n" + this.art, this.pos.x, this.pos.y);
    this.pos.add(this.vel);
  }


}
