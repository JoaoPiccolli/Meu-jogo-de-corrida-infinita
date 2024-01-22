var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

  function preload(){
  pathImg = loadImage("57dec0c8-5d00-4693-b16e-ac1c16b03779.png");
  
  boyImg = loadAnimation ("frame-6.png", "frame-5.png", "frame-4.png", "frame-3.png", "frame-2.png", "frame-1.png");
 }

function setup(){
  
createCanvas(800,800);
path = createSprite(400, 400);
path.addImage(pathImg);
path.scale = 0.8;

boy = createSprite(200, 130);
boy.addAnimation("correndo", boyImg);
boy.scale = 0.3;
  
}

function draw() {
  background(0);
  path.velocityX = -6;
  
  boy.x = World.mouseX;
  
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  
  if(path.x < 0 ){
    path.x = path.width/2;
  }
  
  drawSprites();
}