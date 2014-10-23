 var snake;
 var snakeLength;
 var snakeSize;
 
 var food;
 
 var context;
 var screenHeight;
 var screenWidth;
 
 gameInitialize();
 snakeInitialize();
 foodInitialize();
  setInterval(gameLoop,1000/30);
  
 function gameInitialize(){
     var canvas = document.getElementById("game-screen");
     context=canvas.getContext("2d");
     screenWidth= window.innerWidth;
     screenHeight= window.innerHeight;
     canvas.width= screenWidth;
     canvas.height=screenHeight;
 }
function gameLoop(){
    gameDraw();
    snakeUpdate();
    snakeDraw();
    foodDraw();
}
function gameDraw(){
    context.fillStyle="rgb(134,36,235)";
    context.fillRect(0, 0, screenWidth, screenHeight);
    
    }
function snakeInitialize(){
    snake = [];
    snakeLength = 15;
    snakeSize = 20;
    for(var index = snakeLength - 1; index >= 0; index--){
        snake.push({
            x:index,
            y: 0
        });
    }
}
function snakeDraw(){
    for (var index = 0; index< snake.length; index++) {
        context.fillStyle = "black";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize); 
    }
}
function snakeUpdate(){
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;
    
    snakeHeadX++;
    var snakeTail= snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
}
function foodInitialize(){
    food = {
       x:0,
       y:0
    };
}
function foodDraw(){
    context.fillStyle="purple";
    context.fillRect(food.x, food.y, snakeSize, snakeSize);
}
function setFoodPostion(){
    var RandomX = Math.floor(Math.random() * screenWidth);
}