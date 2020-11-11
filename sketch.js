var monkey, monkeyAnimation;
var ground, invisibleGround;
var banana, bananaGroup, bananaImage;
var obstacle,obstacleImage, obstacleGroup;
var score=0 ;

function setup(){
  createCanvas(600,400);
 
  monkey=createSprite(100,300,10,10);
  monkey.addAnimation("sprite",monkeyAnimation);
  monkey.scale=0.2;
  
  ground=createSprite(300,360,1200,70);
  ground.shapeColor="green";
  
  invisibleGround=createSprite(100,360,100,10)
  
  bananaGroup = new Group();
  
  obstacleGroup= new Group();
}

function preload(){

  monkeyAnimation=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage=loadImage("banana.png");
  
  obstacleImage=loadImage("obstacle.png");
}
function draw(){
   background("lightblue")
  
   ground.velocityX=-4;
   ground.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  
   invisibleGround.visible=false;
  
   monkey.collide(invisibleGround);
  
   monkey.velocityY = monkey.velocityY + 0.8;
  
  if(keyDown("space") && monkey.y >= 200){
    monkey.velocityY=-12;
  }
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  

    score = score + Math.round(getFrameRate()/60);
  
  
  food();
  
  obstacles();
  
  drawSprites();
  text("Survival Time: "+ score,250,100);
   
}

 function obstacles(){
    if(frameCount % 300 === 0){
      obstacle=createSprite(600,500,10,10);
      obstacle.addImage("obstacle.png", obstacleImage);
      obstacle.scale=0.25;
      obstacleGroup.add(obstacle);
       obstacle.velocityX=-3;
      obstacle.lifetime=600;
    }
    
  }
function food(){
  if(frameCount % 80 === 0){
    banana=createSprite(600,(random(120,200)),10,10);
    banana.addImage("banana.png", bananaImage);
    banana.scale=0.1;
     banana.velocityX=-3; 
  banana.lifetime=600;
    bananaGroup.add(banana);
  }
  
 
  
}
  

