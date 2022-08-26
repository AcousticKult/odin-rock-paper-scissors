let playerSelection = (prompt('Choose your weapon: rock 🪨, paper 🧻, scissors ✂')).toLowerCase();
let computerSelection = getComputerChoice();

// Create counters for player and computer wins
let playerScore = 0;
let computerScore = 0;

// Randomly return rock || paper || scissors
function getComputerChoice() {
    const computerArray = ["rock", "paper", "scissors"];
    let randomChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
    return randomChoice;
}

function displayWinner() {
    ++playerScore;
    return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
}

function displayLoser() {
    ++computerScore;
    return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
}

// Play a round using playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return displayWinner();
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return displayLoser();
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return displayWinner();
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return displayLoser();
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return displayWinner();
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return displayLoser();
    } else {return 'No Winner!'}
}

// Play 5 rounds of the game
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        
        //  CONSOLE.LOG results of playRound()
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${playerSelection.toUpperCase()}, Score: ${playerScore} \nComputer: ${computerSelection.toUpperCase()}, Score: ${computerScore}`);

        if (i < 4) {
            playerSelection = (prompt('Choose your weapon: rock 🪨, paper 🧻, scissors ✂')).toLowerCase();
            computerSelection = getComputerChoice();
        } else {
            if (playerScore > computerScore) {
                console.log("Congratulations! You are the winner! 🏆");
            } else if (computerScore > playerScore) {
                console.log("You lose! Better luck next time! 😔");
            } else {
                console.log("There are no winners, only survivors 💀");
            }
        }
    }
}

playGame();