// Create counters for player and computer wins
let playerScore = 0;
let computerScore = 0;

// Add divs to results divs
const results = document.getElementById("results");
const runningScore = document.createElement("div");
const finalScore = document.getElementById("finalScore");
const finalResult = document.createElement("div");


// computerSelection: randomly return rock || paper || scissors
function getComputerChoice() {
    const computerArray = ["rock", "paper", "scissors"];
    let randomChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
    return randomChoice;
}

// Player selection: select buttons in dom
let buttonSelection = document.querySelectorAll("button");

// [WRAP THIS IN A FUNCTION THAT CAN BE CALLED WITH BUTTON CLICKS?]
buttonSelection.forEach((userItem) => {
    userItem.addEventListener("click", (event) => {
        let score = playRound(event.target.name);
        runningScore.textContent = score;
        results.append(runningScore);
        
        checkFinalScore();

        finalScore.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    });
});

// Play a round
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
        return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        ++computerScore;
        return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++playerScore;
        return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        ++computerScore;
        return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++playerScore;
        return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        ++computerScore;
        return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
    } else {return `No Winner! ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}.`}
}

// Check final scores
function checkFinalScore() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            alert("Congratulations! You are the winner! 🏆");
            /* finalResult.textContent = "Congratulations! You are the winner! 🏆";
            results.append(finalResult); */ 
        } else if (computerScore > playerScore) {
            alert("You lose! Better luck next time! 😔");
            /* finalResult.textContent = "You lose! Better luck next time! 😔";
            results.append(finalResult); */ 
        } else {
            alert("There are no winners, only survivors 💀");
            /* finalResult.textContent = "There are no winners, only survivors 💀";
            results.append(finalResult); */
        }

        playerScore = 0;
        computerScore = 0;

        runningScore.textContent = "";
    }
}