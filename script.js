function getComputerChoice() {
	randomNum = Math.floor(Math.random() * 3);
	if (randomNum == 0) {
		return "rock";
	} else if (randomNum == 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

function getHumanChoice() {
	input = prompt("Choose between rock, paper and scissors!");
	return input.toLowerCase();
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	let playRound = function (humanChoice, computerChoice, round) {
		//console.log("Human: " + humanChoice + "\nComputer: " + computerChoice);
		if (humanChoice == computerChoice) {
			console.log(
				"Round " +
				round +
				": Draw! Both used " +
				humanChoice[0].toUpperCase() +
				humanChoice.slice(1)
			);
		} else if (
			(humanChoice == "rock" && computerChoice == "paper") ||
			(humanChoice == "paper" && computerChoice == "scissors") ||
			(humanChoice == "scissors" && computerChoice == "rock")
		) {
			console.log(
				"Round " +
				round +
				": You lose! " +
				computerChoice[0].toUpperCase() +
				computerChoice.slice(1) +
				" beats " +
				humanChoice[0].toUpperCase() +
				humanChoice.slice(1)
			);
			computerScore++;
		} else {
			console.log(
				"Round " +
				round +
				": You win! " +
				humanChoice[0].toUpperCase() +
				humanChoice.slice(1) +
				" beats " +
				computerChoice[0].toUpperCase() +
				computerChoice.slice(1)
			);
			humanScore++;
		}
	};

	for (i = 1; i < 6; i++) {
		playRound(getHumanChoice(), getComputerChoice(), i);
	}
	if (humanScore > computerScore) {
		console.log(`You win!\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
	} else if (humanScore < computerScore) {
		console.log(`You lose!\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
	} else {
		console.log(
			`It's a draw!\nPlayer: ${humanScore}\nComputer: ${computerScore}`
		);
	}
}

playGame();