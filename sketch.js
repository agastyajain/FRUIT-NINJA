var sword,swordimg;
var fruit1;
var fruit2;
var fruit3;
var fruit4;
var select_fruit;
var score;
var fruit4grp;
var fruit3grp;
var fruit2grp;
var fruit1grp;
var alien;
var alien1;
var PLAY=1;
var END=0;
var state=PLAY;
var gameover;
var gameoverimg;
var aliengrp;
var sound,sound1;

function preload(){
swordimg=loadImage("sword.png");
fruit1img=loadImage("fruit1.png");
fruit2img=loadImage("fruit2.png");
fruit3img=loadImage("fruit3.png");
fruit4img=loadImage("fruit4.png");
alienimg=loadImage("alien1.png");
alien1img=loadImage("alien2.png");
gameoverimg=loadImage("gameover.png");
sound=loadSound("Arrow+Swoosh+1.mp3");
}

function setup(){
createCanvas(460, 400);
sword=createSprite(200,200,20,20);
sword.addImage(swordimg);
sword.scale=0.6;
score=0;
 fruit4grp = new Group();
 fruit3grp = new Group();
 fruit2grp = new Group();
 fruit1grp = new Group();
 aliengrp = new Group();
gameover=createSprite(230,200,20,20);
gameover.addImage(gameoverimg);
gameover.visible=false;
}

function draw(){  
background("white");
if(state==PLAY){
   rand();
   textSize(24)
   text("SCORE:",180,20);
   text(score,280,20);
   sword.y=mouseY;
sword.x=mouseX;
textSize(24)
text("SCORE:",180,20);
text(score,280,20);
select_fruit=Math.round(random(1,6));
if(sword.isTouching(fruit1grp)){
   fruit1grp.destroyEach();
   score=score+1;
  sound.play();
}
if(sword.isTouching(fruit2grp)){
   fruit2grp.destroyEach();
   score=score+1;
  sound.play();
}
if(sword.isTouching(fruit3grp)){
   fruit3grp.destroyEach();
   score=score+1;
  sound.play();
}
if(sword.isTouching(fruit4grp)){
   fruit4grp.destroyEach();
   score=score+1;
  sound.play();
}
if(sword.isTouching(aliengrp)){
  state=END;
 }
  
}
 else if(state==END){
    gameover.visible=true;
   fruit1grp.velocityX=0;
   fruit2grp.velocityX=0;
   fruit3grp.velocityX=0;
   fruit4grp.velocityX=0;
   aliengrp.velocityX=0;
   
    
  }
 
drawSprites();
  
}
function rand() {
  //console.log(select_fruit);
  if(World.frameCount%10==0){
    if(select_fruit==1){
      fruit1();
    }
    else if(select_fruit==2){
      fruit2();
    }
    else if(select_fruit==3){
      fruit3();
    }
    else if(select_fruit==4){
      alien();
    }
    else if(select_fruit==5){
      alien1();
    }
    else{
      fruit4();
    }
    } 
}
function fruit1(){
   var fruit1=createSprite(400,Math.round(random(20,370)),10,10);
  fruit1.addImage(fruit1img);
  fruit1.velocityX=-10;
  fruit1.lifetime=150;
  fruit1.scale=0.2;
  fruit1grp.add(fruit1);
}
function fruit2(){
   var fruit2=createSprite(400,Math.round(random(20,370)),10,10);
  fruit2.addImage(fruit2img);
  fruit2.velocityX=-10;
  fruit2.lifetime=150;
  fruit2.scale=0.2;
  fruit2grp.add(fruit2);
}
function fruit3(){
   var fruit3=createSprite(0,Math.round(random(20,370)),10,10);
  fruit3.addImage(fruit4img);
  fruit3.velocityX=10;
  fruit3.lifetime=150;
  fruit3.scale=0.2;
  fruit3grp.add(fruit3);
}
function fruit4(){
   var fruit4=createSprite(0,Math.round(random(20,370)),10,10);
  fruit4.addImage(fruit2img);
  fruit4.velocityX=-10;
  fruit4.lifetime=150;
  fruit4.scale=0.2;
  fruit4grp.add(fruit4);
}
function alien(){
   var alien=createSprite(0,Math.round(random(20,370)),10,10);
  alien.addImage(alienimg);
  alien.velocityX=10;
  alien.lifetime=150;
  alien.scale=0.6;
  aliengrp.add(alien);
}
function alien1(){
   var alien1=createSprite(400,Math.round(random(20,370)),10,10);
  alien1.addImage(alien1img);
  alien1.velocityX=-10;
  alien1.lifetime=150;
  alien1.scale=0.6;
  aliengrp.add(alien1);
}


