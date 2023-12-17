const choice = ["rock","paper","scissors"]

function game() {
    playRound();
}
function  playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();

}

function playerChoice() {
    let input = prompt("Type Rock,Ppaer,or Scissors");
    while(input == null){
      input = promt('Type Rock, paper, or scissors');  
    }
    input = input.toLowerCase();
    let check = validaeInput(input)
    if(check == true)
    console.log(input);
}

function computerChoice() {
    returnchoices[Math.floor(Math.random()*choice.length)]
}

function validateInput(choice)
if(choice.includes(choice)){
    return true
} else{
    return false
}

game();