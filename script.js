let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



const generateTarget = ()=> {
return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess)=> {
const humanDifference = Math.abs(targetGuess - humanGuess );
const computerDifference = Math.abs(targetGuess - computerGuess );

if (humanDifference < computerDifference) {
return 'Human won!'
} else if (computerDifference < humanDifference) {
return 'Computer won!'
} else {
return 'Human won!'
};
};

const updateScore = winner => {
if(winner === 'human'){
humanScore++;
}
else if (winner === 'computer'){
computerScore++;
}
};


const advanceRound = ()=>{
currentRoundNumber = currentRoundNumber + 1;
};