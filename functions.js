// Try to have as little global code as possible
// TODO:
// 1.) Get player names to populate above game board with symbol
// 2.) Create mechansim to add token to gameboard for each click, using a mechanism to check which totem was last played
// 3.) Create a mechanism to check for a win after each click
// 4.) Create mechansim to check that an action hasn't already been played on the square being clicked and an alert if so
// 5.) OPTIONAL: Keep game from starting until names have been entered
const players = 0;

// helper fucntions
function openPlayerBox() {
  document.getElementById("add-players-form").style.display = "block";
}
// TODO: need to make sure button remains if required content isn't filled in
function closeForm(){
    document.getElementById("close-form").style.display = "none";
    let placeForPlayerNames = document.getElementById("addPlayerNamesHere");
    let playersText = `Player X: ${DisplayController.player1}`;
    console.log(playersText);
    placeForPlayerNames.appendChild(document.createTextNode(playersText));
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
const Player = ((name) =>{
    // get player names
    const printPlayer1 = () => {
        // TODO: change for whichever works: this, or just directly pulling from DisplayController
        console.log(DisplayController.player1);
        let addHere = document.createElement("div");
        addHere.appendChild(DisplayController.player1);
    }

    //players +=1;
    let playerToken = "";
    if (players == 1){
      playerToken = "X";
    }else {
        playerToken = "0";
    }
    this.sayPlayer = `Player ${playerToken}: ${name}`;
})();

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
    const player1name = document.createTextNode("Joe");
    const player2name = document.createTextNode("Susan");
    const player1 = () => form.elements["player1"];
    const player2 = () => form.elements["player2"];
    const addPlayer1 = () => player1Section.appendChild(player1name);
    const addPlayer2 = () => player2Section.appendChild(player2name);
    return {
        addPlayer1,
        addPlayer2
    };
})();

DisplayController.addPlayer1();
DisplayController.addPlayer2();
// Optional work for later: create an AI so that a player can play against the computer