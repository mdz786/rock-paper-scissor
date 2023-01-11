

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
//dont edit above code...(returns us the ComputerSelection!


//DOM events

const rockButton = document.querySelector('#idrock');
const display = document.querySelector('.display');
rockButton.addEventListener('click',() => compareRockButton(getComputerChoice()));



function compareRockButton(ComputerSelection){
    if(ComputerSelection == rockButton.textContent){
        display.textContent = `THE ROUND HAS BEEN TIED...! YOU BOTH CHOOSE *ROCK*`;
    }
    if(ComputerSelection == 'paper'){
        display.textContent = 'THE COMPUTER HAS WON THIS ROUND...! AS *PAPER* BEATS *ROCK*';
    }
    if(ComputerSelection == 'scissor'){
        display.textContent = 'THE USER HAS WON THIS ROUND...! AS *ROCK* BEATS *SCISSOR*';
    }

}

const paperButton = document.querySelector('#idpaper');
const scissorButton = document.querySelector('#idscissor');
paperButton.addEventListener('click',() => comparePaperButton(getComputerChoice()));
scissorButton.addEventListener('click',() => compareScissorButton(getComputerChoice()));

function comparePaperButton(ComputerSelection){
    if(ComputerSelection == paperButton.textContent){
        display.textContent = 'THE ROUND HAS BEEN TIED..! YOU BOTH CHOOSE *PAPER*';
    }
    if(ComputerSelection == 'scissor'){
        display.textContent = 'THE COMPUTER HAS WON THIS ROUND...! AS *SCISSOR* BEATS *PAPER* ';
    }
    if(ComputerSelection == 'rock'){
        display.textContent = 'THE USER HAS WON THIS ROUND...! AS *PAPER* BEATS *ROCK*';
    }

}

function compareScissorButton(ComputerSelection){
    if(ComputerSelection == scissorButton.textContent){
        display.textContent = 'THE ROUND HAS BEEN TIED...! YOU BOTH CHOOSE *SCISSOR*';
    }
    if(ComputerSelection == 'paper'){
        display.textContent = 'THE USER HAS WON THIS ROUND...! AS *SCISSOR* BEATS *PAPER*';
    }
    if(ComputerSelection == 'rock'){
        display.textContent = 'THE COMPUTER HAS WON THIS ROUND...! AS *ROCK* BEATS *SCISSOR*';
    }

}


