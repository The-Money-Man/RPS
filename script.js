const choice = ["Rock", "Paper", "Scissors"];

function computerPlay () {
    
    return choice[Math.floor(Math.random() * choice.length)];

}

function playRound (playerSelection, computerSelection) {
    let tie = "You tied!";
    let win = "You won!";
    let lost = "You lost!";

    computerSelection = computerPlay().toLowerCase();
    
    playerSelection = prompt("Choose rock, paper, or scissors!");
    playerSelection = playerSelection.toLowerCase();
    
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == computerSelection) {
        return tie + " You both chose " + playerSelection;
    }

    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")
        ) {
        return win + " " + playerSelection + " beats " + computerSelection;
    }

    else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "rock")
        ) {
        return lost + " " + computerSelection + " beats " + playerSelection;
    }

}

console.log(playRound());

function game () {
    console.log(playRound ()); 
    console.log(playRound ()); 
    console.log(playRound ()); 
    console.log(playRound ()); 
    console.log(playRound ()); 
}

game ();