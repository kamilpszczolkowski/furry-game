!function(r){var t={};function i(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=r,i.c=t,i.d=function(r,t,e){i.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},i.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,t){if(1&t&&(r=i(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var n in r)i.d(e,n,function(t){return r[t]}.bind(null,n));return e},i.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return i.d(t,"a",t),t},i.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},i.p="",i(i.s=0)}([function(r,t){function i(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}var e=new function(){this.board=document.querySelectorAll("section#board div"),this.furry=new function(){this.x=0,this.y=0,this.direction="right"},this.coin=new i,this.score=0,this.index=function(r,t){return r+10*t},this.showFurry=function(){this.hideVisibleFurry();var r=this.index(this.furry.x,this.furry.y);this.board[r].classList.add("furry")},this.showCoin=function(){var r=this.index(this.coin.x,this.coin.y);this.board[r].classList.add("coin")},this.startGame=function(){return self=this,this.id=setInterval(function(){self.moveFurry()},250),this.id},this.moveFurry=function(){if("right"===this.furry.direction?this.furry.x+=1:"left"===this.furry.direction?this.furry.x-=1:"up"===this.furry.direction?this.furry.y-=1:"down"===this.furry.direction&&(this.furry.y+=1),1!=this.gameOver())this.showFurry(),this.checkCoinCollision();else{var r=document.getElementById("board");r.innerHTML="Game Over, your score: "+this.score,r.style.color="red",r.style.fontSize="40px"}},this.hideVisibleFurry=function(){var r=document.querySelector(".furry");null!=r&&r.classList.remove("furry")},this.turnFurry=function(r){37==r.which?this.furry.direction="left":39==r.which?this.furry.direction="right":38==r.which?this.furry.direction="up":40==r.which&&(this.furry.direction="down")},this.checkCoinCollision=function(){if(this.furry.x==this.coin.x&&this.furry.y==this.coin.y){var r=document.querySelector(".coin");null!=r&&r.classList.remove("coin"),this.score+=1,document.querySelector("section#score div strong").innerHTML=this.score,this.coin=new i,this.showCoin()}},this.gameOver=function(){if(this.furry.x>9||this.furry.x<0||this.furry.y>9||this.furry.y<0)return clearInterval(this.id),this.hideVisibleFurry(),!0}};e.showFurry(),e.showCoin(),e.startGame(),document.addEventListener("keydown",function(){e.turnFurry(event)})}]);