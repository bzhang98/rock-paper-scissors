
//Randomly returns either "rock", "paper", or "scissors"
function computerPlay() {
    const options = ['rock', 'paper', 'scissors']
    
    //Generate a random number from 0 to 2
    let rand = Math.floor(Math.random()*3);
    return options[rand];
}

//Takes two parameters and returns a string declaring the winner
function playRound(playerSelection, computerSelection) {
    let winner;
    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case 'rock':
                winner = 'tie';
                break;
            case 'paper':
                winner = 'computer';
                break;
            case 'scissors':
                winner = 'player';  
                break;  
        }
    } else if(playerSelection === 'paper') {
        switch(computerSelection) {
            case 'rock':
                winner = 'player';
                break;
            case 'paper':
                winner = 'tie';
                break;
            case 'scissors':
                winner = 'computer';  
                break;  
        }
    } else if(playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'rock':
                winner = 'computer';
                break;
            case 'paper':
                winner = 'player';
                break;
            case 'scissors':
                winner = 'tie';  
                break;  
        }
    }
    
    if (winner === 'player') {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    } else if (winner === 'computer') {
        return `You Lose! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    } else if (winner === 'tie') {
        return `It's a tie! You both picked ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    }
}

//Plays 5 rounds and returns the winner
function game() {

}

game();