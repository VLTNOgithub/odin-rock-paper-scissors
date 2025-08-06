window.onload = () => {
	let humanScore = 0;
	let computerScore = 0;

	let round = 0;

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

	function playRound (humanChoice, computerChoice) {
		//setStatus("Human: " + humanChoice + "\nComputer: " + computerChoice);
		if (humanChoice == computerChoice) {
			setStatus(
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
			setStatus(
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
			setStatus(
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

		updateScore();
	};

	function endGameStatus() {
		if (humanScore > computerScore) {
			setStatus(`You win!\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
		} else if (humanScore < computerScore) {
			setStatus(`You lose!\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
		} else {
			setStatus(
				`It's a draw!\nPlayer: ${humanScore}\nComputer: ${computerScore}`
			);
		}
	}

	const statusText = document.querySelector("#status");
	const scoreText = document.querySelector("#score");

	const rock = document.querySelector("#rock");
	const paper = document.querySelector("#paper");
	const scissors = document.querySelector("#scissors");

	let endRound = Infinity;

	function setStatus(text) {
		statusText.innerHTML += `${text} \n<br>`;
	}

	function updateScore() {
		scoreText.innerHTML = `${humanScore} - ${computerScore}`;
	}

	function handleGame(choice) {
		round++;

		if (round >= endRound) {
			statusText.innerHTML = "";
			round = 0;
			endRound = Infinity;
			humanChoice = "";
			computerChoice = "";
			humanScore = 0;
			computerScore = 0;
			updateScore();
			return
		}

		if (humanScore < 6 || computerScore < 6) {
			playRound(choice, getComputerChoice());
			if (humanScore == 5 || computerScore == 5) {
				endGameStatus();
				endRound = round;
			}
		}
	}

	rock.onclick = () => { handleGame("rock") }
	paper.onclick = () => { handleGame("paper") }
	scissors.onclick = () => { handleGame("scissors") }
}