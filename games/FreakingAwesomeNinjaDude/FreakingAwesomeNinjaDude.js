var gHeight = window.innerHeight; //Used for ground.
var player, ground1; //Image for player, and level 1 ground!.
var x; //X position.
var vx; //X velocity.
var y; //Y position.
var gravity; //Basically Y velocity, or vx.

function preload(){
  player = loadImage("Sprites/Entities/Player.png");
  ground1 = loadImage("/Sprites/World/Ground1.png");
}

function setup() {
  preload();
  x = 200;
  y = 200;
  createCanvas(window.innerWidth,window.innerHeight);
}

function draw() {
  noStroke();
  background(0, 228, 244);
  image(player, x, y);
  image(ground1, 0, gHeight+10, ground1.width*200, ground1.height);
}
