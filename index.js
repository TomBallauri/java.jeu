import Player from "./Player.js";
import Enemy from "./Enemy.js";
import BulletController from "./BulletController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 600;

const bulletController = new BulletController(canvas);


const player = new Player(
  canvas.width / 2.2,
  canvas.height / 1.3,
  bulletController
);

let enemies = [];

// Charger l'image de fond
const backgroundImage = new Image();
backgroundImage.src = "../assets/satore.jpg"; // Remplacez par le chemin de votre image

// Fonction pour générer un ennemi aléatoire
function createRandomEnemy() {
  const x = Math.random() * (canvas.width - 50);
  const y = Math.random() * 50 - 50; 
  const colors = ["green", "red", "gold"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const health = Math.floor(Math.random() * 5) + 1; 
  return new Enemy(x, y, color, health, "../assets/satore.jpg");
}

function addEnemyPeriodically() {
  setInterval(() => {
    if (enemies.length < 5) { 
      enemies.push(createRandomEnemy());
    }
  }, 1500);
}



function collision(joueur,bot,index){
  if (
    Math.round(joueur.x) < Math.round(bot[index].x) + Math.round(bot[index].width) &&
    Math.round(joueur.x) + joueur.width > Math.round(bot[index].x) &&
    Math.round(joueur.y) < Math.round(bot[index].y) + bot[index].height &&
    Math.round(joueur.y) + joueur.height > Math.round(bot[index].y)) {
    return true;
    
      }else{      
    return false;
    }
}

function gameLoop() {
  setCommonStyle();
  
  // Dessiner l'image de fond
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  bulletController.draw(ctx);
  player.draw(ctx);
  player.keepInBounds(canvas.width, canvas.height);
  


  

  // Mettre à jour et dessiner les ennemis
  enemies.forEach((enemy, index) => {
    enemy.move(canvas.height, canvas.width);
    if (bulletController.collideWith(enemy)) {
      if (enemy.health <= 0) {
        enemies.splice(index, 1);
      }
    } else {
      enemy.draw(ctx);
    }

    collision(player,enemies,index)
    
    

  });

  // Supprimer les ennemis qui sortent de l'écran
  enemies = enemies.filter(enemy => enemy.y <= canvas.height);

}



function setCommonStyle() {
}

document.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase();
  const validKeys = ['z', 'q', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'];

  if (key === ' ') {
    event.preventDefault(); // Empêche le défilement de la page lorsque la barre d'espace est utilisée
    document.getElementById('space').style.backgroundColor = "yellow";
  } else if (validKeys.includes(key)) {
    event.preventDefault(); // Empêche le défilement de la page lors de l'utilisation des touches fléchées
    document.getElementById(key).style.backgroundColor = "yellow";
  }
});

document.addEventListener("keyup", function(event) {
  const key = event.key.toLowerCase();
  const validKeys = ['z', 'q', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'];

  if (key === ' ') {
    document.getElementById('space').style.backgroundColor = "black";
  } else if (validKeys.includes(key)) {
    document.getElementById(key).style.backgroundColor = "black";
  }
});

var timer;
var ele = document.getElementById('timer');

(function () {
    var sec = 0;
    timer = setInterval(() => {
        var minutes = Math.floor(sec / 60);
        var seconds = sec % 60;
        ele.innerHTML = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        sec++;
    }, 1000);
})();

setInterval(gameLoop, 1000 / 60);
addEnemyPeriodically();
console.log(enemies.x)
console.log(enemies.y)