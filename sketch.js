var car, wall;

function setup() {
  createCanvas(1200,800);
  car = createSprite(400, 400, 50, 80);
  car.shapeColor = "green";
  car.velocityX=4
  wall = createSprite(800,400,80,30);
  wall.shapeColor = "green";
 
}

function draw() {
  background(0,0,0);  
 // car.x = World.mouseX;
  //car.y = World.mouseY;
if(isTouching(car,wall)){
  car.shapeColor = "red";
  wall.shapeColor = "red";
}

bounceoff(car,wall);
  drawSprites();
}
