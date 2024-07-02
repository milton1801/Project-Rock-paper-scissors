console.log("Hi");


const options = [ "Rock", "Paper", "Sissors"]
function getComputerChoise(){
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log()
    return choice;

}

function checkWinner(playerSelection,computerSelection){ 
    if(playerSelection == computerSelection){
        return "Tie"
    }
    else if(
(playerSelection == "rock" && computerSelection == "scissors") || 
( playerSelection == "scissors " && computerSelection == " paper") || 
( playerSelection == " paper" && computerSelection == "rock")


    ){ 
        return "Player"
    }
    else { 
        return " Computer"
    }
}
        
    


function playRound(playerSelection,computerSelection) {
const result = checkWinner(playerSelection, computerSelection);
if(result ==" Tie"){
    return "It's a Tie!"

}
else if (result== "Player"){
    return ' You Win!'
}
else{ 
    return 'You Lose'
}

}

function getPlayerChoice(){ 
    let validatedInput= false;
    while(validatedInput == false){ 
        const choice = prompt( "Rock Paper Scissors");
        if(choice == null){ 
            continue;

        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){ 
            validatedInput = true;
            return choiceInLower;
        }
    }
}
function game() { 
    let scorePlayer = 0;
    let scorecomputer = 0;
    console.log("Welcome")
  
        const playerSelection = getPlayerChoice();
        const computerSelectionSelection = getComputerChoise;
        playRound(playerSelection, computerSelection);
        if( checkWinner(playerSelection,computerSelection)== "player" ){
            scorePlayer ++;
        }
        else if ( checkWinner( playerSelection,computerSelection)== "computer"){ 
            scoreComputer++;
        }
        


    }
game()
    








