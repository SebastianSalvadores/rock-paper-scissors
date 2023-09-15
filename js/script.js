function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    if(computerChoice === 1) return 'rock';
    else if (computerChoice === 2) return 'paper';
    else return 'scissors';
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === 'rock'){
        if(computerSelection === 'rock') return `It's a tie! both selected Rock.`;
        else if(computerSelection === 'paper') return `You Lose! Paper beats Rock.`;
        else return `You Win! Rock beats Scissors.`;
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'rock') return `You Win! Paper beats Rock.`;
        else if(computerSelection === 'paper') return `It's a tie! both selected Paper.`;
        else return `You Lose! Scissors beats Paper.`
    }else if(playerSelection === 'scissors'){
        if(computerSelection === 'paper') return `You Win! Scissors beats Paper.`;
        else if (computerSelection === 'rock') return `You Lose! Rock beats Scissors.`;
        else return `It's a tie! both selected Scissors.`;
    }
}

const playerSelection = 'roCk';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));