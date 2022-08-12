const computerArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
    //  randomly RETURN rock || paper || scissors
    let randomChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
    return randomChoice;
    }

// console.log(getComputerChoice());

// function playRound(playerSelection, computerSelection)
    //  COMPARE parameters
        //  write out if || else || else if cases
        //  RETURN strings based on comparison (might need to change RETURN value)
    //  NOTE: playerSelection to be case-insensitive

// const playerSelection = prompt('Choose your weapon: rock 🪨, paper 🧻, scissors ✂')
// const computerSelection = getComputerChoice();
// try console.log(playRound(playerSelection, computerSelection));

// function game()
    //  for (let i = 0; i < 5; i++)
        //  call playRound()
        //  CONSOLE.LOG results of playRound()
    //  declare winner at the end of 5 rounds (might need another function to compare winner/loser OR use changed RETURN value from playRound())
        
// rework any functions + return values if needed
// create any additional helper functions if needed 