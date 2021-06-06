const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var man_image;
var ground;
var ground_options;
var maxDrops = 300;
var drops = [];
var thunder1, thunder2, thunder3;
var umbrella;
var thunder;

function preload(){

}

function setup(){
  var canvas = createCanvas(300,500);

  engine = Engine.create();
  world  = engine.world;

  
  umbrella = new Umbrella();

  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),3,10));
     }
    }

}

function draw(){
  background(0);
  Engine.update(engine);

 


  umbrella.display();
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
  
  drawSprites();
}