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


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// rock.addEventListener('click',() => {
//     playRound('ROCK', getComputerChoice());
// })
// paper.addEventListener('click',() => {
//     playRound('PAPER', getComputerChoice());
// })
// scissors.addEventListener('click',() => {
//     playRound('SCISSORS', getComputerChoice());
// })

function getPlayerChoice(){
    let playerChoice = prompt('Input your choice, Rock, Paper or Scissors');
    return playerChoice.toUpperCase();
}

function playRound(playerChoice, computerChoice){
    const result = document.querySelector('#results-container');
    const p = document.createElement('p');

    if (playerChoice == 'ROCK' && computerChoice == 'PAPER'){
        p.textContent = 'You lose! Paper beats Rock';
        result.appendChild(p);
        return 'computerWin';
    } else if (playerChoice == 'ROCK' && computerChoice == 'SCISSORS'){
        p.textContent = 'You win! Rock beats Scissors';
        result.appendChild(p);
        return 'playerWin';
    } else if (playerChoice == 'PAPER' && computerChoice == 'ROCK'){
        p.textContent = 'You win! Paper beats Rock';
        result.appendChild(p);
        return 'playerWin';
    } else if (playerChoice == 'PAPER' && computerChoice == 'SCISSORS'){
        p.textContent = 'You lose! Scissors beats Paper';
        result.appendChild(p);
        return 'computerWin';
    } else if (playerChoice == 'SCISSORS' && computerChoice == 'ROCK'){
        p.textContent = 'You lose! Rock beats Scissors';
        result.appendChild(p);
        return 'computerWin';
    } else if (playerChoice == 'SCISSORS' && computerChoice == 'PAPER'){
        p.textContent = 'You win! Scissors beats Paper';
        result.appendChild(p);
        return 'playerWin';
    } else if(playerChoice == computerChoice){
        p.textContent = 'Its a draw!';
        result.appendChild(p);
    } else{
        p.textContent = 'Please enter Rock, Paper or Scissors';
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
    const winner = document.querySelector('#game-winner');
    const p = document.createElement('p');

    if (playerScore > computerScore){
        p.textContent = 'CONGRATULATIONS! YOU WIN!';
        winner.appendChild(p);
    } else if(playerScore < computerScore){
        p.textContent = 'YOU LOSE! COMPUTER WINS!';
        winner.appendChild(p);
    } else{
        p.textContent = 'ITS A DRAW';
        winner.appendChild(p);
    }
}

function playGame(){
    for(i = 0; i < 5; i++){
        let result = playRound(getPlayerChoice(), getComputerChoice());
        checkRoundWinner(result);
    }
    gameWinner(playerScore, computerScore);
}

playGame();