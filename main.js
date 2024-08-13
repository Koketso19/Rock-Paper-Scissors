
const choices = ["rock","paper","scissors"]; 
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultsDiplay");


function playGame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result ="";

  if(playerChoice === computerChoice){
    result = "IT'S A TIE!";

  }
  else{
    switch(playerChoice){
      case "rock":
    }
  }
}
