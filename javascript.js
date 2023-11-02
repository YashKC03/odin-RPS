
const rpsArray = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const choice = rpsArray[Math.floor(Math.random() * rpsArray.length)]
    return choice
}

function winner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie"
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player"
    } else{
        return "Computer"
    }
}


function play(playerSelection, computerSelection){
    const result = winner(playerSelection, computerSelection)
    if(result == "Tie"){
        return "It's a tie!"
    }
    else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if(result == "Computer"){
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors")
        if(choice == null){
            continue
        }
        const choiceInLower = choice.toLowerCase()
        if(rpsArray.includes(choiceInLower)){
            validatedInput = true
            return choiceInLower
        }
    }
}

function game(){
    let scorePlayer = 0
    let scoreComputer = 0
    console.log("What's up?")
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice()
        const computerSelection = getComputerChoice()
       console.log(play(playerSelection, computerSelection))
       if(winner(playerSelection, computerSelection) == "Player"){
        scorePlayer++
       } 
       else if(winner(playerSelection, computerSelection) == "Computer"){
        scoreComputer++
       }
    }
    console.log("Game Over")
    if(scorePlayer > scorePlayer){
        console.log("Player Wins!")
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer Wins!")
    }
    else{
        console.log("Tie!")
    }

}


game()