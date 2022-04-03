
var trex ,trex_running;
var score = 0;
var play = 1;
var end = 0;
var gamestate= play;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 
ground_image=loadImage("ground2.png")
cloud_image=loadImage("cloud.png")
obstacle_1=loadImage("obstacle1.png");
obstacle_2=loadImage("obstacle2.png");
obstacle_3=loadImage("obstacle3.png");
obstacle_4=loadImage("obstacle4.png");
obstacle_5=loadImage("obstacle5.png");
obstacle_6=loadImage("obstacle6.png");
}

function setup(){
  
  createCanvas(600,200)
  
  //create a trex sprite
 trex= createSprite(50,160,20,50)
trex.addAnimation("running",trex_running)
trex.scale=0.5;
// create a ground 
 ground = createSprite(200,180,400,20);
 ground.addImage(ground_image)

 // create invisible_ground
 invisible_ground=createSprite(200,190,400,20);
 invisible_ground.visible=false;

 var something = Math.round(random(1,100));
 console.log(something);
}


function draw(){
  // set background to yellow
  background("yellow");
  text("score : "+score,500,50)
  
  if (gamestate==play){
    ground.velocityX=-10;
    score=score+Math.round(frameCount/60);
     // if space pressed, trex will jump
  if(keyDown("space")&&trex.y>100){
    trex.velocityY= -10; 
   }
   // ground's x is divided by its width
 if (ground.x<0){
 ground.x=ground.width/2;
 }
 spawn_cloud();
 spawn_obstacle();

 trex.velocityY=trex.velocityY+0.5;
  }
  else if(gamestate==end){
    ground.velocityX=0;
  }
  
  console.log(frameCount);
 
trex.collide(invisible_ground)

drawSprites();

}
function spawn_cloud(){
  if (frameCount%40==0){
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloud_image);
    cloud.scale = 0.4;
    cloud.y=Math.round(random(10,60));
cloud.velocityX=-6;
cloud.lifetime=200;
}
  }
function spawn_obstacle(){
  if (frameCount%40==0){
    obstacle = createSprite(600,165,10,50);
    obstacle.velocityX = -7;
    var rand = Math.round(random(1,6))
    switch(rand){
      case 1:  obstacle.addImage(obstacle_1 );
               break;
      case 2:  obstacle.addImage(obstacle_2 );
               break;   
      case 3:  obstacle.addImage(obstacle_3 );
               break;
      case 4:  obstacle.addImage(obstacle_4 );
               break;
      case 5:  obstacle.addImage(obstacle_5 );
               break;
      case 6:  obstacle.addImage(obstacle_6 );
               break;
      default: break;
    }
obstacle.scale=0.5;
obstacle.lifetime=200;
  }
}