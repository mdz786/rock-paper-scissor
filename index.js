

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
rockButton.addEventListener('click',testRockButton(getComputerChoice()));

function testRockButton(ComputerSelection){
    if(ComputerSelection == rockButton.textContent){
        display.textContent = 'THE ROUND HAS BEEN TIED';
    }
    if(ComputerSelection == 'paper'){
        display.textContent = 'THE COMPUTER WON THIS ROUND';
    }
    if(ComputerSelection == 'scissor'){
        display.textContent = 'THE USER WON THIS ROUND';
    }

}





