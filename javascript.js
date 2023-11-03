let playerScore = 0
let computerScore = 0

const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const outcomeDiv = document.querySelector(".outcome")
const playerScoreSpan = document.querySelector(".player-score")
const computerScoreSpan = document.querySelector(".computer-score")

const getComputerChoice = () => {
    const choicesArr = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random() * choicesArr.length)
    return choicesArr[randomNum]
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        const p = document.createElement("p")
        p.innerText = `You tied! You both picked ${playerSelection}`
        outcomeDiv.appendChild(p)
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++
        const p = document.createElement("p")
        p.innerText =  "You lost! Rock crushes scissors"
        outcomeDiv.appendChild(p)

    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        const p = document.createElement("p")
        p.innerText = "You won! Scissors cuts paper"
        outcomeDiv.appendChild(p)

    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++
        const p = document.createElement("p")
        p.innerText = "You lost! Paper covers rock"
        outcomeDiv.appendChild(p)

    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        const p = document.createElement("p")
        p.innerText = "You won! Rock crushes scissors"
        outcomeDiv.appendChild(p)

    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++
        const p = document.createElement("p")
        p.innerText = "You lost! Scissors cuts paper"
        outcomeDiv.appendChild(p)

    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++
        const p = document.createElement("p")
        p.innerText = "You won! Paper covers rock"
        outcomeDiv.appendChild(p)

    }
}

const checkWinner = (playerScore, computerScore) => {
    if(playerScore === 5){
        const h2 = document.createElement("h2")
        h2.classList.add("player-won")
        h2.innerText = `You won ${playerScore} to ${computerScore} great job beating the computer!`
        outcomeDiv.append(h2)
    } 
    
    else if(computerScore === 5){
        const h2 = document.createElement("h2")
        h2.classList.add("computer-won")
        h2.innerText = `You lost ${playerScore} to ${computerScore} better luck next time...`
        outcomeDiv.append(h2)
    }
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = ` Player Score:  ${playerScore} |`
    computerScoreSpan.innerText = `Computer Score:  ${computerScore}`
}

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "rock"
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
})

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "paper"
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
})

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "scissors"
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
})

// const game = () => {
//     for (let i = 0; i < 5; i++){
//     const playerSelection = prompt("Choose: ", "Rock, Paper, Scissors").toLowerCase()
//     const computerSelection = getComputerChoice();
//     playRound(playerSelection, computerSelection);
//     }

//     if(playerScore > computerScore){
//         return "You beat the computer!"
//     }
//     else if (playerScore < computerScore){
//         return "You got beat by the computer!"
//     } else{
//         return "You tied with the computer!"
//     }
// }
// console.log(game())

