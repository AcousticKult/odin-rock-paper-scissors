// Create counters for player and computer wins
let playerScore = 0;
let computerScore = 0;

// select results divs
const results = document.getElementById("results");
const runningScore = document.getElementById("runningScore");
const finalScore = document.getElementById("finalScore");

// computerSelection: randomly return rock || paper || scissors
function getComputerChoice() {
    const computerArray = ["rock", "paper", "scissors"];
    let randomChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
    return randomChoice;
}

// playerSelection: select buttons in dom
let buttonSelection = document.querySelectorAll("button");

buttonSelection.forEach((userItem) => {
    userItem.addEventListener("click", (event) => {
        let score = playRound(event.target.name);
        const para = document.createElement("p");
        runningScore.append(para);
        para.append(score);
    });
});

// Play a round
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
        return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.\n`;
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
    } else {return 'No Winner!'}

    // runningScore.append(lineBreak);

    // console.log(playerScore, computerScore);
}

// function runningScore(score, message) {
    // see running score after playRound has been called and store in score
    // take return value from playRound and store in message
// }

// Play 5 rounds of the game
/* function playGame() {
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
} */

// playGame();


/* function displayWinner() {
    ++playerScore;
    return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
}

function displayLoser() {
    ++computerScore;
    return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
} */

// let playerSelection = (prompt('Choose your weapon: rock 🪨, paper 🧻, scissors ✂')).toLowerCase();