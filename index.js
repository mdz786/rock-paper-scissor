

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

function getPlayerChoice(){
    return prompt("enter either rock/paper/scissor");
}

function play(PlayerChoice,ComputerChoice){
    if(PlayerChoice.length == ComputerChoice.length){
        console.log("The game has been Tied PLAY AGAIN...!");
    }
    if(PlayerChoice.length == 4){
        if(ComputerChoice.length == 5){
            console.log(`you choose ${PlayerChoice}
             computer WON n choose ${ComputerChoice}`);
        }
    }
    if(PlayerChoice.length == 5){
        if(ComputerChoice.length == 4){
            console.log(`you WON n choose ${PlayerChoice}
            computer choose ${ComputerChoice}`);
        }
    }
    if(PlayerChoice.length == 4){
        if(ComputerChoice.length == 7){
            console.log(`you WON n choose ${PlayerChoice}
            computer choose ${ComputerChoice}`);
        }
    }
    if(PlayerChoice.length == 7){
        if(ComputerChoice.length == 4){
            console.log(`you choose ${PlayerChoice}
            computer WON n choose ${ComputerChoice}`);
        }
    }
    if(PlayerChoice.length == 5){
        if(ComputerChoice.length == 7){
            console.log(`you choose ${PlayerChoice}
            computer WON n choose ${ComputerChoice}`);
        }
    }
    if(PlayerChoice.length == 7){
        if(ComputerChoice.length == 5){
            console.log(`you WON n choose ${PlayerChoice}
            computer choose ${ComputerChoice}`);
        }
    }
}

function game(playCopy){
    for(let i = 1;i<=5;i++){
        playCopy(getPlayerChoice(),getComputerChoice());
        console.log(`You Played ${i} times`);
    }
}

game(play);