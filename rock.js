let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const useridpara = document.querySelector("#user-id");
const compScorepara= document.querySelector("#comp-Score");

const genCompchoice = () => {
    const options =["rock","paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const drawGame = () => {
    
    msg.innerText ="It's a Draw!,play again";
msg.style.backgroundColor ="#081b31";
}

const showWinner = (userWin , userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userid;
    
        msg.innerText = 'you win ! ${userChoice} beats ${computerChoice}';
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorepara.innerText=comp-score;
    
        msg.innerText = 'you loose . ${computerChoice} beats ${computerChoice}';
        msg.style.backgroundColor = "red";
    }

}
const playgame = (userChoice) =>{
    console.log("user choice =",userChoice);
    //Generate computer choice
    const computerChoice = genCompchoice();
    console.log("computer choice= ",computerChoice);
    if(userChoice === computerChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = computerChoice === "paper" ? false : true;
    }
    else if (userChoice ==="paper"){
         userWin = computerChoice === "scissors"? false:true;
}else{
     userWin =computerChoice = "rock" ? false : true;
}
showWinner(userWin ,userChoice,computerChoice );
    }
};
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
   console.log("choice was clicked" ,userChoice);
   playgame(userChoice);
});
});