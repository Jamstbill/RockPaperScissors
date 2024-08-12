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

const sectionContainer = document.querySelector('.selection-container');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

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
    const info = document.querySelector('.info-container');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const computerSelection = document.querySelector('.computerSelection');

    const playerScoreCounter = document.querySelector('.playerResults');
    const computerScoreCounter = document.querySelector('.computerResults');

    let result;

    info.textContent = ''; 
    playerScoreCounter.textContent = '';
    computerScoreCounter.textContent = '';

    switch(playerChoice + '-' + computerChoice){
        case ('ROCK-PAPER'):
            p.textContent = 'You lose! Paper beats Rock';
            result = 'computerWin';
            computerSelection.style.backgroundImage = "url('images/paper.png')";
            console.log(playerChoice)
            console.log(computerChoice)

            break;
        case ('ROCK-SCISSORS'):
            p.textContent = 'You win! Rock beats Scissors';
            result = 'playerWin';
            computerSelection.style.backgroundImage = "url('images/scissors.png')";
            console.log(playerChoice)
            console.log(computerChoice)


            break;
        case ('PAPER-ROCK'):
            p.textContent = 'You win! Paper beats Rock';
            result = 'playerWin';
            computerSelection.style.backgroundImage = "url('images/rock.png')";
            console.log(playerChoice)
            console.log(computerChoice)


            break;
        case ('PAPER-SCISSORS'):
            p.textContent = 'You lose! Scissors beats Paper';
            result = 'computerWin';
            computerSelection.style.backgroundImage = "url('images/scissors.png')";
            console.log(playerChoice)
            console.log(computerChoice)


            break;
        case ('SCISSORS-ROCK'):
            p.textContent = 'You lose! Rock beats Scissors';    
            result = 'computerWin';
            computerSelection.style.backgroundImage = "url('images/rock.png')";
            console.log(playerChoice)
            console.log(computerChoice)

            break;
        case ('SCISSORS-PAPER'):
            p.textContent = 'You win! Scissors beats Paper';
            result = 'playerWin';
            computerSelection.style.backgroundImage = "url('images/paper.png')";
            console.log(playerChoice)
            console.log(computerChoice)

            break;
        default:
            p.textContent = 'Its a draw!';
            computerSelection.style.backgroundImage = `url('images/${computerChoice.toLowerCase()}.png')`;
            p2.textContent = `Your score: ${playerScore}. Computer score: ${computerScore}`;
            console.log(playerChoice)
            console.log(computerChoice)

    }

    info.appendChild(p);
    checkRoundWinner(result);
    p2.textContent = playerScore;
    p3.textContent = computerScore;
    playerScoreCounter.appendChild(p2);
    computerScoreCounter.appendChild(p3);
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
    const winner = document.querySelector('.game-winner');
    const p = document.createElement('p');
    const info = document.querySelector('.info-container');

    if (playerScore > computerScore){
        p.textContent = 'CONGRATULATIONS! YOU WIN!';
        p.style.color = 'green';
        sectionContainer.style.display = 'none';
        info.style.display = 'none';
        winner.appendChild(p);
    } else if(playerScore < computerScore){
        p.textContent = 'YOU LOSE! COMPUTER WINS!';
        p.style.color = 'red';
        sectionContainer.style.display = 'none';
        info.style.display = 'none';
        winner.appendChild(p);
    }
}