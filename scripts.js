let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber){
        case 1:
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Scissors';
            break;
        case 3:
            computerChoice = 'Paper';
            break;
    }
    return computerChoice.toUpperCase();
}

function getPlayerChoice(){
    let playerChoice = prompt('Input your choice, Rock, Paper or Scissors');
    return playerChoice.toUpperCase();
}


function playRound(playerChoice, computerChoice){
    if (playerChoice == 'ROCK' && computerChoice == 'PAPER'){
        console.log('You lose! Paper beats Rock');
        return 'computerWin';
    } else if (playerChoice == 'ROCK' && computerChoice == 'SCISSORS'){
        console.log('You win! Rock beats Scissors');
        return 'playerWin';
    } else if (playerChoice == 'PAPER' && computerChoice == 'ROCK'){
        console.log('You win! Paper beats Rock');
        return 'playerWin';
    } else if (playerChoice == 'PAPER' && computerChoice == 'SCISSORS'){
        console.log('You lose! Scissors beats Paper');
        return 'computerWin';
    } else if (playerChoice == 'SCISSORS' && computerChoice == 'ROCK'){
        console.log('You lose! Rock beats Scissors');
        return 'computerWin';
    } else if (playerChoice == 'SCISSORS' && computerChoice == 'PAPER'){
        console.log('You win! Scissors beats Paper');
        return 'playerWin';
    } else if(playerChoice == computerChoice){
        console.log('Its a draw!')
    } else{
        console.log('Please enter Rock, Paper or Scissors');
    }
}

function checkRoundWinner(result){
    if (result == 'playerWin'){
        playerScore = playerScore + 1;
    } else if (result == 'computerWin'){
        computerScore = computerScore + 1;
    } 
    console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`);
    console.log('||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
}


const gameWinner = (playerScore, computerScore) => {
    if (playerScore > computerScore){
        console.log('||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
        console.log('CONGRATULATIONS! YOU WIN!')
    } else if(playerScore < computerScore){
        console.log('||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
        console.log('YOU LOSE! COMPUTER WINS!')
    } else{
        console.log('||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
        console.log('ITS A DRAW');
    }
}

function playGame(){
    let round = 1;
    console.log(`Round number: ${round}`);

    let result = playRound(getPlayerChoice(), getComputerChoice());
    checkRoundWinner(result);

    round = round + 1;
    result = playRound(getPlayerChoice(), getComputerChoice());
    console.log(`Round number: ${round}`);
    checkRoundWinner(result);

    round = round + 1;
    result = playRound(getPlayerChoice(), getComputerChoice());
    console.log(`Round number: ${round}`);
    checkRoundWinner(result);

    round = round + 1;
    result = playRound(getPlayerChoice(), getComputerChoice());
    console.log(`Round number: ${round}`);
    checkRoundWinner(result);

    round = round + 1;
    result = playRound(getPlayerChoice(), getComputerChoice());
    console.log(`Round number: ${round}`);
    checkRoundWinner(result);

    gameWinner(playerScore, computerScore);
}

playGame();