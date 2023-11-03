let playerScore = 0
let computerScore = 0

const getComputerChoice = () => {
    const choicesArr = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random() * choicesArr.length)
    return choicesArr[randomNum]
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return `You tied! You both picked ${playerSelection}`
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++
        return "You lost! Rock beats scissors"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        return "You won! Scissors beats paper"
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++
        return "You lost! Paper beats rock"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        return "You won! Rock beats scissors"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++
        return "You lost! Scissors beats paper"
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++
        return "You won! Paper beats rock"
    }
}
const playerSelection = "rock";

const game = () => {
    for (let i = 0; i < 5; i++){
    const playerSelection = prompt("Choose: ", "Rock, Paper, Scissors").toLowerCase()
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    }

    if(playerScore > computerScore){
        return "You beat the computer!"
    }
    else if (playerScore < computerScore){
        return "You got beat by the computer!"
    } else{
        return "You tied with the computer!"
    }
}
console.log(game())

