var x; // Start by creating a variable called x, this value needs to change every frame
var y;

let width = 500;
let score = 0;
let gameover = false;
let win = false;
let racquet_height = 50;

function init() {
  x = 20; // Start at the left edge of the canvas
  y = 60;
  xspeed = 7.5;
  yspeed = 4;
  score = 0;
  win = false;
  gameover = false;  
}

function setup() {
  createCanvas(width, width);
  background(220);
  init();
}

function draw() {
  frameRate(30);
  if (score>=5) {
    win = true;
  }
  if (win) {
    background(0,255,0);
  }
  else {
    background(255,0,0);
  }
  fill(255);
  x = x + xspeed; // Move slightly to the right every frame by
  yspeed = yspeed + 0.1;  
  y = y + yspeed;
  
  
  
	if (x > width-10){
      gameover = true;
      }
  if (x < 10){
      x = 10;
      xspeed *= -1 ;
      }
  
  	if (y > width-10){
      y = width-10;
      yspeed *= -1;
//        text('TALALKOZÁS', 10, 30);

      }
  if (y < 10){
      yspeed *= -1;
      y = 10;
      }
  
  if (ellipseMeetsRectangle(x,y)) {
    xspeed = -1.10*abs(xspeed);
    yspeed *= 1.10;
    text('ÜTKÖZÉS!!!',20,20);
    score = score+1;
  }
    
  
  fill(255);
  ellipse(x, y, 20, 20);
//  fill(255);
//  text(yspeed, 10, 30);
  rect(width - 20,mouseY-(racquet_height/2),10,50);
  
  if (gameover) {
    if (mouseIsPressed) {
      init();  
    }
    else {
    textSize(30);
    text("GAME OVER!",20,200);
    fill('red')
    text('SCORE: ',20,50);
    text(score,110,90);
    text('tap to play again',20,250)
    }
  }
  else {
    textSize(30);
    text('SCORE: ',20,30);
    text(score,250,30); 
  }
    if (win) {
          textSize(30);
          text("YOU WIN!",20,150);
//          background('blue');

    }
      
    
}

function ellipseMeetsRectangle(x,y) {

  
  if (abs(x-(width - 20))<10 && (abs(y-mouseY)<racquet_height/2)) {
    return true;
  }
  else {
    return false;
  }
}


