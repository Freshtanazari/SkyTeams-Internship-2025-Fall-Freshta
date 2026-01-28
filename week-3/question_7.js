function rockPaperScissor(userChoice){
    const validHands = ["scissor", "rock", "paper"]
    userChoice = String(userChoice).toLowerCase()

    if(! validHands.includes(userChoice)){
        throw new TypeError("Only acceptable inputs are: Rock, Paper, Scissor");
    }

    let computerChoice = validHands[Math.floor(Math.random() * 3)];

    console.log(computerChoice);

    if(userChoice === computerChoice){
        return "Draw"
    }else if(userChoice == "rock"){
        if(computerChoice == "paper"){
            return "you lost! My hand were " + computerChoice;
        }else{
            return "you won! My hand were " + computerChoice;
        }
    }else if (userChoice == "paper") {
        if(computerChoice == "rock"){
            return "you won! My hand were " + computerChoice;
        }else{
            return "You lost! My hand were " + computerChoice; 
        }
    }else if(userChoice == "scissor") {
        if(computerChoice == "rock"){
            return "You lost! My hand were " + computerChoice; 
        }else{
            return "you won! My hand were " + computerChoice; 
        }
    }
}
console.log(rockPaperScissor("paper"))