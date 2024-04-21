let playerScore = null;
let computerScore = null;
let numberRounds = null;
let currentRound = 1;
let playButton = document.querySelector(".playButton");
let results = document.querySelector(".resultBanner");
let endMessage = document.querySelector(".endMessage");
let gameButtonEventListeners = [];

document.querySelector(".playButton").style.display = "block";
playButton.addEventListener("click", startGame);

function startGame() {
    document.querySelector(".playButton").style.display = "none";
    document.querySelector(".submitRoundsForm").style.display = "flex";
    roundForm();
    gameButtons();
}

function roundForm() {
    let roundHandler = event => {
        event.preventDefault();
        numberRounds = document.querySelector("#numberRounds").value;
        document.querySelector(".submitRoundsForm").style.display = "none";
        document.querySelector(".theGame").style.display = "block";
    }
    let roundSubmission = document.querySelector(".submitRoundsForm");
    roundSubmission.addEventListener("submit", roundHandler);
}

function getComputerChoice() {
    let rng = Math.floor(Math.random() * 10);
    if ((rng >= 0) && (rng <= 3)) {
        return "rock";
    } else if ((rng >= 4) && (rng <= 6)) {
        return "paper";
    } else if ((rng >= 7) && (rng <= 9)) {
        return "scissor";
    } else {
        return "Invalid roll";
    }
}

function playRound(computer, player) {
    if (player === computer) {
        results.textContent = `Computer Chose ${computer}!\nIt's a tie, both had ${player}`;
    } else if (player === "rock" && computer === "scissor") {
        results.textContent =`Computer Chose ${computer}!\nYou Win! ${player} beats ${computer}`;  
        ++playerScore;      
    } else if (player === "scissor" && computer === "paper") {
        results.textContent = `Computer Chose ${computer}!\nYou Win! ${player} beats ${computer}`;
        ++playerScore;       
    } else if (player === "paper" && computer === "rock") {
        results.textContent = `Computer Chose ${computer}!\nYou Win! ${player} beats ${computer}`;
        ++playerScore;      
    } else {
        results.textContent = `Computer Chose ${computer}!\nYou Lose! ${computer} beats ${player}`;
        ++computerScore;
    }
    checkRoundEnd();
}

function checkRoundEnd() {
    let rounds = document.querySelector(".rounds");
    rounds.textContent = `Round ${currentRound}`;
    if (currentRound == numberRounds) { 
        document.querySelector(".theGame").style.display = "none";
        postResults();
    }
    currentRound++;
}

function postResults() {
    if (playerScore > computerScore) {
        endMessage.textContent = `Congratulations, you won the game with a score of ${playerScore} to ${computerScore}`;
    } else if (computerScore > playerScore) {
        endMessage.textContent = `Sorry, you lost the game with a score of ${playerScore} to ${computerScore}`;
    } else {
        endMessage.textContent = `You ended the match in a draw of ${playerScore} to ${computerScore}`;
    }
    setTimeout(resetGame, 3000); 
}

function gameButtons() {
    let buttons = document.querySelectorAll(".buttons > button");
    buttons.forEach(button => {
        let gameButtonHandler = event => {
            playRound(getComputerChoice(), event.target.id);
        };
        button.addEventListener("click", gameButtonHandler);
        gameButtonEventListeners.push({ button: button, handler: gameButtonHandler });
    });
}

function resetGame() {
    gameButtonEventListeners.forEach(({ button, handler }) => {
        button.removeEventListener("click", handler);
    });
    gameButtonEventListeners = [];

    document.querySelector(".submitRoundsForm").reset();
    document.querySelector(".submitRoundsForm").style.display = "none";
    document.querySelector(".theGame").style.display = "none";
    document.querySelector(".rounds").textContent = "";

    playerScore = 0;
    computerScore = 0;
    currentRound = 1;
    numberRounds = null;

    document.querySelector(".playButton").style.display = "block";
    results.textContent = "";
    endMessage.textContent = "";
}
