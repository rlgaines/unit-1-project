// add scripts

$(document).on('ready', function() {
 	console.log('sanity check!');
	drawBorder();


}); 
var canvas;
var canvasContext;
var ballX= 400;
var ballY = 400;
var oldBallX = 400;
var oldBallY = 400;
var ballSpeedX = 5;
var ballSpeedY = 4;
var player1 = {
	img: document.getElementById("player1"),
	x:500,
	y:200,
	speed: 15				
};

var player2 = {
	img:document.getElementById("player2"),
	x:200,
	y:200,
	speed: 5
	};
var rightPressed =false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var dPressed =false;
var aPressed = false;
var wPressed = false;
var sPressed = false;
var player1X = 200;
var player1Y = 200;
var player2X = 500;
var player2Y = 200;
var newArr = [];
var field;
// var player1 = document.getElementById("player1");
// var player2 = document.getElementById("player2");
// var player1 = 

function drawBorder(){
	var framesPerSecond = 30;
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	field = document.getElementById("field");
	canvasContext.drawImage(field, canvas.width, canvas.height);
	console.log(canvasContext)
	setInterval(function (){
		moveEverythig();
		drawEverything();
		
		document.addEventListener("keydown", keyDownHandler, false);
		document.addEventListener("keydown", keyUpHandler, false);
		document.addEventListener("keydown", keyDownHandler2, false);
		document.addEventListener("keydown", keyUpHandler2, false);
		// bounceOffPlayers();
	}, 1000/framesPerSecond);

  	

}


//movement of players

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keydown", keyUpHandler, false);

//Checks to see if arrow keys are pressed for player 1

function keyDownHandler(e) {
   if(e.keyCode == 39) {
       rightPressed = true;
       if (player1.x < canvas.width -100)
       	player1.x +=15;
   }
   else if(e.keyCode == 37) {
       leftPressed = true;
       if (player1.x > 0 )
       	player1.x -=15;
   }
   else if(e.keyCode == 38) {
       upPressed = true;
       if(player1.y > 0){
	   player1.y -= 15;}
   }
   else if(e.keyCode == 40) {
       downPressed = true;
       if(player1.y < canvas.height-100)
	  { player1.y += 15;
   }
}
}

//Checks to see if arrow keys are released for player 1
function keyUpHandler(e) {
   if(e.keyCode == 39) {
       rightPressed = false;
   }
   else if(e.keyCode == 37) {
       leftPressed = false;
   }
   else if(e.keyCode == 38) {
       upPressed = false;
   }
   else if(e.keyCode == 40) {
       downPressed = false;
   }
}

//Checks to see if arrow keys are pressed for player 2

function keyDownHandler2(e) {
   if(e.keyCode == 68) {
       dPressed = true;
       if (player2.x < canvas.width -100)
       	player2.x +=15;
   }
   else if(e.keyCode == 65) {
       aPressed = true;
       if (player2.x > 0 )
       	player2.x -=15;
   }
   else if(e.keyCode == 87) {
       wPressed = true;
       if(player2.y > 0){
	   player2.y -= 15;}
   }
   else if(e.keyCode == 83) {
       sPressed = true;
       if(player2.y < canvas.height-100)
	  { player2.y += 15;
   }
}
}

//Checks to see if arrow keys are released for player 2
function keyUpHandler2(e) {
   if(e.keyCode == 39) {
       rightPressed = false;
   }
   else if(e.keyCode == 37) {
       leftPressed = false;
   }
   else if(e.keyCode == 38) {
       upPressed = false;
   }
   else if(e.keyCode == 40) {
       downPressed = false;
   }
}


//bouncing ball off image

// function bounceOffPlayers(){
// 	if(ballX === player1.height){
// 		ballSpeedX = -ballSpeedX;
// 	}
// 	else if(ballX === player1.width){
// 		ballSpeedX = -ballSpeedX;
// 	}
// }
//ball reset

function ballReset(){
	ballX = canvas.width/2;
	ballY = canvas.height/2;
}

//determines the boundries of the ball bouncing
function moveEverythig(){
		oldBallX = ballX;
		ballX = ballX + ballSpeedX;
		if((ballX > 758) && (ballY < 191 || ballY > 311)) {
			ballSpeedX = -ballSpeedX;
		}
		// else{ ballReset();}
		else if((ballX < 39) && (ballY < 191 || ballY > 311)){
			ballSpeedX = -ballSpeedX;
		}
		oldBallY = ballY;
		ballY = ballY + ballSpeedY;
		if(ballY > canvas.height - 39){
			ballSpeedY = -ballSpeedY;
		}
		else if(ballY < 39){
			ballSpeedY = -ballSpeedY;

		}

		else if((ballX > 758)&&(ballY > 191 && ballY < 311)){
			ballReset();
		}

		else if ((ballX <39) && (ballY > 191 & ballY < 311)){
			ballReset();
		}

		// else if((ballX > 200 && ballX < 300) && (ballY < 300 && ballY > 200)){
		// 	ballSpeedX = -ballSpeedX;
		// 	// ballSpeedY = -ballSpeedY;

		// }

		// else if((ballX > 500 && ballX < 600) && (ballY < 300 && ballY > 200)){
		// 	ballSpeedX = -ballSpeedX;

		// }
		

}

//creates the color and style of everything
function drawEverything(){
	//colorRect(0,0,canvas.width,canvas.height, 'green');
	
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	colorRect(0,191,25,120, 'white');
	colorRect(770,191,50,120,'white');	
	colorCircle(ballX, ballY, 10, 'white')
	drawPlayer1();
}
	





// function playerLocationX(){
    
// }


// function playerProfile(){
// 	player1 = player1 || [document.getElementById("player1"), player1X, player1Y];
// 	canvasContext.drawImage(player1[0], player1[1], player1[2])
// 	player2 = player2 || document.getElementById("player2");
// 	canvasContext.drawImage(player2, player2X, player2Y)
// }

function drawPlayer1(){
	canvasContext.drawImage(player1.img, player1.x, player1.y)
	canvasContext.drawImage(player2.img, player2.x, player2.y)

}


//function that makes the ball a circle
function colorCircle(centerX, centerY, radius, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);

	canvasContext.fill();
}


//color and placement function for style
function colorRect(leftX, topY, width, height, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height);

}