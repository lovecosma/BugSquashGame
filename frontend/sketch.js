var spritesheet;
var passed;
sheetX = 0;
var insect = [5];
var totalbugs = 50;
var bug = [];
var girl;
var i;
var j;
var k;
var s;
var q;
var score = 0;
var speed = 0.5;
var moving = 1;
var frame = 0;
var deadCount = 0;
var s;
var guy;
var girl;
var direction = 1;
var level = 0;

function preload(){
  spritesheet = loadImage("bugs.png");
  landscape = loadImage("floor.jpg");
  antFarm = loadFont("ANTFGC__.TTF");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(antFarm);
    for(i = 0; i < 5; i ++){
    insect[i] = spritesheet.get(sheetX, 0, 96, 96);
    sheetX += 96;
    frameRate(20);
  }
  for(j = 0; j < totalbugs; j ++){
  bug[j] = new Ant(random(50, windowWidth-50), random(50, windowHeight-50), insect, random(0, 2), speed);
}
}
function mouseClicked(){
  speed += 0.6;
  for(q = 0; q < totalbugs; q ++){
  bug[q].clicked();
  }
  var g = dist(mouseX, mouseY, 0.5*windowWidth, 0.6*windowHeight);
  if(g < 25){
    s = second();
    level = 1;
  }

  }

function draw(){;
  if(level == 0){
  background(landscape);
  fill(0);
  textSize(72);
  textAlign(CENTER);
  text("BUG SQUASH", 0.5*windowWidth, 0.4*windowHeight);
  textSize(28);
  text("Ready to Squash some Bugs?", 0.5*windowWidth, 0.5*windowHeight);
  textSize(28);
  var d = dist(mouseX, mouseY, 0.5*windowWidth, 0.6*windowHeight);
  if(d < 25){
    fill(255);
  } else {
    fill(0);
  }
    text("Yes! Let's Go!", 0.5*windowWidth, 0.6*windowHeight);
  }
  if(level == 1){
    background(68, 46, 33);
    textSize(18);
    fill(0);
    for(k = 0; k < totalbugs; k ++){
      bug[k].display();
      bug[k].moving();
    }
    textSize(18);
    time = (s - second());
    timer = 30 - abs(time);
    text("Time Left: \n" + abs(timer) + " seconds", 70, 25);
    text("Score: \n" + score + " points", windowWidth*0.95, 25);
    if(abs(timer) == 0){
      level = 2;
    }
  }
  if(level == 2){
  textSize(64);
  text("Game Over", windowWidth*0.5, windowHeight*0.4);
  textSize(28);
    text("Final Score: \n" + score + " points", windowWidth*0.5, windowHeight*0.5);
  }
  if(deadCount >= totalbugs){
    level == 2;
  }
}
