// Try to have as little global code as possible
// TODO:
// 2.) Create mechansim to add token to gameboard for each click, using a mechanism to check which totem was last played
// 3.) Create a mechanism to check for a win after each click
// 4.) Create mechansim to check that an action hasn't already been played on the square being clicked and an alert if so
// 5.) OPTIONAL: Keep game from starting until names have been entered

////////////////////ONCLICK FUNCTIONALITIES (can't seem to be used from within Factory or Module Functions)///////////////////
const onClose = document.getElementById("close-form");
onClose.onclick = function() {DisplayController.addPlayer1(), DisplayController.addPlayer2(), closeForm()};
//Board listerners for each square on gameboard
const square0 = document.getElementById("square0");
square0.onclick = function() {placeX("square0")};
const square1 = document.getElementById("square1");
square1.onclick = function() {placeX("square1")};
const square2 = document.getElementById("square2");
square2.onclick = function() {placeX("square2")};
const square3 = document.getElementById("square3");
square3.onclick = function() {placeX("square3")};
const square4 = document.getElementById("square4");
square4.onclick = function() {placeX("square4")};
const square5 = document.getElementById("square5");
square5.onclick = function() {placeX("square5")};
const square6 = document.getElementById("square6");
square6.onclick = function() {placeX("square6")};
const square7 = document.getElementById("square7");
square7.onclick = function() {placeX("square7")};
const square8 = document.getElementById("square8");
square8.onclick = function() {placeX("square8")};

/////////////////TESTING FUNCTIONALITY////////////////////////////////////////////////
const testArea = document.getElementById("test-button");
testArea.onclick = function() {showMe()};


// helper functions
function openPlayerBox() {
  document.getElementById("add-players-form").style.display = "block";
}
// TODO: need to make sure button remains if required content isn't filled in
function closeForm(){
    document.getElementById("add-players-form").style.display = "none";
}
//WORKING ON THIS: FIGURE OUT HOW TO INSERT AN X IN SQUARE ZERO
function placeX(squareID) {
    text = document.createTextNode("X");
    document.getElementById(squareID).appendChild(text);
}
/////////////////////////////GAMEBOARD FUNCTIONALITY///////////////////////////////////
// Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.
// MODULE
// X = 1, Y = 2
const Gameboard = () =>{
    board = [[], [], []];
};

/////////////////////////PREVIOUS PLAYER FACTORY FUNCTION//////////////////////////////
// function displayPlayer1(){
//     Player.printPlayer1;
// }

// allow players to put in their names
// const Players = ((name) =>{
//     // get player names
//     const printPlayer1 = () => {
//         // TODO: change for whichever works: this, or just directly pulling from DisplayController
//         console.log(DisplayController.player1);
//         let addHere = document.createElement("div");
//         addHere.appendChild(DisplayController.player1);
//     }

//     //players +=1;
//     let playerToken = "";
//     if (players == 1){
//       playerToken = "X";
//     }else {
//         playerToken = "0";
//     }
//     this.sayPlayer = `Player ${playerToken}: ${name}`;
// })();

// Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, 
// letting players click on the gameboard to place their marker. 
// Don’t forget the logic that keeps players from playing in spots that are already taken!
// include a button to start/restart the game 
// and add a display element that congratulates the winning player
const GameActions = (() =>{

})();

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
        showMe
    };
})();


function showMe() {
    let text = document.createTextNode("Here I am!");
    let insertHere = document.getElementById("test");
    insertHere.appendChild(text);
}

/////////////////////////////////////FORMER DISPLAY CONTROLLER/////////////////////////////////////////
// const DisplayController = (() => {
//     // get players names
//     const form = document.getElementById("form");
//     const player1Section = document.getElementById('player1box');
//     const player2Section = document.getElementById('player2box');
//     const addPlayer1 = () => {
//         let player1element = form.elements["player1"];
//         let player1name = String(player1element.value);
//         let player1 = document.createTextNode(player1name);
//         player1Section.appendChild(player1);
//         console.log(player1name);
//         currentPlayer1 = player1name;
//     }
//     const addPlayer2 = () => {
//         let player2element = form.elements["player2"];
//         let player2name = String(player2element.value);
//         let player2 = document.createTextNode(player2name);
//         player2Section.appendChild(player2);
//         console.log(player2name);
//         currentPlayer2 = player2name;
//     }
//     const showMe = () => {
//         let text = document.createTextNode("Z");
//         let insertHere = document.getElementById("square9");
//         insertHere.appendChild(text);
//     }
//     return {
//         addPlayer1,
//         addPlayer2,
//         showMe
//     };
// })();

// Optional work for later: create an AI so that a player can play against the computer