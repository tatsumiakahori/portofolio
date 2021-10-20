void setup(){
  size(600, 400);
  background(0);
}

float x = 300;
float y = 200;
int r = 180;

void draw(){
fill(255, 10);
noStroke();
rect(0, 0, 600, 400);
x = x + random(-4, 4);
y = y + random(-4, 4);
noFill();
stroke(random(255), random(255), 255);
ellipse(x, y, r, r);
}
