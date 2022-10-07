//computer selects either rock paper or scissors
//the player selects rock paper or scissors
//the players selection is compared to computer selection
//the winner is displayed in a string

//computer choosing
//player choosing
//if statement to establish winner
//declare winner

const choice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    pick = choice[Math.floor(Math.random()*choice.length)];
    return pick;
}

function playRound(computerSelection, playerSelection){
    if (computerSelection == 'Scissors'){
        console.log('Computer picks scissors, theyre smashed to fuck')
    }  else if (computerSelection == 'Paper'){
        console.log('Computer picks paper, it suffocates your rock')
    }  else if (computerSelection == 'Rock'){
        console.log('Computer also picks rock, its a draw')
    }
}

const computerSelection = getComputerChoice();
const playerSelection = 'Rock';
console.log(playRound(computerSelection, playerSelection));