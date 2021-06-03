const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine ,myWorld;
var ground , ball;

function setup() {
  createCanvas(400,400);
myEngine=Engine.create()
myWorld=myEngine.world;
var groundOption={
  isStatic:true
}
ground=Bodies.rectangle(200,390,400,20,groundOption)
World.add(myWorld,ground)
var ballOption={
   restitution:1.5
}
ball=Bodies.circle(200,200,20,ballOption)
World.add(myWorld,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(myEngine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
 }