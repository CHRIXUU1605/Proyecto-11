seaImg = loadImage("sea.png");
shipImg1 = loadAnimation (ship1.png, ship2.png, ship3.png ,ship4.png)

function preload(){
shipsImg1 = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png"); 
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
spriteName.addImage(seaImg);

if (sea.x <0 ) 
   sea.x=sea.width/2;
}

function draw() {
  background("blue");
 
}