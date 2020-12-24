var gameState = 0;

var playerCount,database;

var player,game,form,car1,car2,car3,car4,cars;

var allPlayer,car1I,car2I,car3I,car4I,ground,track;

var distance=0;

function preload(){
   car1I = loadImage("images/car1.png");
   car2I = loadImage("images/car2.png");
   car3I = loadImage("images/car3.png");
   car4I = loadImage("images/car4.png");
   ground = loadImage("images/ground.png");
   track = loadImage("images/track.jpg")
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
    if(gameState===2){
        game.end();
    }
    drawSprites();
}


