
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
    
    return winner;
}


//Plays 5 rounds and returns the winner
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick rock, paper, or scissors");
        let computerSelection = computerPlay();
        
        //playRound returns a string declaring the winner, either 'player', 'computer' or, 'tie'
        let winner = playRound(playerSelection, computerSelection);
        if (winner === 'player') {
            playerScore++;
            console.log(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`)
        } else if (winner === 'computer') {
            computerScore++;
            console.log(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`)
        } else if (winer === 'tie') {
            console.log(`It's a tie! You both played ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`)
        }
    }
    if (playerScore > computerScore) {
        console.log(`You are the winner! Your score was ${playerScore} and the computer's score was ${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`You Lose! Your score was ${playerScore} and the computer's score was ${computerScore}`)
    } else if (playerScore === computerScore) {
        console.log(`It's a tie! You both scored ${playerScore}`)
    }

}

game();