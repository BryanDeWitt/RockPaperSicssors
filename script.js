//This are the variables

const choices = ["rock", "paper", "scissors"]
let pcChoice;
let playerChoiceNormal;
let playerChoice;
let playerScore = 0;
let pcScore = 0;
const drawAlert = "it\'s a draw!"
const winAlert = `so You win this round.`
const loseAlert = `so You lose this round.`

//Function to select randomly between rock paper and scissors

function pcSelection(){
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice]
}


//Function to compare choices, give points to winner and console log the result

function game(playerChoice, pcChoice){
    playerChoiceNormal = prompt("Select: Rock, Paper or Scissors");
    playerChoice = playerChoiceNormal.toLowerCase();
    pcChoice = pcSelection();
    if(playerChoice === pcChoice){
        return console.log(drawAlert);
    }else if(playerChoice === "rock" && pcChoice === "scissors"){
        playerScore++;
        return console.log("Rock beats Scissors" + " " + winAlert);
    }else if(playerChoice === "rock" && pcChoice === "paper"){
        pcScore++;
        return console.log("Paper beats Rock" + " " + loseAlert);
    }else if(playerChoice === "paper" && pcChoice === "rock"){
        playerScore++;
        return console.log("Paper beats Rock" + " " + winAlert);
    }else if(playerChoice === "paper" && pcChoice === "scissors"){
        pcScore++;
        return console.log("Scissors beats Paper" + " " + loseAlert);
    }else if(playerChoice === "scissors" && pcChoice === "paper"){
        playerScore++;
        return console.log("Scissors beats Paper" + " " + winAlert);
    }else if(playerChoice === "scissors" && pcChoice === "rock"){
        pcScore++;
        return console.log("Rock beats Scissors" + " " + loseAlert);
    }else{
        console.log("something went terribly wrong homie")
    }
}

//Loop to play the game until the pc or the player wins 5 times and console log the points

while(playerScore < 5 || pcScore < 5){
    game(playerChoice, pcChoice);
    console.log(`You have ${playerScore} points and pc has ${pcScore}`)
    if(playerScore === 5 || pcScore === 5) break; 
}

//Statement to console log the winner of the match

if(pcScore === 5){
    console.log("You lose wtf bro!");
}else if(playerScore === 5){
    console.log("you Win!!");
}
