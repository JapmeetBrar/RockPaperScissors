let validInput=true;
let playerWins = 0;


function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    let compMove;
    switch (randNum){
        case 0:
            compMove="Rock";
            break;
        case 1:
            compMove="Paper";
            break;
        case 2:
            compMove="Scissors"
            break;
        default:
    }
    return compMove;
}

function playGame(playerSelection, computerSelection){
    let playerMove= playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase();
    let computerMove= computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1).toLowerCase()

    if (playerMove == computerMove){
        playerWins +=0.5;
        return ("The game was a tie! You both played " + playerMove);
    } else if (playerMove=="Rock") {
        if (computerMove=="Scissors"){
            playerWins += 1;
            return ("You win! "+ playerMove + " beats " + computerMove);
        } else if (computerMove=="Paper"){
            return ("You lose! "+ playerMove + " loses to " + computerMove);
        }
    } else if (playerMove=="Paper"){
        if (computerMove=="Rock"){
            playerWins += 1;
            return ("You win! "+ playerMove + " beats " + computerMove);
        } else if (computerMove=="Scissors"){
            return ("You lose! "+ playerMove + " loses to " + computerMove);
        }
    }else if (playerMove=="Scissors"){
        if (computerMove=="Paper"){
            playerWins += 1;
            return ("You win! "+ playerMove + " beats " + computerMove);
        } else if (computerMove=="Rock"){
            return ("You lose! "+ playerMove + " loses to " + computerMove);
        }
    } else{        
        validInput=false;    
        return ("You entered something that was invalid, please try again!");
    }
}

function game(){
    let i = 1;
    while (i<6) {
        userInput = prompt("Choose: Rock, Paper, or Scissors");
        console.log("Game " + i + " Results: " + playGame(userInput, computerPlay()));
        if (validInput == true){
            i++;
        }else{
            validInput = true;
        }
    }
    if (playerWins > 2.5){
        console.log ("You won the game! You won " + i + " Rounds!");
    } else if (playerWins < 2.5){
        console.log ("You lost the game! You only won " + i + " Rounds.");
    } else {
        console.log ("The game was a tie! You and the Computer won the same number of games!");
    }
}

game();

