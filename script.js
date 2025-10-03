/* 

CREATE an array of rock, paper, and scissors

FUNCTION getComputerChoice()
    GET random result from array




*/

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

const gameValues = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    return gameValues[Math.floor(Math.random() * gameValues.length)];
}


function determineResult(playerChoice) {
    const computerChoice = getComputerChoice();

    if (computerChoice === playerChoice) {
        result.textContent = "you tied!";
    } else if 
        (
            (computerChoice === "rock" && playerChoice === "paper") ||
            (computerChoice === "paper" && playerChoice === "scissors") ||
            (computerChoice === "scissors" && playerChoice === "rock")
        ) {
            result.textContent =   `You win! You are now at ${++humanScore} points!`;
        } else {
            result.textContent = `You lose! Computer is now at ${++computerScore} points!`;
        }
    result.textContent += ` Computer chose ${computerChoice}. You chose ${playerChoice}.`;
    result.textContent += ` Score: You ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        result.textContent = `${winner} Final Score: You ${humanScore} - Computer ${computerScore}`;
        
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}
    
reset.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    result.textContent = "Game reset. Score: You 0 - Computer 0";

    
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
});

rock.addEventListener("click", () => determineResult("rock"));
paper.addEventListener("click", () => determineResult("paper"));
scissors.addEventListener("click", () => determineResult("scissors"));
resetGame();

