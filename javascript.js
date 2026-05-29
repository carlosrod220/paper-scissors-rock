let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 5;



function playRound(humanChoice,computerChoice) {

    if (humanChoice === 'paper' && computerChoice === 'paper') {
       console.log("It's a paper tie!");
    }
    else if (humanChoice === 'paper' &&  computerChoice === 'rock') {
        console.log('You win! Paper beats rock!');
        humanScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
       console.log('You lose! scissors cuts paper!');
       computerScore++;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! rock beats paper!');
        humanScore++;
    }
    else if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log("It's a rock tie!");    
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper'){
        console.log('You lose! paper beats rock!');
        computerScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! rock beats scissors');
        computerScore++
    }
    else if (humanChoice ==='scissors' && computerChoice === 'scissors') {
        console.log("It's a scissors tie!")
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! scissors cut paper!')
        humanScore++;
    }

}   


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);


console.log('Computer Score: ' + ' ' + computerScore);
console.log('Your Score: ' + ' ' + humanScore); 













function randomInt(max) {
    return Math.floor(Math.random(3) * max);
}

function getComputerChoice() { 
   let computerChoice;
   if (randomInt(3) === 0) {
    computerChoice = 'paper';
   }
   else if (randomInt(3) === 1){
    computerChoice = 'rock';
   }
   else if (randomInt(3) === 2) {
    computerChoice = 'scissors';
   }
   return computerChoice;
}

function getHumanChoice() {
   let humanChoice =  prompt('rock, paper or scissors: ');
    return humanChoice; 
}



