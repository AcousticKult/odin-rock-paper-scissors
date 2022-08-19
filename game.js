const computerArray = ["rock", "paper", "scissors"];

// Create counters for player and computer wins
let playerScore = 0;
let computerScore = 0;

// Randomly return rock || paper || scissors
function getComputerChoice() {
    let randomChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
    return randomChoice;
    }

function playRound(playerSelection, computerSelection) {
    //  FIND A PATTERN
    
    let winnerText = `You Win! ${playerSelection} beats ${computerSelection}.`;
    let loserText = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    let invalidText = 'No winner!';

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
        return winnerText;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        ++computerScore;
        return loserText;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++playerScore;
        return winnerText;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        ++computerScore;
        return loserText;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++playerScore;
        return winnerText;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        ++computerScore;
        return loserText;
    } else {return invalidText}
    //  RETURN strings based on comparison (might need to change RETURN value)
}

let playerSelection = (prompt('Choose your weapon: rock 🪨, paper 🧻, scissors ✂')).toLowerCase();
let computerSelection = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        
        //  CONSOLE.LOG results of playRound()
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${playerSelection}, Score: ${playerScore} \nComputer: ${computerSelection}, Score: ${computerScore}`);

        if (i < 4) {
            playerSelection = (prompt('Choose your weapon: rock 🪨, paper 🧻, scissors ✂')).toLowerCase();
            computerSelection = getComputerChoice();
        } else if (playerScore > computerScore) {
            console.log("Congratulations! You are the winner!");
        } else if (computerScore < playerScore) {
            console.log("You lose! Better luck next time!");
        } else {
            console.log("There are no winners, only survivors 💀");
        }
    }
}

game();

// rework any functions + return values if needed
// create any additional helper functions if needed 