// Try to have as little global code as possible
// TODO:
// 1.) Get player names to populate above game board with symbol
// 2.) Create mechansim to add token to gameboard for each click, using a mechanism to check which totem was last played
// 3.) Create a mechanism to check for a win after each click
// 4.) Create mechansim to check that an action hasn't already been played on the square being clicked and an alert if so
// 5.) OPTIONAL: Keep game from starting until names have been entered
const currentPlayer1 = "";
const currentPlayer2 = "";
const player1Section = document.getElementById('player1box');
const player2Section = document.getElementById('player2box');
player1Section.innerHTML = currentPlayer1;
player2Section.innerHTML = currentPlayer2;
const testArea = document.getElementById("test-button");
testArea.onclick = function() {showMe()};
const onClose = document.getElementById("close-form");
onClose.onclick = function() {DisplayController.addPlayer1(), DisplayController.addPlayer2(), closeForm()};

// helper fucntions
function openPlayerBox() {
  document.getElementById("add-players-form").style.display = "block";
}
// TODO: need to make sure button remains if required content isn't filled in
/////////////////////WAS WORKING ON THIS: Names seem to blink after submission but immediately disappear
function closeForm(){
    document.getElementById("add-players-form").style.display = "none";
}
function displayPlayer1(){
    Player.printPlayer1;
}

// Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.
// MODULE
const Gameboard = () =>{
    board = [[], [], []];
};

// allow players to put in their names
// const Player = ((name) =>{
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


const DisplayController = (() => {
    // get players names
    const form = document.getElementById("form");
    const player1Section = document.getElementById('player1box');
    const player2Section = document.getElementById('player2box');
    const addPlayer1 = () => {
        let player1element = form.elements["player1"];
        let player1name = String(player1element.value);
        let player1 = document.createTextNode(player1name);
        player1Section.appendChild(player1);
        console.log(player1name);
        currentPlayer1 = player1name;
    }
    const addPlayer2 = () => {
        let player2element = form.elements["player2"];
        let player2name = String(player2element.value);
        let player2 = document.createTextNode(player2name);
        player2Section.appendChild(player2);
        console.log(player2name);
        currentPlayer2 = player2name;
    }
    const showMe = () => {
        let text = document.createTextNode("Here I am!");
        let insertHere = document.getElementById("test");
        insertHere.appendChild(text);
    }
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



// Optional work for later: create an AI so that a player can play against the computer