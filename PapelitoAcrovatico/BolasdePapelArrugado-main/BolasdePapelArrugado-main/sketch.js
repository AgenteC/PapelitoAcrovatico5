
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var PapelitoAcrovatico1
var PapelitoAcrovatico1Img
var LineaDeMeta

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,650,width,20);
	dustbinObj=new dustbin(1200,650);
   PapelitoAcrovatico1 = new Circle(200,450,70)
   
   PapelitoAcrovatico1.scale = 5
	Engine.run(engine);

	LineaDeMeta = createSprite(200,200,20,20)
	LineaDeMeta.visible = false
}


function draw() {
  
  background(230);
  keyPressed();

  groundObject.display();
  dustbinObj.display();
PapelitoAcrovatico1.display();
LineaDeMeta.display();


}

function keyPressed(){

	if(keyCode === UP_ARROW){
Matter.Body.applyForce(PapelitoAcrovatico1.body,PapelitoAcrovatico1.body.position,{x:3,y:-5})
}
}
