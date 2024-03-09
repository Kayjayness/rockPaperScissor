function getComputerChoice() {
    let rng = Math.floor(Math.random() * 10);
    //console.log(rng);
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

function getPlayerChoice() {
    while (true) {
        let choice = prompt("Choose between ( rock, paper, scissor )");
        choice = choice.toLowerCase();
        switch(choice) {
            case "rock":
            case "paper":
            case "scissor":
                return choice;
            default:
                alert("Not a valid choice, please try again");
        }
    }
}

function playRound(computer, player) {
    if (player === computer) {
        alert(`It's a tie, both had ${player}`);
    }
    else if (player === "rock" && computer === "scissor") {
        alert(`You Win! ${player} beats ${computer}`);        
    }
    else if (player === "scissor" && computer === "paper") {
        alert(`You Win! ${player} beats ${computer}`);        
    }
    else if (player === "paper" && computer === "rock") {
        alert(`You Win! ${player} beats ${computer}`);        
    }
    else {
        alert(`You Lose! ${computer} beats ${player}`);
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
playRound(computerSelection, playerSelection);