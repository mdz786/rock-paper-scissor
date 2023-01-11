

function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber < 0.36){
        return "rock";
    }
    else if(randomNumber < 0.67){
        return "paper";
    }
    else{
        return "scissor";
    }
}
//dont edit above code...(returns us the ComputerSelection...!)


//DOM events

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const winnerDisplay = document.querySelector('.winner');
const win1disp = document.querySelector('.winnerDeclaration');

buttons.forEach((button) => {
    button.addEventListener('click' , (e) => {
        if(userScore < 5 && computerScore < 5){
            game(PlayerChoice = e.target.textContent , playRound);
            
        }
        
        declareWinner();
        
    });
});




//new

let userScore = 0;
let computerScore = 0;

function playRound(PlayerChoice,ComputerChoice){
   
        if(PlayerChoice.length == ComputerChoice.length){
            display.textContent = `This Round has been *TIED* you both choose ${PlayerChoice}`;
           
            
            
            
        }
        if(PlayerChoice.length == 4){
            if(ComputerChoice.length == 5){
                display.textContent = `The *COMPUTER* won this Round because ${ComputerChoice} beats ${PlayerChoice}`;
                ++computerScore;
                winnerDisplay.textContent = `USER : ${userScore} || COMPUTER : ${computerScore}`;
            
            
            }
        }
        if(PlayerChoice.length == 5){
            if(ComputerChoice.length == 4){
                display.textContent = `*YOU* won this Round because ${PlayerChoice} beats ${ComputerChoice}`;
                ++userScore;
                winnerDisplay.textContent = `USER : ${userScore} || COMPUTER : ${computerScore}`;
            
            
            }
        }
        if(PlayerChoice.length == 4){
            if(ComputerChoice.length == 7){
                display.textContent = `*YOU* won this Round because ${PlayerChoice} beats ${ComputerChoice}`;
                ++userScore;
                winnerDisplay.textContent = `USER : ${userScore} || COMPUTER : ${computerScore}`;
            
            
            }
        }
        if(PlayerChoice.length == 7){
            if(ComputerChoice.length == 4){
                display.textContent = `The *COMPUTER* won this Round because ${ComputerChoice} beats ${PlayerChoice}`;
                ++computerScore;
                winnerDisplay.textContent = `USER : ${userScore} || COMPUTER : ${computerScore}`;
            
            
            }
        }
        if(PlayerChoice.length == 5){
            if(ComputerChoice.length == 7){
                display.textContent = `The *COMPUTER* won this Round because ${ComputerChoice} beats ${PlayerChoice}`;
                ++computerScore;
                winnerDisplay.textContent = `USER : ${userScore} || COMPUTER : ${computerScore}`;
            
            
            }
        }
        if(PlayerChoice.length == 7){
            if(ComputerChoice.length == 5){
                display.textContent = `*YOU* won this Round because ${PlayerChoice} beats ${ComputerChoice}`;
                ++userScore;
                winnerDisplay.textContent = `USER : ${userScore} || COMPUTER : ${computerScore}`;
            
            
            }
        }
        

       
        
        
    }

   
function game(PlayerChoice , playRound){
    playRound(PlayerChoice , getComputerChoice());
    
    
}

function declareWinner(){
    if((userScore == 5)||(computerScore == 5)){
        if(userScore > computerScore ){
            win1disp.textContent = `YOU WON (reload the page to play again)`;
        }
        else if(userScore < computerScore){
            win1disp.textContent = `COMPUTER WON (reload the page to play again)`;
        }
        else{
            win1disp.textContent = `TIED MAAAN (reload the page to play again)`;
        }
    }
}
 




