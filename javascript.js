function randomInt(max) {
    return Math.floor(Math.random(3) * max);
}


function getComputerChoice() {
   if (randomInt(3) === 0) {
    console.log('paper');
   }
   else if (randomInt(3) === 1){
    console.log('rock');
   }
   else {
    console.log('scissors');
   }
}

function getHumanChoice() {
   let choice =  prompt('rock, paper or scissors: ');
   return choice;
}

console.log(getHumanChoice());