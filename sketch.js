var wall,wall1,wall2 ;

var car , car1 , car2 ;

var speed,speed1,speed2 ;

var weight ;

var thickness, thickness1,thickness2 ;

var height,height1,height2 ;

var line,line1;


function setup() {
  createCanvas(1200,400);
 

speed=random(50,90);
speed1=random(200,360);
speed2=random(400,720);
weight=random(400,1500);
thickness=random(0,50);
thickness1=random(30,80);
thickness2=random(40,120);



car=createSprite(70,80,20,20);
car1=createSprite(70,220,20,20);
car2=createSprite(70,370,20,20);
wall=createSprite(1000,60,thickness1,100)
wall1=createSprite(1000,200,thickness,100)
wall2=createSprite(1000,340,thickness2,100)
line=createSprite(600,130,1200,5);
line1=createSprite(600,270,1200,5);

car.velocityX= 0;
car1.velocityX= 0;
car2.velocityX= 0;

}

function draw() {
  background(0);

  textSize(35)
  fill("white")
  text("PEEL P50 (38 KMPH) ",50,40)
  text("AIXAM COUPE (45 KMPH) ",50,180)
  text("HENNESSEY VENOM F5 (485 KMPH) ",50,330)

  car.shapeColor=color(255)
  car1.shapeColor=color(255)
  car2.shapeColor=color(255)
  wall.shapeColor=color(80,80,80)
  wall1.shapeColor=color(80,80,80)
  wall2.shapeColor=color(80,80,80)

  car.depth=wall.depth
  car.depth=wall.depth+1

  
  car1.depth=wall1.depth
  car1.depth=wall1.depth+1

  
  car2.depth=wall2.depth
  car2.depth=wall2.depth+1

  
  if(keyCode === 32){

    car1.velocityX=speed;
 }

 if(keyCode === 32){

  car2.velocityX=speed;
}

if(keyCode === 32){

  car.velocityX=speed;
}

if(wall.x-car.x<(car.width+wall.width)/2){

  car.velocityX=0
  var deformation=0.5*weight*speed*speed/22509;
  
  if(deformation>180){
  
    car.shapeColor="red"
  }
  
  if(deformation<180 && deformation>100 ){
  
    car.shapeColor="green"
  }
  
  if (deformation<100){

    car.shapeColor="yellow"
  }
  
  
  
  }

  
  if(wall1.x-car1.x<(car1.width+wall1.width)/2){

    car1.velocityX=0
    var deformation=0.5*weight*speed*speed/22509;
    
    if(deformation>180){
    
      car1.shapeColor="red"
    }
    
    if(deformation<180 && deformation>100 ){
    
      car1.shapeColor="green"
    }
    
    if(deformation<100){
    
      car1.shapeColor="yellow"
    }
    
    
    }

    if(wall2.x-car2.x<(car2.width+wall2.width)/2){

      car2.velocityX=0
      var deformation=0.5*weight*speed*speed/22509;
      
      if(deformation>180){
      
        car2.shapeColor="red"
      }
      
      if(deformation<180 && deformation>100 ){
      
        car2.shapeColor="green"
      }
      
      if(deformation<100){
      
        car2.shapeColor="yellow"
      }
      
      
      }
      
    
  drawSprites();
}