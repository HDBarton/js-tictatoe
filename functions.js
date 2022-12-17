// Try to have as little global code as possible
players = 0;

// Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.
const Gameboard = () =>{
    board = [[], [], []];
};

// allow players to put in their names
const Player = ((name) =>{
    players +=1;
    if (players == 1){
      playerToken = "X"
    }else if (players == 2){
        playerToken = "0";
    } else{
        alert("There can only be 2 players!");
    }
    this.sayPlayer = `Player 1: {$name}`;
})();

// Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, 
// letting players click on the gameboard to place their marker. 
// Don’t forget the logic that keeps players from playing in spots that are already taken!
// include a button to start/restart the game 
// and add a display element that congratulates the winning player
const GameActions = (() =>{

})();

// renders gameboard array to webpage
const DisplayController = () =>{

};

//Optional work for later: create an AI so that a player can play against the computer