
const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for (let i = 1; i <= 5; i++) {
        playRounds(i);

    }
    document.querySelector("button").textContent = 'play new game';
    
    logWins();


    //play the game
    //play five rounds
    //console based

}
function playRounds(round) {
    const playerSelection = playerChoice();
    const computerSeletion = computerChoice();
    const winner = checkWinner(playerSelection, computerSeletion);
    winners.push(winner);
    logRounds(playerSelection, computerSeletion, winner, round);

} 
 
function playerChoice() {
    //get input from player 
    let input = prompt('Type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
        );
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
        
          }  input = input.toLowerCase();
        check = validateInput(input);

    }
    return input;

}

function computerChoice() {
    //get random input for computer
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice){
    return choices.includes(choice);
    
}
function checkWinner(choiceP, choiceC){
    if (choiceP === choiceC) {
        return 'Tie';
    } else if (
        (choiceP === "rock" && choiceC == "scissors") ||
        (choiceP === "paper" && choiceC == "rock") || 
        (choiceP === "scissors" && choiceC == "paper") 
        ) {
        return 'player';
    } else {
        return "Computer";
}

}

function logWins(){
    let playerWins = winners.filter((item) => item == "player").length;
    let computerWins = winners.filter((item) => item == 'computer').length;
    let ties = winners.filter((item) => item == "tie").length;
    console.log('Results:')
    console.log('Player wins:',playerWins);
    console.log("computer wins:",computerWins);
    console.log("Ties:" , ties);

}

function logRounds(playerChoice,computerChoice,winner,round){
    console.log("Rounds;", round);
    console.log('player Chose:',playerChoice);
    console.log('Computer Chose:',computerChoice);
    console.log(winner,' Won the Round');
    console.log(".......................................");
}

