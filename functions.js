// Try to have as little global code as possible
// TODO:
// 5.) Create a function to clear the board, winner section, and player names when new playername form is opened
// 6.) Add a button for another round under the gameboard which clears the board and winner section but not player names
// 7.) Add a button at the bottom for Clear All which also clears player names
// 8.) OPTIONAL: Keep game from starting until names have been entered

////////////////////ONCLICK FUNCTIONALITIES (can't seem to be used from within Factory or Module Functions)///////////////////
//let turn = "X";
const onClose = document.getElementById("close-form");
onClose.onclick = function() {DisplayController.addPlayer1(), DisplayController.addPlayer2(), closePlayerForm()};
//Board listerners for each square on gameboard
const square0 = document.getElementById("square0");
square0.onclick = function() {placePiece("square0")};
const square1 = document.getElementById("square1");
square1.onclick = function() {placePiece("square1")};
const square2 = document.getElementById("square2");
square2.onclick = function() {placePiece("square2")};
const square3 = document.getElementById("square3");
square3.onclick = function() {placePiece("square3")};
const square4 = document.getElementById("square4");
square4.onclick = function() {placePiece("square4")};
const square5 = document.getElementById("square5");
square5.onclick = function() {placePiece("square5")};
const square6 = document.getElementById("square6");
square6.onclick = function() {placePiece("square6")};
const square7 = document.getElementById("square7");
square7.onclick = function() {placePiece("square7")};
const square8 = document.getElementById("square8");
square8.onclick = function() {placePiece("square8")};

/////////////////TESTING FUNCTIONALITY////////////////////////////////////////////////
const testArea = document.getElementById("test-button");
testArea.onclick = function() {showMe()};


// helper functions
function openPlayerForm() {
  document.getElementById("add-players-form").style.display = "block";
  DisplayController.clearBoardDisplay();
  DisplayController.clearPlayers();
  thisGameBoard.clearBoard();
}
// TODO: need to make sure button remains if required content isn't filled in
function closePlayerForm(){
    document.getElementById("add-players-form").style.display = "none";
}
//Places piece, checks if gameboard slot alreayd full, adds to gameboard array, checks for a win
//Need to freeze or reset the board after a win
function placePiece(squareID) {
    let squareString = String(squareID);
    let squareNum = parseInt(squareString.slice(6, 7));
    thisGameActions.changePlayer();
    let playerPiece = thisGameActions.currentPlayer();
    thisGameBoard.addMove(squareNum, playerPiece);
    if (thisGameBoard.getMoveMade()) {
        text = document.createTextNode(playerPiece);
        document.getElementById(squareID).appendChild(text);
        console.log(thisGameBoard.checkForWin_X(), thisGameBoard.checkForWin_O());
        console.log(thisGameBoard.printBoard());
        //check for a win
        if (thisGameBoard.checkForWin_X()) {
            XWinnerText = `Winner: ${DisplayController.getPlayer1Name()}!`;
            textNode = document.createTextNode(XWinnerText);
            document.getElementById("winnerSection").appendChild(textNode);
        } else if (thisGameBoard.checkForWin_O()){
            XWinnerText = `Winner: ${DisplayController.getPlayer2Name()}!`;
            textNode = document.createTextNode(XWinnerText);
            document.getElementById("winnerSection").appendChild(textNode);
        }
    };
};
/////////////////////////////GAMEBOARD FUNCTIONALITY///////////////////////////////////
// Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.
// MODULE
// X = 1, Y = 2
const Gameboard = () =>{
    let board = [["", "", ""], ["", "", ""], ["", "", ""]];
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
        row = getRow(square);
        index = 0;
        if (row ==1) {
            square = square - 3;
        } else if (row == 2) {
            square = square -6;
        }
        if (board[row][square] == "X" || board[row][square] == "O"){
            alert("This move has already been played!");
            moveMade = false;
        } else {
            board[row][square] = playerPiece;
            console.log(`Added: ${board[row][square]} to ${board[row]}`);
            moveMade = true;
        }
    };
    const getMoveMade = () => moveMade;
    const checkForWin_X = () => {
        let win = false;
        for (let row = 0; row < 3; row++)  {
            if (board[row][0] == "X" && board[row][1] == "X" && board[row][2] == "X") {
                win = true;
            } 
        }
        if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") {
            win = true;
        } 
        if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") {
            win = true;
        }
        if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") {
            win = true;
        } 
        if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") {
            win = true;
        }
        if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
            win = true;
        }
        return win;
    };
    const checkForWin_O = () => {
        let win = false;
        for (let row = 0; row < 3; row++) {
            if (board[row][0] =="O" && board[row][1] == "O" && board[row][2] == "O") {
                win = true;
            }
        }
        if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") {
            win = true;
        }
        if (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") {
            win = true;
        }
        if (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") {
            win = true;
        }
        if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") {
            win = true;
        }
        if (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") {
            win = true;
        }
        return win;
    };
    const clearBoard = () => {
        board = [["", "", ""], ["", "", ""], ["", "", ""]];
    };
    const printBoard = (player) => {
        console.log(board[0]);
        console.log(board[1]);
        console.log(board[2]);
    };
    return {addMove, getMoveMade, checkForWin_X, checkForWin_O, printBoard, clearBoard};
};
////////////////////////START GAMEBOARD//////////////////////////////
const thisGameBoard = Gameboard();

