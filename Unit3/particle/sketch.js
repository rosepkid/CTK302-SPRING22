let cars = [];

function setup() {
  createCanvas(500, 500);
  noStroke();

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }
}

function draw() {
  background("white");

  cars.push(new Car()); // spawn car

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].a <= 0) {
      cars.splice(i, 1) ;
    }
  }

  print(cars.length);
}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(5, 10), random(5, 10));
    this.a = random(200, 255);
    this.r = random(255) ;
    this.g = random(255) ;
    this.b = random(255) ;
    this.size = random(10, 25) ;
   // this.lifetimer = 5*60 ;
  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

  move() {
    this.pos.add(this.vel);
    this.a -= 3 ;
  //  this.lifetimer-- ;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }
}
