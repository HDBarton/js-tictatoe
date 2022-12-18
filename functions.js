// Try to have as little global code as possible
players = 0;

function openPlayerBox() {
  document.getElementById("add-players-form").style.display = "block";
}
// TODO: need to make sure button remains if required content isn't filled in
function closeForm(){
    document.getElementById("close-form").style.display = "none";
}

// Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.
const Gameboard = () =>{
    board = [[], [], []];
};

// allow players to put in their names
const Player = ((name) =>{
    players +=1;
    let playerToken = "";
    if (players == 1){
      playerToken = "X";
    }else {
        playerToken = "0";
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
const DisplayController = () =>{

};

//Optional work for later: create an AI so that a player can play against the computer