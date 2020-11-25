var player, ground, villain, coin
var score = 0
var gameState = PLAY 
var PLAY = 1
var END = 0
function preload(){
playerImage = loadImage ("sm.png");
villainImage = loadImage("jadoo.png");
playerRunning = loadAnimation("22.png","dede.png");   

coinImage = loadImage("coin.png");
}

function setup() {
  
  createCanvas (700,700);

  
  player = createSprite(150,480,10,10);
  player.shapeColor = "red";
  player.addImage("smthing",playerImage);
  player.scale = 0.3;
  
  ground = createSprite(10,490,10000,10);
  ground.shapeColor = "brown";

 // player.debug = true

  player.setCollider("circle",0,0,80);
coinGroup = new Group()
villainGroup = new Group()



}

function draw() {
  console.log(player.y)
  background("white");
  text("Score:"+score,350,100);

 
    
    if(keyDown("space") && player.y >= 461) {
      player.velocityY = -20;
    }

  if (coinGroup.isTouching(player)) {
    coinGroup.destroyEach();
    score = score+2

    
  }

   if (villainGroup.isTouching(player)){
    villainGroup.destroyEach();
    villainGroup.velocityX = 0;
    coinGroup.destroyEach();
    score = 0
  }
   

  
  player.velocityY = player.velocityY + 0.8
  player.collide(ground)
  
 drawSprites();
 spawnCoin();
 spawnVillain()
 
 
}

function spawnCoin() {
  if (frameCount % 100 === 0) {
  coin  = createSprite(750, Math.round(random(250,400)),10,10)
  coin.addImage("coin",coinImage);
  coin.scale = 0.05
  coin.velocityX = -10;
  coin.lifetime = 105
  coinGroup.add(coin)
}

}


function spawnVillain() {
  if(frameCount % 50 === 0){
  villain = createSprite(750,455,10,10);
  villain.addImage("villain",villainImage);
  villain.velocityX = Math.round(random(-7,-15))
  villain.scale = 0.05;
  villain.lifetime = 105
  villainGroup.add(villain);
  }
}