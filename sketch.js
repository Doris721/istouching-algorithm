var mrect,frect;



function setup() {
  createCanvas(800,400);
  mrect=createSprite(400, 200, 50, 50);
  frect=createSprite(200,200,50,50);
  mrect.shapeColor="green";
  frect.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
mrect.x=mouseX;
mrect.y=mouseY;

istouching();
  drawSprites();
}

function istouching(){
  if(mrect.x-frect.x<mrect.width/2+frect.width/2 
    && frect.x-mrect.x<frect.width/2+mrect.width/2 
    && mrect.y-frect.y<mrect.height/2+frect.height/2
    && frect.y-mrect.y<frect.height/2+mrect.height/2){
      mrect.shapeColor="yellow";
      frect.shapeColor="red";
    }
    else{
      mrect.shapeColor="green";
      frect.shapeColor="blue";
    }
}