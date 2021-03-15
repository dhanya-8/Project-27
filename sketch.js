
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var ro1, ro2, ro3, ro4, ro5;

function setup() {
	createCanvas(760, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(370, 30, 650, 30);

	bob1 = new Bob(170, 530, 50);
  bob2 = new Bob(270, 530, 50);
  bob3 = new Bob(370, 530, 50);
  bob4 = new Bob(470, 530, 50);
  bob5 = new Bob(570, 530, 50);

  ro1 = new Rope(bob1.body,roof.body,-50*2,0);
  ro2 = new Rope(bob2.body,roof.body,-25*2,0);
  ro3 = new Rope(bob3.body,roof.body,0*2,0);
  ro4 = new Rope(bob4.body,roof.body,25*2,0);
  ro5 = new Rope(bob5.body,roof.body,50*2,0);
	Engine.run(engine)
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ro1.display();
  ro2.display();
  ro3.display();
  ro4.display();
  ro5.display();


  drawSprites();
 
}

function keyPressed() { 
	if (keyCode=== UP_ARROW) 
  { Matter.Body.applyForce(bob1.body,bob1.body.position,{y:100,x:-100})
  }

  }
  function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
  }


