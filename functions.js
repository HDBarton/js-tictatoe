// Try to have as little global code as possible
// TODO:
// Find a replacement for alert functionality, per AirBnB styleguide
// OPTIONAL: Keep game from starting until names have been entered

// TODO: need to make sure button remains if required content isn't filled in
function closePlayerForm() {
  document.getElementById('add-players-form').style.display = 'none';
}

/// ONCLICK FUNCTIONALITIES///////////////////
// Form closing listener
const onClose = document.getElementById('close-form');
onClose.onclick = function () {
  DisplayController.addPlayer1();
  DisplayController.addPlayer2();
  thisGameBoard.clearBoard();
  closePlayerForm();
};

// Board listerners for each square on gameboard
const square0 = document.getElementById('square0');
square0.onclick = function() {thisGameActions.placePiece('square0'); };
const square1 = document.getElementById('square1');
square1.onclick = function() {thisGameActions.placePiece('square1'); };
const square2 = document.getElementById('square2');
square2.onclick = function() {thisGameActions.placePiece('square2'); };
const square3 = document.getElementById('square3');
square3.onclick = function() {thisGameActions.placePiece('square3'); };
const square4 = document.getElementById('square4');
square4.onclick = function() {thisGameActions.placePiece('square4'); };
const square5 = document.getElementById('square5');
square5.onclick = function() {thisGameActions.placePiece('square5'); };
const square6 = document.getElementById('square6');
square6.onclick = function() {thisGameActions.placePiece('square6'); };
const square7 = document.getElementById('square7');
square7.onclick = function() {thisGameActions.placePiece('square7'); };
const square8 = document.getElementById('square8');
square8.onclick = function() {thisGameActions.placePiece('square8'); };

// Helper functions for form called from HTML

function openPlayerForm() {
  document.getElementById('add-players-form').style.display = 'block';
  document.getElementById('form').reset();
  DisplayController.clearBoardDisplay();
  DisplayController.clearPlayers();
  DisplayController.clearWinners();
}
const openPlayerFormButton = document.getElementById('open-form');
openPlayerFormButton.onclick = function() { openPlayerForm(); };

// Reset Button Functionality called from HTML
const resetButton = document.getElementById('reset-board-button');
resetButton.onclick = function() {
  DisplayController.clearBoardDisplay();
  thisGameBoard.clearBoard();
  DisplayController.clearWinners();
};

/// GAMEBOARD FUNCTIONALITY///////////////////////////////////
// Logic and  move-checking for gameboard usage, then stored into an array
// Win logic to check for 3-in-a-row vertically, horizontally, and diagonally. 
// If all spaces are full and there is no winner, includes logic for a draw
const Gameboard = () =>{
  let board = [['', '', ''], ['', '', ''], ['', '', '']];
  let moveMade = true;
  const getRow = (square) => {
    let row = 3;
    if (square > -1 && square < 3) {
      row = 0;
    } else if (square > 2 && square < 6) {
      row = 1;
    } else {
      row = 2;
    }
    return row;
  };
  const addMove = (square, playerPiece) => {
    const row = getRow(square);
    let thisSquare = square;
    if (row === 1) {
      thisSquare -= 3;
    } else if (row === 2) {
      thisSquare -= 6;
    }
    if (board[row][thisSquare] === 'X' || board[row][thisSquare] === 'O') {
      alert('This move has already been played!');
      moveMade = false;
    } else {
      board[row][thisSquare] = playerPiece;
      console.log(`Added: ${board[row][thisSquare]} to ${board[row]}`);
      moveMade = true;
    }
  };
  const getMoveMade = () => moveMade;
  const checkForWin_X = () => {
    let win = false;
    for (let row = 0; row < 3; row++) {
      if (board[row][0] === 'X' && board[row][1] === 'X' && board[row][2] === 'X') {
        win = true;
      }
    }
    if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
      win = true;
    }
    if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') {
      win = true;
    }
    if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
      win = true;
    }
    if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
      win = true;
    }
    if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
      win = true;
    }
    return win;
  };
  const checkForWin_O = () => {
    let win = false;
    for (let row = 0; row < 3; row++) {
      if (board[row][0] === 'O' && board[row][1] === 'O' && board[row][2] === 'O') {
        win = true;
      }
    }
    if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') {
      win = true;
    }
    if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') {
      win = true;
    }
    if (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') {
      win = true;
    }
    if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
      win = true;
    }
    if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
      win = true;
    }
    return win;
  };
  const checkForDraw = () => {
    let draw = true;
    for (let row = 0; row < 3; row++) {
      if (board[row][0] === '' || board[row][1] === '' || board[row][2] === '') {
        draw = false;
      }
    }
    return draw;
  };
  const clearBoard = () => {
    board = [['', '', ''], ['', '', ''], ['', '', '']];
  };
  const printBoard = () => {
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
  };
  return {
    addMove,
    getMoveMade,
    checkForWin_X,
    checkForWin_O,
    checkForDraw,
    clearBoard,
    printBoard,
  };
};

