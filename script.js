function getComputerChoice() {
    let rng = Math.floor(Math.random() * 10);
    if ((rng >= 0) && (rng <= 3)) {
        return "rock";
    }
    else if ((rng >= 4) && (rng <= 6)) {
        return "paper";
    }
    else if ((rng >= 7) && (rng <= 9)) {
        return "scissor";
    }
    else {
        return "Invalid roll";
    }
}

let startHandler = event => {
    document.querySelector(".chooseRounds").style.display = "block";
    document.querySelector(".startButton").style.display = "none";
}

let roundHandler = event => {
    event.preventDefault();
    amountRounds = document.querySelector("#playRounds").value;
    document.querySelector(".theGame").style.display = "block";
    document.querySelector(".chooseRounds").style.display = "none";
    document.querySelector(".startButton").style.display = "none";
}

let startButton = document.querySelector(".startButton");
let roundSubmission = document.querySelector(".chooseRounds");
let amountRounds = null;
startButton.addEventListener("click", startHandler);
roundSubmission.addEventListener("submit", roundHandler);

document.querySelector(".theGame").style.display = "none";
document.querySelector(".chooseRounds").style.display = "none";

startHandler;

let buttons = document.querySelectorAll(".gameButtons > button");
let results = document.querySelector(".resultBanner");
buttons.forEach(button => {
    button.addEventListener("click", event => {
       let computersChoice = getComputerChoice();
       playRound(computersChoice, event.target.id);

    })
});


function playRound(computer, player) {
    if (player === computer) {
        results.textContent = `Computer Chose ${computer}!\nIt's a tie, both had ${player}`;
        return 2;
    }
    else if (player === "rock" && computer === "scissor") {
        results.textContent =`Computer Chose ${computer}!\nYou Win! ${player} beats ${computer}`;
        return 1;        
    }
    else if (player === "scissor" && computer === "paper") {
        results.textContent = `Computer Chose ${computer}!\nYou Win! ${player} beats ${computer}`;
        return 1;        
    }
    else if (player === "paper" && computer === "rock") {
        results.textContent = `Computer Chose ${computer}!\nYou Win! ${player} beats ${computer}`;
        return 1;        
    }
    else {
        results.textContent = `Computer Chose ${computer}!\nYou Lose! ${computer} beats ${player}`;
        return 0;
    }
}

function playGame () {
    let playerScore = 0;
    let computerScore = 0;
    let gameRounds = 5;
    for (let i = 1; i <= Infinity; ++i) { // made infinity for testing purposes
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(computerSelection, playerSelection);
        if(result === 1) {
            ++playerScore;
            continue;
        }
        else if(result === 0) {
            ++computerScore;
            continue;
        }
        else {
            continue;
        }
    }
    //postResults(computerScore, playerScore);
}

// function postResults (computerScore, playerScore) {
//     if(playerScore > computerScore) {
//         alert(`Congratulations, you won the game with a score of ${playerScore} to ${computerScore}`);
//     }
//     else if(computerScore > playerScore) {
//         alert(`Sorry, you lost the game with a score of ${playerScore} to ${computerScore}`);
//     }
//     else {
//         alert(`You ended the match in a draw of ${playerScore} to ${computerScore}`);
//     }
// }

// function playAgainPrompt () {
//     while(true) {
//         let playAgain = prompt("Would you like to play again? (Y/N)");
//         if(playAgain === "y" || playAgain === "Y") {
//             return true;
//         }
//         else if (playAgain === "n" || playAgain === "N") {
//             alert("Thank you for playing");
//             return false;
//         }
//         else {
//             alert("Invalid response, please try again");
//         }
//     }
// }



// let playAgain = true;
// while(playAgain) {
// playGame();
// playAgain = playAgainPrompt();
// }
