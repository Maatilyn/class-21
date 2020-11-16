var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 = createSprite(100,600,30,90);
  gameobject1.shapeColor = 'blue';
  gameobject2 = createSprite(200,400,60,50);
  gameobject2.shapeColor = 'pink';
  gameobject3 = createSprite(500,400,90,20);
  gameobject3.shapeColor = 'brown';
  gameobject4 = createSprite(300,600,10,40);
  gameobject4.shapeColor = 'purple';
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,gameobject1)){
  movingRect.shapeColor = "red";
  gameobject1.shapeColor = "yellow";
}
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 } 
  drawSprites();
}