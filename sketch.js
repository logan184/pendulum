
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var Constraint;
var roofObj;
var rope1,rope2,rope3,rope4,rope5;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof (300, 200, 400, 20);

	bobObj1=new Bob(180,450);
	bobObj2=new Bob(250,450);
	bobObj3=new Bob(320,450);
	bobObj4=new Bob(390,450);
	bobObj5=new Bob(460,450);

	 //rope1 = new Rope ( bobObj1.body,roofObj.body,-bobdiameter*2,0);
	// rope2 = new Rope ( bobObj2.body,roofObj.body,-bobdiameter*2,0);
	// rope3 = new Rope ( bobObj3.body,roofObj.body,-bobdiameter*2,0);
	// rope4 = new Rope ( bobObj4.body,roofObj.body,-bobdiameter*2,0);
	// rope5 = new Rope ( bobObj5.body,roofObj.body,-bobdiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");
  
  drawSprites();
  	roof.display();
 	bobObj1.display();
 	bobObj2.display();
	 bobObj3.display();
	 bobObj4.display();
	 bobObj5.display();

	rope1.display();
}



