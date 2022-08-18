const computerArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
    //  randomly RETURN rock || paper || scissors
    let randomChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
    return randomChoice;
    }

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    //  FIND A PATTERN
    
    let winnerText = `You Win! ${playerSelection} beats ${computerSelection}.`;
    let loserText = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    let invalidText = 'No winner!';

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return winnerText;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return loserText;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return winnerText;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return loserText;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return winnerText;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return loserText;
    } else {return invalidText}
    //  RETURN strings based on comparison (might need to change RETURN value)
}

//  check if player enters INVALID CHOICE (might need to be separate function with playerSelection?)
    // if ((playerSelection.toLowerCase() !== 'rock') 
    // || (playerSelection.toLowerCase() !== 'paper')
    // || (playerSelection.toLowerCase() !== 'scissors')) {
    //     console.log(playerSelection);
    //     return "Invalid Entry! Please refresh the page to try again.";

let playerSelection = (prompt('Choose your weapon: rock 🪨, paper 🧻, scissors ✂')).toLowerCase();
let computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));
// console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);

// Create counters for player and computer wins
const playerWin = 0;
const computerWin = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        
        //  CONSOLE.LOG results of playRound()
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);

        if (i < 4) {
            playerSelection = (prompt('Choose your weapon: rock 🪨, paper 🧻, scissors ✂')).toLowerCase();
            computerSelection = getComputerChoice();
        } // else {COUNT winnerText OR playerWin}
    }
    
    //  declare winner at the end of 5 rounds (might need another function to compare winner/loser OR use changed RETURN value from playRound())
    // if (invalidText > 3) {
    //    console.log("There are no winners, only survivors 💀");
    //} else if (loserText > 3) {
    //    console.log("You lose! Better luck next time!");
    //} else (console.log("Congratulations! You are the winner!"));

}

game();

// rework any functions + return values if needed
// create any additional helper functions if needed 