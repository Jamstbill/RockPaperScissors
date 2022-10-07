//computer selects either rock paper or scissors
//the player selects rock paper or scissors
//the players selection is compared to computer selection
//the winner is displayed in a string

//computer choosing
//player choosing
//if statement to establish winner
//declare winner

const choice = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice(choice){
    return choice[Math.floor(Math.random()*choice.length)];
}
console.log(getComputerChoice(choice));