// Player actions: functionality for a player adding a piece to the game board
const GameActions = () => {
  let turn = 'O';
  const changePlayer = () => {
    if (turn === 'O') {
      turn = 'X';
    } else {
      turn = 'O';
    }
  };
  const currentPlayer = () => turn;
  // Places piece, checks if gameboard slot alreayd full, adds to gameboard array, checks for a win
  const placePiece = (squareID) => {
    const squareString = String(squareID);
    const squareNum = parseInt(squareString.slice(6, 7), 10);
    changePlayer();
    const playerPiece = currentPlayer();
    thisGameBoard.addMove(squareNum, playerPiece);
    if (thisGameBoard.getMoveMade()) {
      const text = document.createTextNode(playerPiece);
      document.getElementById(squareID).appendChild(text);
      console.log(thisGameBoard.checkForWin_X(), thisGameBoard.checkForWin_O());
      console.log(thisGameBoard.printBoard());
      // check for a win
      if (thisGameBoard.checkForWin_X()) {
        const XWinnerText = `Winner: ${DisplayController.getPlayer1Name()} (${turn})!`;
        const textNode = document.createTextNode(XWinnerText);
        document.getElementById('winnerSection').appendChild(textNode);
      } else if (thisGameBoard.checkForWin_O()) {
        const OWinnerText = `Winner: ${DisplayController.getPlayer2Name()} (${turn})!`;
        const textNode = document.createTextNode(OWinnerText);
        document.getElementById('winnerSection').appendChild(textNode);
      } else if (thisGameBoard.checkForDraw()) {
        const drawText = `Draw: ${DisplayController.getPlayer1Name()} (X) and ${DisplayController.getPlayer2Name()} (Y) both lose!`;
        const textNode = document.createTextNode(drawText);
        document.getElementById('winnerSection').appendChild(textNode);
      }
    }
  };

  return { changePlayer, currentPlayer, placePiece };
};

/// GAME DISPLAY////////////////////////////////////
// renders gameboard and display actions to webpage
const DisplayController = (() => {
  let currentPlayer1 = '';
  let currentPlayer2 = '';
  const form = document.getElementById('form');
  const addPlayer1 = () => {
    const player1Section = document.getElementById('player1box');
    const player1element = form.elements['player1'];
    const player1name = String(player1element.value);
    const player1 = document.createTextNode(player1name);
    player1Section.appendChild(player1);
    console.log(player1name);
    currentPlayer1 = player1name;
  };
  const addPlayer2 = () => {
    const player2Section = document.getElementById('player2box');
    const player2element = form.elements['player2'];
    const player2name = String(player2element.value);
    const player2 = document.createTextNode(player2name);
    player2Section.appendChild(player2);
    console.log(player2name);
    currentPlayer2 = player2name;
  };
  const getPlayer1Name = () => currentPlayer1;
  const getPlayer2Name = () => currentPlayer2;
  const clearBoardDisplay = () => {
    const elementID = 'square';
    for (let i = 0; i < 9; i++) {
      const thisID = elementID + String(i);
      const squareLocation = document.getElementById(thisID);
      if (squareLocation.hasChildNodes()) {
        squareLocation.removeChild(squareLocation.firstChild);
      }
    }
  };
  const clearPlayers = () => {
    currentPlayer1 = '';
    currentPlayer2 = '';
    const player1Section = document.getElementById('player1box');
    player1Section.removeChild(player1Section.firstChild);
    const player2Section = document.getElementById('player2box');
    player2Section.removeChild(player2Section.firstChild);
  };
  const clearWinners = () => {
    const winnerSection = document.getElementById('winnerSection');
    winnerSection.removeChild(winnerSection.firstChild);
  };

  return {
    addPlayer1,
    addPlayer2,
    getPlayer1Name,
    getPlayer2Name,
    clearBoardDisplay,
    clearPlayers,
    clearWinners,
  };
})();

const thisGameActions = GameActions();
const thisGameBoard = Gameboard();

// Optional work for later: create an AI so that a player can play against the computer
