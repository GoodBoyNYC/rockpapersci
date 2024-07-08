let humanScore = 0;
let computerScore = 0;
const rpsButtons = document.querySelectorAll(".button");
const results = document.querySelector(".results");
const notice = document.querySelector(".notice");

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return 'rock';
    } else if (x === 1) {
        return 'paper';
    }
    else {
        return 'scissor';
    }
}

// function getHumanChoice() {
//     let choice = prompt("RPS?");
//     return choice.toLowerCase();
// }
results.textContent = `Score:\nYou: ${humanScore}\nComp: ${computerScore}`;


//const results = document.querySelectorAll(".results");

rpsButtons.forEach((btn) => {
    btn.addEventListener("click", event => {
        const humanChoice = event.target.textContent.toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(humanChoice, computerSelection);
    });
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        notice.textContent = `You lost. Paper beats Rock.`;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissor') {
        computerScore++;
        notice.textContent = `You lost. Scissor beats Rock.`;

    }
    else if (humanChoice === 'scissor' && computerChoice === 'rock') {
        computerScore++;
        notice.textContent = `You lost. Rock beats scissor.`;

    }
    else if (humanChoice === computerChoice) {
        notice.textContent = `Tie.`;

    }
    else {
        humanScore++;
        notice.textContent = `You won. ${humanChoice} beats ${computerChoice}.`;
    }
    checkWinCondition();
    results.textContent = `Score:\nYou: ${humanScore}\nComp: ${computerScore}`;
}

function checkWinCondition() {
    if (humanScore == 5) {
        notice.textContent = `You Win!`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        notice.textContent = `Computer Wins!`;
        humanScore = 0;
        computerScore = 0;
    }

}
