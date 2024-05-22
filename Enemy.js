export default class Enemy {
  constructor(x, y, color,health) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.health = health;
    this.width = 50;
    this.height = 50;
    this.speed = 1.5;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    if (this.health > 1) {
      ctx.strokeStyle = "white";
    } else {
      ctx.strokeStyle = this.color;
      ctx.strokeStyle = this.image;
    }
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.font = "25px Arial";
    ctx.fillText(
      this.health,
      this.x + this.width / 3.5,
      this.y + this.height / 1.5
    );
  }

  takeDamage(damage) {
    this.health -= damage;
  }

  move(canvasHeight, canvasWidth) {
    this.y += this.speed;
    if (this.y > canvasHeight) {
      this.y = -this.height;
      this.x = Math.random() * (canvasWidth - this.width);
    }
    }
      
  }


