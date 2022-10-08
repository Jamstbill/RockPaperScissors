const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    pick = choice[Math.floor(Math.random()*choice.length)];
    return pick;
}


function playRound(computerSelection, playerSelection){

   if(computerSelection == playerSelection.toLowerCase()){
        console.log('Its a draw')
   } 
   else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock'){
    console.log('You Lose this round! Rock beats Scissors')
   }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
    console.log('You win this round! Scissors beat Paper')
   } 
   else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
    console.log('You win this round! Rock smashes scissors')
   } 
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
    console.log('You Lose this round! Paper wraps rock')
   }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'){
    console.log('You Lose this round! Scissors cut paper')
   }   
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
    console.log('You Win this round! Paper wraps rock')
   }
   
}
function game(){
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please choose Rock, Paper or Sciccors');
        let computerSelection = getComputerChoice();
        playRound(computerSelection, playerSelection); 
        if(playerSelection.toLocaleLowerCase() == 'scissors' && computerSelection == 'rock'){
            computerScore = Number(computerScore) + 1;
            console.log('Your score is:' + ' ' + userScore);
            console.log('Computer score is:' + ' ' + computerScore);
        }   else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
            userScore = Number(userScore) + 1;
            console.log('Your score is:' + ' ' + userScore);
            console.log('Computer score is:' + ' ' + computerScore);     
        }   else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
            userScore = Number(userScore) + 1;
            console.log('Your score is:' + ' ' + userScore);
            console.log('Computer score is:' + ' ' + computerScore); 
        }   else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'){
            computerScore = Number(computerScore) + 1;
            console.log('Your score is:' + ' ' + userScore);
            console.log('Computer score is:' + ' ' + computerScore); 
       }    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
            userScore = Number(userScore) + 1;
            console.log('Your score is:' + ' ' + userScore);
            console.log('Computer score is:' + ' ' + computerScore); 
       }    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
            computerScore = Number(computerScore) + 1;
            console.log('Your score is:' + ' ' + userScore);
            console.log('Computer score is:' + ' ' + computerScore); 
       }    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
            userScore = Number(userScore) + 1;
            console.log('Your score is:' + ' ' + userScore);
            console.log('Computer score is:' + ' ' + computerScore); 
       }    else if(playerSelection.toLowerCase() == computerSelection){
            console.log('Your score is:' + ' ' + userScore);
            console.log('Computer score is:' + ' ' + computerScore); 
       }    
    }   
}


// function declareWinner(userScore, computerScore){
// if(userScore > computerScore){
//     console.log('YOU WON THE GAME' + 'Your score is:' + userScore + ' ' + 'Computer score is:' + ' ' + computerScore);
//    } else if(computerScore > userScore){
//     console.log('HAHAHA YOU LOST COS YOUR FUCKING USELESS' + 'Your score is' + userScore + ' ' + 'Computer score is:' + ' ' + computerScore)
//    } else if(userScore == computerScore){
//     console.log('For fuck sake its a draw, play again?' + 'Your score is' + userScore + ' ' + 'Computer score is:' + ' ' + computerScore)
//    }
// }
console.log(game());
