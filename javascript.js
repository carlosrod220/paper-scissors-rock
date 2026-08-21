
let computerScore = 0; 
let humanScore = 0;

const btnrock = document.getElementById('rock');
btnrock.addEventListener('click', getHumanChoice);

const btnpaper = document.getElementById('paper');
btnpaper.addEventListener('click', getHumanChoice);

const btnscissors = document.getElementById('scissors');
btnscissors.addEventListener('click', getHumanChoice);

const humantracker = document.createElement('div');
humantracker.id = "scoreres"
humantracker.textContent = "Your Score: " + humanScore;
document.body.appendChild(humantracker);

const computertracker = document.createElement('div');
computertracker.textContent = 'Computer Score: ' + computerScore;
document.body.appendChild(computertracker);


function getHumanChoice(event) {

    let humanChoice = event.target.textContent; 
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
    // console.log('Computer Score: ' + ' ' + computerScore);
    // console.log('Your Score: ' + ' ' + humanScore); 
}


function playRound(humanChoice, computerChoice) {

    if (humanChoice === 'paper' && computerChoice === 'paper') {
       console.log("It's a paper tie!");
    }
    else if (humanChoice === 'paper' &&  computerChoice === 'rock') {
        console.log('You win! Paper beats rock!');
        humanScore++;
        humantracker.textContent = "Your Score: " + humanScore;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
       console.log('You lose! scissors cuts paper!');
       computerScore++;
       computertracker.textContent = 'Computer Score: ' + computerScore;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! rock beats scissors!');
        humanScore++;
        humantracker.textContent = "Your Score: " + humanScore;
    }
    else if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log("It's a rock tie!");    
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper'){
        console.log('You lose! paper beats rock!');
        computerScore++;
        computertracker.textContent = 'Computer Score: ' + computerScore;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! rock beats scissors');
        computerScore++
        computertracker.textContent = 'Computer Score: ' + computerScore;
    }
    else if (humanChoice ==='scissors' && computerChoice === 'scissors') {
        console.log("It's a scissors tie!")
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! scissors cut paper!')
        humanScore++;
         humantracker.textContent = "Your Score: " + humanScore;
    }
}   

function randomInt(max) {
    return Math.floor(Math.random(3) * max);
}

function getComputerChoice() { 
  const computerChoice = randomInt(3);

  if (computerChoice === 0) {
    return 'paper';
  }
  else if (computerChoice === 1) {
    return 'rock';
  }
  else {
    return 'scissors';
  }
}


