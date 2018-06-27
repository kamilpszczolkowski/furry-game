var furryEx = require("./furry.js");
var coinEx = require("./coin.js");

function Game() {
    this.board = document.querySelectorAll("section#board div");
    this.furry = new furryEx();
    this.coin = new coinEx();
    this.score = 0;

    this.index = function (x, y) {
        return x + (y * 10);
    }

    this.showFurry = function () {
        this.hideVisibleFurry();
        var position = this.index(this.furry.x, this.furry.y);
        this.board[position].classList.add('furry');
    }

    this.showCoin = function () {
        var position = this.index(this.coin.x, this.coin.y);
        this.board[position].classList.add('coin');
    }

    this.startGame = function () {
        self = this;
        this.id = setInterval(function () {
            self.moveFurry();
        }, 250);
        return this.id;
    }

    this.moveFurry = function () {
        if (this.furry.direction === "right") {
            this.furry.x += 1;
        } else if (this.furry.direction === "left") {
            this.furry.x -= 1;
        } else if (this.furry.direction === "up") {
            this.furry.y -= 1;
        } else if (this.furry.direction === "down") {
            this.furry.y += 1;
        }
        var gameEnd = this.gameOver();
        if (gameEnd != true) {
            this.showFurry();
            this.checkCoinCollision();
        } else {
            var board = document.getElementById('board');
            board.innerHTML = 'Game Over, your score: ' + this.score;
            board.style.color = "red";
            board.style.fontSize = "40px";
        }
    }

    this.hideVisibleFurry = function () {
        var toRemove = document.querySelector('.furry');
        if (toRemove != null) {
            toRemove.classList.remove('furry');
        }
    }

    this.turnFurry = function (event) {
        if (event.which == 37) {
            this.furry.direction = "left";
        } else if (event.which == 39) {
            this.furry.direction = "right";
        } else if (event.which == 38) {
            this.furry.direction = "up";
        } else if (event.which == 40) {
            this.furry.direction = "down";
        }
    }

    this.checkCoinCollision = function () {
        if (this.furry.x == this.coin.x && this.furry.y == this.coin.y) {
            var coinToRemove = document.querySelector('.coin');
            if (coinToRemove != null) {
                coinToRemove.classList.remove('coin');
            }
            this.score += 1;
            document.querySelector("section#score div strong").innerHTML = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    }

    this.gameOver = function () {
        if (this.furry.x > 9 || this.furry.x < 0 || this.furry.y > 9 || this.furry.y < 0) {
            clearInterval(this.id);
            this.hideVisibleFurry();
            return true;
        }
    }
}

module.exports = Game;
