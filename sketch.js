const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base,wall1,wall2;
var bridge,jointPoint;
var stones=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base=new Base(windowWidth/2,windowHeight-10,windowWidth,20);

  wall1=new Base(80,windowHeight/2-windowHeight/15,150,windowHeight/4);
  
  wall2=new Base(windowWidth-80,windowHeight/2-windowHeight/15,150,windowHeight/4);

  bridge=new Bridge(14,{x:200,y:windowHeight/2});
  jointPoint=new Base(windowWidth-80,windowHeight/2-windowHeight/15,150,windowHeight/4)
  Matter.Composite.add(bridge.body,jointPoint);

  jointLink=new Link(bridge,jointPoint);

  for(var i=0;i<=8;i++){
    var x=random(width/2-200,width/2+300);
    var y=random(-10,100);
    var stone=new Stone(x,y,80);
    stones.push(stone);

  }
}

function draw() {
  background(51);
  Engine.update(engine);
  base.show();
  wall1.show();
  wall2.show();
  bridge.show();
  jointPoint.show();
  for(var stone of stones){
    stone.show();
  }

}
