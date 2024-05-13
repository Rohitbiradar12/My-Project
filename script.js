let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const compChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

const showWinner = (userWin,userChoice,computerChoice) => {
     if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
     }else{
       compScore++;
       compScorePara.innerText = compScore;
       msg.innerText = `You Lose ${computerChoice} beats ${userChoice}`;
       msg.style.backgroundColor = "red";
     }
}

const playGame = (userChoice) => {
  console.log("user choice is", userChoice);
  const computerChoice = compChoice();
  console.log("commputer choose ",computerChoice);
if(userChoice === computerChoice){
    msg.innerText = "game is draw";
    msg.style.backgroundColor = "black"
}else if(userChoice === "rock"){
    let userWin = true;
    if(userChoice === "rock"){
        userWin = computerChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        userWin = computerChoice === "scissors" ? false : true;
    }else{
        userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,computerChoice);
}


};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    console.log("button was clicked", userChoice);
    playGame(userChoice);
  });
});
