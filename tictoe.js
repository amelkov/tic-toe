﻿// true - game with computer, 
// false - game with second player
var computer = true;
var msg = ["You are playing with computer. Click on this message to play two players game.",
		   "You are playing two players game. Click on this message to play with computer."];
var message = document.createElement("p");
document.body.appendChild(message);
message.innerHTML = (computer)?msg[0]:msg[1];
message.addEventListener('click', function(){changeGame()});

function changeGame(){
	computer = !computer;
	message.innerHTML = (computer)?msg[0]:msg[1];
}

var sqr = [];
sqr.length = 9;
var count = 0;

var container = document.createElement("div");
container.className = 'container';
container.id = 'container';
document.body.appendChild(container);

for(i=1;i<=9;i++){
	(function (i) {
		var cell = document.createElement("div");
		cell.className = 'cell';
		cell.id = 'cell'+i;
		document.getElementById("container").appendChild(cell);
		cell.addEventListener('click', function(){clickCell(i)});
	}(i));
}

// Place X or O in cell j 
function clickCell(j){
	if(sqr[j] == null){
		sqr[j] = (count % 2 == 0)?'X':'O';
		document.getElementById("cell"+j).innerHTML = "<p class = 'text'>"+sqr[j]+"</p>" || '';
		count++;
		check();
		if(computer){
			computerMove();
		}
	}
}

// If it's turn for O, then choose cell and make move
function computerMove(){
	if(count % 2 == 1){
		var move = calculateMove();
		clickCell(move);
	}
}

// Choosing cell to make move
function calculateMove(){
	var move;
	if((sqr[2] == sqr[3] && sqr[2] != null && sqr[1] == null) ||
	   (sqr[5] == sqr[9] && sqr[5] != null && sqr[1] == null) ||
	   (sqr[4] == sqr[7] && sqr[4] != null && sqr[1] == null)){
		move = 1;
	}else if((sqr[1] == sqr[3] && sqr[1] != null && sqr[2] == null) ||
	         (sqr[5] == sqr[8] && sqr[5] != null && sqr[2] == null)){
				move = 2;
	}else if((sqr[1] == sqr[2] && sqr[1] != null && sqr[3] == null) ||
	         (sqr[5] == sqr[7] && sqr[5] != null && sqr[3] == null) ||
	         (sqr[6] == sqr[9] && sqr[6] != null && sqr[3] == null)){
	        	move = 3;
	}else if((sqr[5] == sqr[6] && sqr[5] != null && sqr[4] == null) ||
	         (sqr[1] == sqr[7] && sqr[1] != null && sqr[4] == null)){
	        	move = 4;
	}else if((sqr[4] == sqr[6] && sqr[4] != null && sqr[5] == null) ||
	         (sqr[1] == sqr[9] && sqr[1] != null && sqr[5] == null) ||
	         (sqr[3] == sqr[7] && sqr[3] != null && sqr[5] == null) ||
	         (sqr[2] == sqr[8] && sqr[2] != null && sqr[5] == null)){
	        	move = 5;
	}else if((sqr[4] == sqr[5] && sqr[4] != null && sqr[6] == null) ||
	         (sqr[3] == sqr[9] && sqr[3] != null && sqr[6] == null)){
	        	move = 6;
	}else if((sqr[8] == sqr[9] && sqr[8] != null && sqr[7] == null) ||
	         (sqr[3] == sqr[5] && sqr[3] != null && sqr[7] == null) ||
	         (sqr[1] == sqr[4] && sqr[1] != null && sqr[7] == null)){
	        	move = 7;
	}else if((sqr[7] == sqr[9] && sqr[7] != null && sqr[8] == null) ||
	         (sqr[2] == sqr[5] && sqr[2] != null && sqr[8] == null)){
	        	move = 8;
	}else if((sqr[7] == sqr[8] && sqr[7] != null && sqr[9] == null) ||
	         (sqr[1] == sqr[5] && sqr[1] != null && sqr[9] == null) ||
	         (sqr[3] == sqr[6] && sqr[3] != null && sqr[9] == null)){
	        	move = 9;
	}else if(sqr[5] == null){
		move = 5;
	}else if(sqr[1] == null){
		move = 1;
	}else if(sqr[9] == null){
		move = 9;
	}else if(sqr[3] == null){
		move = 3;
	}else if(sqr[7] == null){
		move = 7;
	}else if(sqr[2] == null){
		move = 2;
	}else if(sqr[4] == null){
		move = 4;
	}else if(sqr[6] == null){
		move = 6;
	}else if(sqr[8] == null){
		move = 8;
	}
	return move;
}

// Checking the winner and reset game if it is.
function check(){

	if((sqr[1] == sqr[2] && sqr[1] == sqr[3] && sqr[1] != null) || 
	   (sqr[4] == sqr[5] && sqr[4] == sqr[6] && sqr[4] != null) ||
	   (sqr[7] == sqr[8] && sqr[7] == sqr[9] && sqr[7] != null) ||
	   (sqr[1] == sqr[4] && sqr[1] == sqr[7] && sqr[1] != null) ||
	   (sqr[2] == sqr[5] && sqr[2] == sqr[8] && sqr[2] != null) ||
	   (sqr[3] == sqr[6] && sqr[3] == sqr[9] && sqr[3] != null) ||
	   (sqr[1] == sqr[5] && sqr[1] == sqr[9] && sqr[1] != null) ||
	   (sqr[3] == sqr[5] && sqr[3] == sqr[7] && sqr[3] != null)){
		alert("Winner is "+((count % 2 == 1)?'X':'O'));
		reset();
	}
	drawCheck();
}

// Checking draw in the game
function drawCheck(){
  if(count == 9){
    alert("Draw") ;
	reset();
  }
}

// Reset the game
function reset(){
  for(i=1;i<=9;i++){
	sqr[i] = null;
	document.getElementById("cell"+i).innerHTML = '';
  }
  count = 0;
}