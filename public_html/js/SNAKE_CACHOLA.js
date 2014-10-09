 var snake;
 
 
 var context;
 var screenHeight;
 var screenWidth;
 
 function gameInitalize(){
     var canvas = document.getElementById("game-screen");
     context=canvas.getContext("2d");
     screenWidth= window.innerWidth;
     screenHeight= window.innerHeight;
     canvas.width= screenWidth;
     canvas.height=screenHeight;
 }
function gameLoop(){
    
}
function gameDraw(){
    context.fillStyle="rgb(134,36,235)";
    context.fillRect();
}
