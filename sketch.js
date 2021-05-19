
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
const Constraint=Matter.Constraint;
var roofObj;
var rope1,rope2,rope3,rope4,rope5;



function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof (680, 200, 400, 20);

	bobObj1=new Bob(552,500);
	bobObj2=new Bob(616,500);
	bobObj3=new Bob(680,500);
	bobObj4=new Bob(744,500);
	bobObj5=new Bob(808,500);

	 rope1 = new Rope({x:552,y:200},bobObj1.body);
	 rope2 = new Rope({x:616,y:200},bobObj2.body);
	 rope3 = new Rope({x:680,y:200},bobObj3.body);
	 rope4 = new Rope({x:744,y:200},bobObj4.body);
	 rope5 = new Rope({x:808,y:200},bobObj5.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");
  
  drawSprites();
  	roof.display();
	  
	  rope1.display();
	  rope2.display();
	  rope3.display();
	  rope4.display();
	  rope5.display();

 	bobObj1.display();
 	bobObj2.display();
	 bobObj3.display();
	 bobObj4.display();
	 bobObj5.display();

	
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x: -80 , y: -83})
	}
}



