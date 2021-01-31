const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
const Constraint=Matter.Constraint

var engine,world

function preload(){
  bgImage=loadImage("bg.jfif")
}

function setup() {
  createCanvas(1200,800);
  engine=Engine.create()
  world=engine.world
  ground=new Ground(500,600,1000,20)
  ground2=new Ground(800,300,110,20)
  box1=new Box(600,100)
  box2=new Box(600,100)
  box3=new Box(600,100)
  box4=new Box(600,100)
  box5=new Box(600,100)
  box6=new Box(600,100)
  box7=new Box(600,100)
  box8=new Box(600,100)
  box9=new Box(500,100)
  box10=new Box(500,100)
  box11=new Box(500,100)
  box12=new Box(500,100)
  box13=new Box(500,100)
  box14=new Box(500,100)
  box15=new Box(500,100)
  box16=new Box(500,100)

  ball1=new Ball(200,200)
  monster=new Monster(800,200)
  chain1=new Chain(ball1.body,{x:400,y:50})
  
}

function draw() {
  background(bgImage);  
  Engine.update(engine);
  ground.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ball1.display();
  chain1.display();
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}