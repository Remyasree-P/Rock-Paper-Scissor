const Player = document.getElementById("Player");
const Computer = document.getElementById("Computer");
const play = document.getElementById("play");
const Playerscore = document.getElementById("Playerscore");
const ComputerScore = document.getElementById("ComputerScore")
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const winner=document.getElementById("winner");
let images = [];
let values = [];
let PScore = 0;
let CScore = 0;
let attempts=0;
const maxAttempts=3;

function disableButtons(){
    rockButton.disabled=true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    play.textContent = "Game Over✅";
}
function rock() {
    if (attempts >= maxAttempts) return; 
    attempts++;
    const value = Math.floor(Math.random() * 3) + 1;
    values.push(value);
    images.push(`<img hight=80 width=80 src="../Img2/${value}.png">`);
    Player.textContent = "Player: rock";
    Computer.textContent = value === 1 ? "Computer:rock" : value === 2 ? "Computer:paper" : value === 3 ? "Computer:scissor" : "";
    if(value==1){
        play.textContent="It's a Tie,play again"
    }
    else if(value==2){
        CScore++;
        ComputerScore.textContent=`Computer Score is ${CScore}`
        play.textContent="Ooh Nooo!🫡"
    }
    else{
        PScore++;
        Playerscore.textContent=`player score is ${PScore} `;
        play.textContent="Nice play😀"
    }
    if (attempts === maxAttempts) disableButtons();
}
function paper() {
    if (attempts >= maxAttempts) return; 
    attempts++;
    const value = Math.floor(Math.random() * 3) + 1;
    values.push(value);
    images.push(`<img hight=80 width=80 src="../Img2/${value}.png">`);
    Player.textContent = "Player:paper";
    Computer.textContent = value === 1 ? "Computer:rock" : value === 2 ? "Computer:paper" : value === 3 ? "Computer:scissor" : "";
    if(value==2){
        play.textContent="It's a Tie,play again"
    }
    else if(value==1){
        PScore++;
        Playerscore.textContent=`player score is ${PScore} `;
        play.textContent="Nice play😀"
    }
    else{
        CScore++;
        ComputerScore.textContent=`Computer Score is ${CScore}`
        play.textContent="Ooh Nooo!🫡"
    }
    if (attempts === maxAttempts) disableButtons();
}

function scissors() {
    if (attempts >= maxAttempts) return; 
    attempts++;
    const value = Math.floor(Math.random() * 3) + 1;
    console.log(value);
    values.push(value);
    images.push(`<img hight=80 width=80 src="../Img2/${value}.png">`);
    Player.textContent = "Player:scissors";
    Computer.textContent = value === 1 ? "Computer:rock" : value === 2 ? "Computer:paper" : value === 3 ? "Computer:scissor" : "";
    if(value==3){
        play.textContent="It's a Tie,play again"
    }
    else if(value==1){
        CScore++;
        ComputerScore.textContent=`Computer Score is ${CScore}`
        play.textContent="Ooh Nooo!🫡"
    }
    else{
        PScore++;
        Playerscore.textContent=`player score is ${PScore} `;
        play.textContent="Nice play😀";
    }
    if (attempts === maxAttempts) disableButtons();
}

