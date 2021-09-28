const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic:true
  };

  //create player base body
  player_base=Bodies.rectangle(200,350,180,150,options)
  World.add(world,player_base)
  //create player body
  player =Bodies.rectangle(250,player_base.position.y-160,50,180,options)
  World.add(world,player)

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  //show the player image using image() function
  image(playerimage,player.position.x,player.position.y,50,180);
  //show the playerbase image using image() function
  image(baseimage,player_base.position.x,player_base.position.y,180,150);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
