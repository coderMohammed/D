var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount = 0;
var gameState = 0;
var allPlayers;

var track_img,car1_img,car2_img;
var car1,car2;
var cars = [];


function preload() {
  backgroundImage = loadImage("./assets/background.png");

  track_img = loadImage("./assets/track.jpg");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);

  //Check plrCnt  === 2 then updateState
  if(playerCount===2){
    game.updateState(1);
  }

  if(gameState === 1){
    game.play()
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
