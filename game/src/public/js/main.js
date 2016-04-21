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
var goal1 = 1;
var goal2 = 1;

var player1 = {
	img: document.getElementById("player1"),
	x:500,
	y:200,
	speed: 15,	
	height: 100,
	width:100			
};

var player2 = {
	img:document.getElementById("player2"),
	x:200,
	y:200,
	speed: 5,
	height: 100,
	width: 100
	};

var direction = {
rightPressed:false,
leftPressed: false,
upPressed: false,
downPressed: false,
dPressed: false,
aPressed: false,
wPressed: false,
sPressed: false
};


var player1X = 200;
var player1Y = 200;
var player2X = 500;
var player2Y = 200;
var newArr = [];
var field;

function drawBorder(){
	var framesPerSecond = 30;
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	field = document.getElementById("field");
	canvasContext.drawImage(field, canvas.width, canvas.height);
	canvasContext
	setInterval(function (){
		moveEverythig();
		drawEverything();
		multipleCommands();
		//movement of players
		document.addEventListener("keydown", keyDownHandler, false);
		document.addEventListener("keydown", keyUpHandler, false);
		document.addEventListener("keydown", keyDownHandler2, false);
		document.addEventListener("keydown", keyUpHandler2, false);
		
		// bounceOffPlayers();
	}, 1000/framesPerSecond);

  	

}


//Checks to see if arrow keys are pressed for player 1

function keyDownHandler(e) {
   if(e.keyCode == 39) {
       rightPressed = true;
       if (player1.x < canvas.width -100){
       	player1.x +=25;
       	drawEverything();
	}
   }
   else if(e.keyCode == 37) {
       leftPressed = true;
       if (player1.x > 0 )
       	player1.x -=25;
   }
   else if(e.keyCode == 38) {
       upPressed = true;
       if(player1.y > 0){
	   player1.y -= 25;}
   }
   else if(e.keyCode == 40) {
       downPressed = true;
       if(player1.y < canvas.height-100)
	  { player1.y += 25;
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
       	player2.x +=25;
   }
   else if(e.keyCode == 65) {
       aPressed = true;
       if (player2.x > 0 )
       	player2.x -=25;
   }
   else if(e.keyCode == 87) {
       wPressed = true;
       if(player2.y > 0){
	   player2.y -= 25;}
   }
   else if(e.keyCode == 83) {
       sPressed = true;
       if(player2.y < canvas.height-100)
	  { player2.y += 25;
   }
}
}

//Checks to see if arrow keys are released for player 2
function keyUpHandler2(e) {
   if(e.keyCode == 68) {
       dPressed = false;
   }
   else if(e.keyCode == 65) {
       aPressed = false;
   }
   else if(e.keyCode == 87) {
       wPressed = false;
   }
   else if(e.keyCode == 83) {
       sPressed = false;
   }
}


function multipleCommands(obj){
	for(var i=0; i<direction.length; i++){
			return direction[i];
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
			$('#goal1').html("P1: "+goal1++)
			ballReset();
		}

		else if ((ballX <39) && (ballY > 191 & ballY < 311)){
			$('#goal2').html("P2: "+goal2++)
			ballReset();
		}

		// else if((ballX > player1.x && ballX < player1.x + 100) && (ballY < player1.y + 100 && ballY > player1.y)){
		// 	ballSpeedX = -ballSpeedX;

		else if(((ballY === player1.y) && (ballX >= player1.x )&& (ballX <= player1.x + 100)) || ((ballY === player1.y + 100) && (ballX >= player1.x) && (ballX <= player1.x + 100))){
			ballSpeedX = -ballSpeedX;
		}

		else if (((ballX === player1.x) && ((ballY >= player1.y) && (ballY <= player1.y + 100))) || ((ballX === player1.x + 100) && ((ballY >= player1.y) && (ballY <= player1.y + 100)))){
						ballSpeedY = -ballSpeedY;}


		else if(((ballY === player2.y) && (ballX >= player2.x )&& (ballX <= player2.x + 100)) || ((ballY === player2.y + 100) && (ballX >= player2.x) && (ballX <= player2.x + 100))){
			ballSpeedX = -ballSpeedX;
		}

		else if (((ballX === player2.x) && ((ballY >= player2.y) && (ballY <= player2.y + 100))) || ((ballX === player2.x + 100) && ((ballY >= player2.y) && (ballY <= player2.y + 100)))){
						ballSpeedY = -ballSpeedY;}

		// else if (!((player1.x > ballX + 100) || (player1.x + player1.width < ballX))){
		// 	ballSpeedX = -ballSpeedX;
		// }

		// else if (!((player1.y > ballY + 10) || (player1.y + player1.height < ballY))){
		// 	ballSpeedY = ballSpeedY;
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


//function that makes the ball ball circle
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