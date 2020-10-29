const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

var particle;
var score=0;
var count=0;
var gameState="start";


function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(400,790,800,20);

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var p=75; p<=width; p=p+50){
    plinkos.push(new Plinko(p,75));
  }

  for(var p=50; p<=width-10; p=p+50){
    plinkos.push(new Plinko(p,175));
  }

  for(var p=75; p<=width; p=p+50){
    plinkos.push(new Plinko(p,275));
  }

  for(var p=50; p<=width-10; p=p+50){
    plinkos.push(new Plinko(p,375));
  }
}

function draw() {
  background(0);  

  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10));
  }
  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
  }

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  for(var i=0; i<particles.length; i++){
    particles[i].display();
  }

  drawSprites();
}