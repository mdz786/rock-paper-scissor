

function getComputerChoice(){
    let randomNumner = Math.random();
    if(randomNumner < 0.36){
        return "rock";
    }
    else if(randomNumner < 0.67){
        return "paper";
    }
    else{
        return "scissor";
    }
}

//function test(){
//    return "rock";
//}

//  working el rey zees (both) 

//function test1(){
    //let rock = "rock";
   //if(test().length === rock.length
    //){
    //    console.log('yep working');
    //}
   // else{
   //     console.log('nope');
  //  }
//}

function getPlayerChoice(){
    return prompt("enter either R/P/C");
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