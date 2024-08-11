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

const sectionContainer = document.querySelector('#selection-container');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click',() => {
    playRound('ROCK', getComputerChoice());
})
paper.addEventListener('click',() => {
    playRound('PAPER', getComputerChoice());
})
scissors.addEventListener('click',() => {
    playRound('SCISSORS', getComputerChoice());
})


function playRound(playerChoice, computerChoice){
    const info = document.querySelector('#info-container');
    const p = document.createElement('p');
    const p2 = document.createElement('p');

    if (playerChoice == 'ROCK' && computerChoice == 'PAPER'){
        p.textContent = 'You lose! Paper beats Rock';
        info.appendChild(p);
        info.appendChild(p2);
        let result = 'computerWin';
        checkRoundWinner(result);
        p2.textContent = `Your score: ${playerScore}. Computer score: ${computerScore}`;

    } else if (playerChoice == 'ROCK' && computerChoice == 'SCISSORS'){
        p.textContent = 'You win! Rock beats Scissors';
        info.appendChild(p);
        info.appendChild(p2);
        let result = 'playerWin';
        checkRoundWinner(result);
        p2.textContent = `Your score: ${playerScore}. Computer score: ${computerScore}`;

    } else if (playerChoice == 'PAPER' && computerChoice == 'ROCK'){
        p.textContent = 'You win! Paper beats Rock';
        info.appendChild(p);
        info.appendChild(p2);
        let result = 'playerWin';
        checkRoundWinner(result);
        p2.textContent = `Your score: ${playerScore}. Computer score: ${computerScore}`;


    } else if (playerChoice == 'PAPER' && computerChoice == 'SCISSORS'){
        p.textContent = 'You lose! Scissors beats Paper';
        info.appendChild(p);
        info.appendChild(p2);
        let result = 'computerWin';
        checkRoundWinner(result);
        p2.textContent = `Your score: ${playerScore}. Computer score: ${computerScore}`;


    } else if (playerChoice == 'SCISSORS' && computerChoice == 'ROCK'){
        p.textContent = 'You lose! Rock beats Scissors';
        info.appendChild(p);
        info.appendChild(p2);
        let result = 'computerWin';
        checkRoundWinner(result);
        p2.textContent = `Your score: ${playerScore}. Computer score: ${computerScore}`;


    } else if (playerChoice == 'SCISSORS' && computerChoice == 'PAPER'){
        p.textContent = 'You win! Scissors beats Paper';
        info.appendChild(p);
        info.appendChild(p2);
        let result = 'playerWin';
        checkRoundWinner(result);
        p2.textContent = `Your score: ${playerScore}. Computer score: ${computerScore}`;

    } else if(playerChoice == computerChoice){
        p.textContent = 'Its a draw!';
        info.appendChild(p);
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

    if (playerScore === 5 || computerScore === 5){
        gameWinner(playerScore, computerScore);
    }
}

const gameWinner = (playerScore, computerScore) => {
    const winner = document.querySelector('#game-winner');
    const p = document.createElement('p');

    if (playerScore > computerScore){
        p.textContent = 'CONGRATULATIONS! YOU WIN!';
        sectionContainer.style.display = 'none';
        winner.appendChild(p);
    } else if(playerScore < computerScore){
        p.textContent = 'YOU LOSE! COMPUTER WINS!';
        sectionContainer.style.display = 'none';
        winner.appendChild(p);
    } else{
        p.textContent = 'ITS A DRAW';
        sectionContainer.style.display = 'none';
        winner.appendChild(p);
    }
}