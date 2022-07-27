let validInput=true;
let playerWins = 0;
let computerWins = 0;

const btns = document.querySelectorAll('button');
const score = document.querySelector('.score');
const round = document.querySelector('.round');

btns.forEach((button)=>{
    button.addEventListener('click', function(e){
        playGame(button.className, computerPlay());
    });
})

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
        round.textContent = "The game was a tie! You both played " + playerMove
    } else if (playerMove=="Rock") {
        if (computerMove=="Scissors"){
            playerWins += 1;
            round.textContent = "You win! "+ playerMove + " beats " + computerMove
        } else if (computerMove=="Paper"){
            computerWins+=1;
            round.textContent = "You lose! "+ playerMove + " loses to " + computerMove
        }
    } else if (playerMove=="Paper"){
        if (computerMove=="Rock"){
            playerWins += 1;
            round.textContent = "You win! "+ playerMove + " beats " + computerMove
        } else if (computerMove=="Scissors"){
            computerWins+=1;
            round.textContent = "You lose! "+ playerMove + " loses to " + computerMove
        }
    }else if (playerMove=="Scissors"){
        if (computerMove=="Paper"){
            playerWins += 1;
            round.textContent = "You win! "+ playerMove + " beats " + computerMove
        } else if (computerMove=="Rock"){
            computerWins+=1;
            round.textContent = "You lose! "+ playerMove + " loses to " + computerMove
        }
    } else{        
        validInput=false;    
        round.textContent = "You entered something that was invalid, please try again!"
    }
    updateScore();
    if (playerWins ==5 && computerWins ==5){
        score.textContent="The game is over and it was a TIE!";
        playerWins = 0;
        computerWins = 0;
    }else if (playerWins >=5){
        
        score.textContent="The game is over and the winner was YOU!";
        playerWins = 0;
        computerWins = 0;
    }else if (computerWins>=5){
        
        score.textContent="The game is over and the winner was THE COMPUTER";
        playerWins = 0;
        computerWins = 0;
    }
}

function updateScore(){
    score.textContent="Player Points: " + playerWins + "\n Computer Points: "+ computerWins;
}