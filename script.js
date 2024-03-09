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

//console.log(getComputerChoice());