// Create and fill the array that holds our pieces.
var board = [];
board.push(["R", "N", "B", "K", "Q", "B", "N", "R"]);
board.push(["P", "P", "P", "P", "P", "P", "P", "P"]);
board.push(["E", "E", "E", "E", "E", "E", "E", "E"]);
board.push(["E", "E", "E", "E", "E", "E", "E", "E"]);
board.push(["E", "E", "E", "E", "E", "E", "E", "E"]);
board.push(["E", "E", "E", "E", "E", "E", "E", "E"]);
board.push(["P", "P", "P", "P", "P", "P", "P", "P"]);
board.push(["R", "N", "B", "K", "Q", "B", "N", "R"]);

// Draw the initial board.
var boardElement = document.getElementById("chess-board");
var rows = "";
for (var x = 0; x < board.length; x++) {
	rows += '<div class="row">';
	
	for (var y = 0; y < board[x].length; y++) {
		var args = x + ", " + y;
		var mouseOver = 'onmouseover="checkSquare(this, ' + args + ')" ';
		var mouseOut = 'onmouseout="clearSquare(this, ' + args + ')" ';
		var click = 'onclick="clickSquare(this, ' + args + ')" ';
		var square = "<div " + mouseOver + mouseOut + click + ">";
		
		var piece = "";
		if (board[x][y] != "E")
			piece = '<i class="fas fa-chess-';
			
		
		switch (board[x][y]) {
			case "P": piece += "pawn"; break;
			case "R": piece += "rook"; break;
			case "N": piece += "knight"; break;
			case "B": piece += "bishop"; break;
			case "K": piece += "king"; break;
			case "Q": piece += "queen"; break;
		}
		
		if (piece.length > 0){
			var shade = "dark";
			if (x > 5)
				shade = "light";
			
			piece += ' ' + shade + '"></i>';
		}
		
		rows += square + piece + '</div>';
	}
	
	rows += "</div>";
}
boardElement.innerHTML = rows;

function checkSquare(e, x, y) {}
function clearSquare(e, x, y) {}
function clickSquare(e, x, y) {
	if (e)
		e.classList.toggle("waiting");
}
