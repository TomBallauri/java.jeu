export default class Enemy {
  constructor(x, y, color, health, imageUrl) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.health = health;
    this.width = 50;
    this.height = 50;
    this.speed = 1.5;
    this.image = new Image();
    this.image.src = imageUrl;
  }

  draw(ctx) { 
    // Dessiner l'image de l'ennemi
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  

    // Afficher la santé de l'ennemi
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
