var sea, seaImg, ship, shipImg, ship_sailing;

function preload(){

ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

shipImg = loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

shipImg = loadAnimation(//enlista los nombres de los png que desees);

seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);

//crear el sprite del barco
ship = createSprite(50, 50, 20, 50);
ship = addImage("ship", shipImg)
ship.addAnimation("sailing", ship_sailing);
ship.scale = 0.5;

//crear el sprite del oceano
sea = createSprite(200, 189, 400, 20);
sea.addImage("sea", seaImg);
sea.velocityX = -5;

spriteName.addImage(seaImg);

}

function draw() {
  background("withe");
 
if(keyDown("space")){

ship.velocityY = -10;

}

if(sea.x <0){

sea.x=sea.width/2;

}

ship.velocityY = ship.velocityY + 0.5;

ship.collide(sea);

drawSprites();

}