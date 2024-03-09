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
//console.log(getPlayerChoice());
//let playerSelection = 
