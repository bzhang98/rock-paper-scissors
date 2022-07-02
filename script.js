
//Randomly returns either "rock", "paper", or "scissors"
function computerPlay() {
    const options = ['rock', 'paper', 'scissors']
    
    //Generate a random number from 0 to 2
    let rand = Math.floor(Math.random()*3);
    return options[rand];
}

//Takes two parameters and returns a string declaring the winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case 'rock':
                return 'tie';
            case 'paper':
                return 'computer';
            case 'scissors':
                return 'player'; 
        }
    } else if(playerSelection === 'paper') {
        switch(computerSelection) {
            case 'rock':
                return 'player';
            case 'paper':
                return 'tie';
            case 'scissors':
                return 'computer';    
        }
    } else if(playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'rock':
                return 'computer';
            case 'paper':
                return 'player';
            case 'scissors':
                return 'tie';
        }
    }
}

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const scoreBoard = document.querySelector('.score');
const gameOverMessage = document.querySelector('.winner')
scoreBoard.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    if(!gameOver) {
        const winner = playRound('rock', computerPlay());
        if(winner === 'player') {
            playerScore++;
            scoreBoard.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
        }else if(winner === 'computer') {
            computerScore++;
            scoreBoard.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
        }else if (winner === 'tie') {
    
        }
    }
    

    if (playerScore === 5 || computerScore === 5) {
        gameOver = true;
        if(playerScore === 5) {
            gameOverMessage.textContent = 'Game over, you win!'
        } else if (computerScore === 5) {
            gameOverMessage.textContent = 'Game over, computer wins!'
        }
    }
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    if(!gameOver) {
        const winner = playRound('rock', computerPlay());
        if(winner === 'player') {
            playerScore++;
            scoreBoard.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
        }else if(winner === 'computer') {
            computerScore++;
            scoreBoard.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
        }else if (winner === 'tie') {
    
        }
    }
    

    if (playerScore === 5 || computerScore === 5) {
        gameOver = true;
        if(playerScore === 5) {
            gameOverMessage.textContent = 'Game over, you win!'
        } else if (computerScore === 5) {
            gameOverMessage.textContent = 'Game over, computer wins!'
        }
    }
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    if(!gameOver) {
        const winner = playRound('rock', computerPlay());
        if(winner === 'player') {
            playerScore++;
            scoreBoard.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
        }else if(winner === 'computer') {
            computerScore++;
            scoreBoard.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
        }else if (winner === 'tie') {
    
        }
    }

    if (playerScore === 5 || computerScore === 5) {
        gameOver = true;
        if(playerScore === 5) {
            gameOverMessage.textContent = 'Game over, you win!'
        } else if (computerScore === 5) {
            gameOverMessage.textContent = 'Game over, computer wins!'
        }
    }
});