const GameActions = () => {
    let turn = "O";
    const changePlayer = () => {
        if (turn == "O") {
            turn = "X";
        } else {
            turn = "O";
        }
    };
    const currentPlayer = () => turn;

    return {changePlayer, currentPlayer};
}
////////////////////START GAME ACTIONS////////////////////////////////////
const thisGameActions = GameActions();

// renders gameboard array to webpage
// SUGGESTED MODULE

//get and display player names
const DisplayController = (() => {
    let currentPlayer1 = "";
    let currentPlayer2 = "";
    const form = document.getElementById("form");
    const addPlayer1 = () => {
        const player1Section = document.getElementById('player1box');
        let player1element = form.elements["player1"];
        let player1name = String(player1element.value);
        let player1 = document.createTextNode(player1name);
        player1Section.appendChild(player1);
        console.log(player1name);
        currentPlayer1 = player1name;
    };
    const addPlayer2 = () => {
        const player2Section = document.getElementById('player2box');
        let player2element = form.elements["player2"];
        let player2name = String(player2element.value);
        let player2 = document.createTextNode(player2name);
        player2Section.appendChild(player2);
        console.log(player2name);
        currentPlayer2 = player2name;
    };
    const getPlayer1Name = () => currentPlayer1;
    const getPlayer2Name = () => currentPlayer2;
    ////////////////////////////////////////////////////CREATING BOARD CLWARING FUNCTIONALITY/////////////////////////////////
    const clearBoardDisplay = () => {
        let elementID = "square";
        for(i = 0; i < 9; i++){
            thisID = elementID + String(i);
            squareLocation = document.getElementById(thisID);
            if (squareLocation.hasChildNodes()){
                squareLocation.removeChild(squareLocation.firstChild);
            }
        }
    };
    const clearPlayers = () => {
        let currentPlayer1 = "";
        let currentPlayer2 = "";
        const player1Section = document.getElementById('player1box');
        player1Section.removeChild(player1Section.firstChild);
        const player2Section = document.getElementById('player2box');
        player2Section.removeChild(player2Section.firstChild);
    };
    /////////////////ONCLICK appears not to function from within a Factory Function//////////////////////////
    // const closePopUp = () => {
    //     const onClose = document.getElementById("close-form");
    //     onClose.onclick = function() {addPlayer1(), addPlayer2(), closeForm()};
    // };
    // const showMe = () => {
    //     let text = document.createTextNode("Z");
    //     let insertHere = document.getElementById("square9");
    //     insertHere.appendChild(text);
    // };
    return {
        addPlayer1,
        addPlayer2,
        getPlayer1Name,
        getPlayer2Name, 
        clearBoardDisplay,
        clearPlayers
    };
})();

let test = [["X", "X", "X"], ["O", "O"]];
function showMe() {
    let result = false;
    if (test[0][0] == "X" && test[0][1] == "X" && test[0][2] == "X"){
        result = true;
    }
    let text = document.createTextNode(result);
    let insertHere = document.getElementById("test");
    insertHere.appendChild(text);
    DisplayController.clearBoardDisplay();
    thisGameBoard.clearBoard();
    DisplayController.clearPlayers();
}

// Optional work for later: create an AI so that a player can play against the computer