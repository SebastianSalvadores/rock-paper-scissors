function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    if(computerChoice === 1) return 'rock';
    else if (computerChoice === 2) return 'paper';
    else return 'scissors';
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === 'rock'){
        if(computerSelection === 'rock') return 0;
        else if(computerSelection === 'paper') return -1;
        else return 1;
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'rock') return 1;
        else if(computerSelection === 'paper') return 0;
        else return -1
    }else if(playerSelection === 'scissors'){
        if(computerSelection === 'paper') return 1;
        else if (computerSelection === 'rock') return -1;
        else return 0;
    }
}

function game(){
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let comScore = 0;
    let result;
    for(let i = 0; i < 5; i++){
        console.log(`Round #${i+1}`);
        do{
            playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        }while(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors');
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if(result === 0){
            console.log(`It's a tie! both selected ${computerSelection}.`);
        }else if(result === 1){
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
            playerScore++;
        }else{
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
            comScore++;
        }
    }
    console.log(`The game is over!
    Player won ${playerScore} times.
    Computer won ${comScore} times.`)
    if(playerScore > comScore) console.log(`YOU WON THE GAME! Congratulations :)`);
    else if(comScore > playerScore) console.log(`YOU LOST! Better luck next time.`);
    else console.log(`It's a tie! try again?`);
}