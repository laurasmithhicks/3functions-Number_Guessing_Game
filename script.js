let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// 4 functions
//Everything should be named correctly or it will not work.

const generateTarget=()=>{
	return Math.floor(Math.random()*10);
};

const compareGuesses=(humanGuess,computerGuess,targetGuess)=>{
	const diffUser=Math.abs(targetGuess-humanGuess);
	const diffComputer=Math.abs(targetGuess-computerGuess);

	if (diffComputer<diffUser){
		return false;
	}
	else if (diffComputer>=diffUser){
		return true;
	}
};

const updateScore=(winner)=>{
	if (winner==='human'){
		humanScore+=1;
	}
	else if (winner==='computer'){
		computerScore+=1;
	}
};

const advanceRound=()=>{
	currentRoundNumber+=1;
};