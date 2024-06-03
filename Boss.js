export default class Enemy {
    constructor(x, y, health, imageUrl) {
      this.x = x;
      this.y = y;
      this.health = health;
      this.width = 80;
      this.height = 80;
      this.speed = 2;
      this.image = new Image();
      this.image.src = imageUrl;  
    }
  
  
  
  
  
    draw(ctx) {
      ctx.fillStyle = this.image  
      if (this.health > 1) {
        ctx.strokeStyle = "white";
      } else {
        ctx.strokeStyle = this.imageUrl
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
  
  
  