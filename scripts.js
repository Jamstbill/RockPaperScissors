function getComputerChoice(){
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1){
        computerChoice = 'Rock';
    } else if (randomNumber == 2){
        computerChoice = 'Scissors';
    } else {
        computerChoice = 'Paper';
    }
    return computerChoice.toUpperCase();
}

function getPlayerChoice(){
    let playerChoice = prompt('Input your choice, Rock, Paper or Scissors');
    return playerChoice.toUpperCase();
}

let playerScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

function playRound(playerChoice, computerChoice){
    if (playerChoice == 'ROCK' && computerChoice == 'PAPER'){
        console.log('You lose! Paper beats Rock');
        computerScore = computerScore + 1;
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
    } else if (playerChoice == 'ROCK' && computerChoice == 'SCISSORS'){
        console.log('You win! Rock beats Scissors');
        playerScore = playerScore + 1;
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
    } else if (playerChoice == 'PAPER' && computerChoice == 'ROCK'){
        console.log('You win! Paper beats Rock');
        playerScore = playerScore + 1;
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
    } else if (playerChoice == 'PAPER' && computerChoice == 'SCISSORS'){
        console.log('You lose! Scissors beats Paper');
        computerScore = computerScore + 1;
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
    } else if (playerChoice == 'SCISSORS' && computerChoice == 'ROCK'){
        console.log('You lose! Rock beats Scissors');
        computerScore = computerScore + 1;
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
    } else if (playerChoice == 'SCISSORS' && computerChoice == 'PAPER'){
        console.log('You win! Scissors beats Paper');
        playerScore = playerScore + 1;
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
    } else if(playerChoice == computerChoice){
        console.log('Its a draw!')
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
    } else{
        console.log('error');
    }
}
playRound(playerChoice, computerChoice);
//function to play the game 5 times
//needs to call the playround function 5 times
//needs to update the scores per round