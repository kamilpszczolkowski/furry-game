var gameEx = require("./game.js");

var myGame = new gameEx();
myGame.showFurry();
myGame.showCoin();
myGame.startGame();

document.addEventListener('keydown', function () {
    myGame.turnFurry(event);
});