//Global Variables

var bananaimg,monkeyimg,groundimg,player_running

function preload(){
 player_running=
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png");
groundimg=loadImage("ground.jpg");
bananaimg=loadImage("Banana.png");  
  
}


function setup() {
  createCanvas(800,400);
monkey=createSprite(200,50,10,10);
monkey.addAnimation("monkeyimg",player_running);
monkey.scale=0.15;
ground=createSprite(400,360,10,10);
ground.addImage("groundimg",groundimg);
ground.scale=0.25;
monkey.setCollider("circle",0,1,1);
banana=createSprite(400,50,10,10);
banana.addImage("bananaimg",bananaimg);
banana.scale=0.06;


}



function draw(){
background(255); 
 if(keyDown("space")){
monkey.velocityY=-5;
}
if(keyDown("RIGHT_ARROW")){
monkey.velocityX=5;
}
if(keyDown("LEFT_ARROW")){
monkey.velocityX=-5;
}
monkey.velocityY=monkey.velocityY+0.5
monkey.collide(ground);
ground.depth=monkey.depth;
monkey.depth=monkey.depth+1;
if(monkey.isTouching(banana)){
banana.destroy();
monkey.velcotyY=0;
monkey.velocityX=0;
}
drawSprites();
}

banana=createSprite(400,50,10,10);
banana.addImage("bananaimg",bananaimg);
banana.scale=0.06;



