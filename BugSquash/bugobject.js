function Ant (x, y, img, direction) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.frame = 0;
    this.moving = moving;
    this.direction = direction;
    this.dead = 0;
    this.a = 255;
    this.display = function () {
        imageMode(CENTER);
        tint(255, this.a);
        if(this.dead == 0){
        if(int(direction) == 1){
        image(this.img[this.frame], this.x, this.y, 30, 30);
      }
      if(int(direction) == 0){
        push();
        scale(1.0, -1.0);
        translate(0, 0);
        image(this.img[this.frame], this.x, -this.y, 30, 30);
        pop();
    }
  } else if (this.dead == 1) {
    if(int(direction) == 1){
    image(this.img[4], this.x, this.y, 30, 30);
  } else if (this.dead == 2) {

  }
  if(int(direction) == 0){
    push();
    scale(1.0, -1.0);
    translate(0, 0);
    image(this.img[4], this.x, -this.y, 30, 30);
    pop();
}
  }
}
this.moving = function () {
    imageMode(CENTER);
    if(this.dead == 0){
    this.frame ++;
    if(this.frame > 3){
      this.frame = 0;
      this.frame++;
    }
    if(int(direction) == 1){
  this.y -= speed;
  if(this.y < 0){
    this.x = random(0, 640);
    this.y = 400;
  }
  }
  if(int(direction) == 0){
this.y += speed;
if(this.y > 400){
  this.x = random(0, 640);
  this.y = 0;
}
}
} else if (this.dead == 1) {
this.a -= 1;
if(this.a < 100){
  this.x = 1000;
  this.y = 1000;
}
}
}
this.clicked = function () {
    imageMode(CENTER);
    if(level == 1){
    var distance = dist(mouseX, mouseY, this.x, this.y);
    if(distance < 20){
    this.dead = 1;
    if(this.dead == 1){
    score += 5;
    }
  }
    }
  }
}
