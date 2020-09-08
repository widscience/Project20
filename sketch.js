var car, wall;
var weight, speed;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);


  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2);

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  

  car.collide(wall);

  if (wall.x-car.x < (car.width+wall.width)/2){
    
     var deformation = (0.5*weight*speed^2)/22500 ;

  if (deformation < 100){
    car.shapeColor = (0,255,0);
  }
  if (deformation > 100 && deformation < 181){
    car.shapeColor = (230,230,0);
  }
  if (deformation > 180){
    car.shapeColor = (255,0,0);
  }
}
  
//collide(car, wall);

  //fill("white");
  //Text("Deformation =" + deformation, 800,50);
  drawSprites();
}