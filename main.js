const choice = ["rock","paper","scissors"]

function game() {
    playerRound();

    //play the game
    //play five rounds
    //console based

}
function playRounds() {
    const playerSelection = playerChoice();
    const computerSeletion = computerChoice();

} 
 
function playerChoice () {
    //get input from player
    let input = prompt('Type Rock, Paper, or scissors');
    while (input ==null) {
        input = prompt('Type Rock, Paper, or scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while(check ==false){
        prompt(
            "Type Rock, Paper, or scissors. Spelling needs to be exact, but capitilization doesnt matter"
        );
    }

}

function computerChoice () {
    //get random input for computer
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice){
    return choices.Includes(choice);
    
}

game();
