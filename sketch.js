var r = 100;
var g = 50;
var b=200;
var square;
var m=20;


function setup(){

  createCanvas(1200,400)

  square=createSprite(800,800,30,30);
  square.shapeColor="yellow";
}


function draw(){
  
  square.x=World.mouseX;
  square.y=World.mouseY;

  let m = map(mouseX, 0, 1200, 0, 255);
let g=map(mouseX,0,1200,50,150);
let b= map(mouseX,0,1200,30,200);
ellipse(m, 50, 10, 10);
background(m,g,b);

  
  fill("white")
drawSprites();

}