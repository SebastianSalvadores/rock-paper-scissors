function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    if(computerChoice === 1) return 'rock';
    else if (computerChoice === 2) return 'paper';
    else return 'scissors';
}

function playRound(playerSelection, computerSelection){
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

function game(){
    let playerSelection;
    let computerSelection;
    for(let i = 0; i < 5; i++){
        console.log(`Round #${i+1}`);
        do{
            playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        }while(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors');
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}