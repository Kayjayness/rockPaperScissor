let playHandler = event => {
    startGame();
}

function roundForm() {
    let roundHandler = event => {
        event.preventDefault();
        numberRounds = document.querySelector("#numberRounds").value;
        document.querySelector(".submitRoundsForm").style.display = "none";
        console.log(numberRounds);
    }

    let roundSubmission = document.querySelector(".submitRoundsForm");
    roundSubmission.addEventListener("submit", roundHandler);
    
};

    
    
    

function startGame() {
    let playerScore = 0;
    let computerScore = 0;
    let numberRounds = null;

    document.querySelector(".playButton").style.display = "none";
    document.querySelector(".submitRoundsForm").style.display = "block";

    
    roundForm();
    console.log(numberRounds);
    
    
}



// function playRound(computer, player) {
//     if (player === computer) {
//         results.textContent = `Computer Chose ${computer}!\nIt's a tie, both had ${player}`;
//     }
//     else if (player === "rock" && computer === "scissor") {
//         results.textContent =`Computer Chose ${computer}!\nYou Win! ${player} beats ${computer}`;  
//         ++playerScore;      
//     }
//     else if (player === "scissor" && computer === "paper") {
//         results.textContent = `Computer Chose ${computer}!\nYou Win! ${player} beats ${computer}`;
//         ++playerScore;       
//     }
//     else if (player === "paper" && computer === "rock") {
//         results.textContent = `Computer Chose ${computer}!\nYou Win! ${player} beats ${computer}`;
//         ++playerScore;      
//     }
//     else {
//         results.textContent = `Computer Chose ${computer}!\nYou Lose! ${computer} beats ${player}`;
//         ++computerScore;
//     }
// }

// function startGame() {
    
//     let buttons = document.querySelectorAll(".gameButtons > button");
//     let rounds = document.querySelector(".rounds");
//     let currentRound = 1;
//     buttons.forEach(button => {
//         button.addEventListener("click", event => {
//            playRound(getComputerChoice(), event.target.id);
//            rounds.textContent = `Round ${currentRound}`;
//            if (currentRound == amountRounds) { 
//             document.querySelector(".theGame").style.display = "none";
//             document.querySelector(".playAgain").style.display = "block";
//             postResults();

//         }
//         ++currentRound;
//         })
//     });
    
// }

// function postResults () {
//     let endMessage = document.querySelector(".endMessage");
//     if(playerScore > computerScore) {
//         endMessage.textContent = `Congratulations, you won the game with a score of ${playerScore} to ${computerScore}`;
//     }
//     else if(computerScore > playerScore) {
//         endMessage.textContent = `Sorry, you lost the game with a score of ${playerScore} to ${computerScore}`;
//     }
//     else {
//         endMessage.textContent = `You ended the match in a draw of ${playerScore} to ${computerScore}`;
//     }
// }

// function getComputerChoice() {
//     let rng = Math.floor(Math.random() * 10);
//     if ((rng >= 0) && (rng <= 3)) {
//         return "rock";
//     }
//     else if ((rng >= 4) && (rng <= 6)) {
//         return "paper";
//     }
//     else if ((rng >= 7) && (rng <= 9)) {
//         return "scissor";
//     }
//     else {
//         return "Invalid roll";
//     }
// }



// start the game
let playButton = document.querySelector(".playButton");
document.querySelector(".playButton").style.display = "block";
playButton.addEventListener("click", playHandler);





let theGameUI = document.querySelector(".theGame");
let results = document.querySelector(".resultBanner");









