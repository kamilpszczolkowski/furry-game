# furry-game
Small game focused on object oriented programming. If you want to directly run the application, click
on the link below.

https://kamilpszczolkowski.github.io/furry-game/

# Introduction

Game is very simple: object (Furry) moves towards the board - user needs to direct him in the way which won't let
him hit the end of the board. User needs to collect coins - every coin give one point. When furry hits one of four walls,
game ends and the result is printed on the screen.

# Purpose and technology

I created the game to practice object oriented programming. I managed to script few objects:
*   coin - the thing user has to collect in order to get points,
*   furry - main character which moves across board,
*   game - whole algorithm which starts and maintains the game.

Every object is in another js file. I used module.exports, ten require functions to import objects. I used
webpack to genrate out.js file, which is connected to the project in index.html.
