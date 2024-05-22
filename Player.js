export default class Player {
  constructor(x, y, bulletController) {
    this.x = x;
    this.y = y;
    this.bulletController = bulletController;
    this.width = 50;
    this.height = 50;
    this.speed = 4;

    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }

  draw(ctx) {
    this.move();
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.shoot();
  }

  shoot() {
    if (this.shootPressed) {
      const speed = 5;
      const delay = 7;
      const damage = 1;
      const bulletX = this.x + this.width / 2;
      const bulletY = this.y;
      this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
    }
  }
  
    move() {
      if (this.downPressed) {
        this.y += this.speed;
      }
      if (this.upPressed) {
        this.y -= this.speed;
      }
      if (this.leftPressed) {
        this.x -= this.speed;
      }
  
      if (this.rightPressed) {
        this.x += this.speed;
      }
    }
  
    keepInBounds(canvasWidth, canvasHeight) {
      if (this.x < 0) {
        this.x = 0;
      }
      if (this.x + this.width > canvasWidth) {
        this.x = canvasWidth - this.width;
      }
      if (this.y < 0) {
        this.y = 0;
      }
      if (this.y + this.height > canvasHeight) {
        this.y = canvasHeight - this.height;
      }
    }

    keydown = (e) => {
      if (e.code === "ArrowUp") {
        this.upPressed = true;
      }
      if (e.code === "ArrowDown") {
        this.downPressed = true;
      }
      if (e.code === "ArrowLeft") {
        this.leftPressed = true;
      }
      if (e.code === "ArrowRight") {
        this.rightPressed = true;
      }
      if (e.code === "Space") {
        this.shootPressed = true;
      }
      if (e.code === "KeyW") {
        this.upPressed = true;
      }
      if (e.code === "KeyS") {
        this.downPressed = true;
      }
      if (e.code === "KeyA") {
        this.leftPressed = true;
      }
      if (e.code === "KeyD") {
        this.rightPressed = true;
      }

    };
  
    keyup = (e) => {
      if (e.code === "ArrowUp") {
        this.upPressed = false;
      }
      if (e.code === "ArrowDown") {
        this.downPressed = false;
      }
      if (e.code === "ArrowLeft") {
        this.leftPressed = false;
      }
      if (e.code === "ArrowRight") {
        this.rightPressed = false;
      }
      if (e.code === "Space") {
        this.shootPressed = false;
      }
      if (e.code === "KeyW") {
        this.upPressed = false;
      }
      if (e.code === "KeyS") {
        this.downPressed = false;
      }
      if (e.code === "KeyA") {
        this.leftPressed = false;
      }
      if (e.code === "KeyD") {
        this.rightPressed = false;
      }
    };
  }

  

addEventListener("keyup", function(e){
    if (e.code == 'KeyD') vxr = 0;
    if (e.code == 'KeyA') vxl = 0;
    if (e.code == 'KeyW') vyu = 0;
    if (e.code == 'KeyS') vyd = 0;
    if (e.code == 'ArrowRight') vxr = 0;
    if (e.code == 'ArrowLeft') vxl = 0;
    if (e.code == 'ArrowUp') vyu = 0;
    if (e.code == 'ArrowDown') vyd = 0;
})