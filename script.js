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

function getHumanChoice() {
    let choice = prompt("RPS?");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        alert(`You lost. Paper beats Rock.`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissor') {
        computerScore++;
        alert(`You lost. Scissor beats Rock.`);

    }
    else if (humanChoice = 'scissor' && computerChoice === 'rock') {
        computerScore++;
        alert(`You lost. Rock beats scissor.`);

    }
    else if (humanChoice === computerChoice) {
        alert(`Tie.`);

    }
    else {
        humanScore++;
        alert(`You won. ${humanChoice} beats ${computerChoice}.`)
    }
    console.log()
    playRound(humanChoice, computerChoice);
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    for (let i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection);
        alert(`Score:
        You: ${humanScore}
        Comp: ${computerScore}`);
    }
}
