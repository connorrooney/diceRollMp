const rollBtn = document.getElementById("roller");
const scoreUpdater = document.getElementById("score");
const infoUpdater = document.getElementById("info");
const diceImg = document.getElementById("dice");
const resetGame = document.getElementById("reset");
const winUpdater = document.getElementById("wins");
let player1Score = 0;
let player1Wins = 0;
let player2Score = 0;
let player2Wins = 0;


roller.addEventListener("click", () => {
    let num = (Math.floor(Math.random() * 6 ) + 1);
    diceImg.style.display = "block";
    console.log(num);
    if(num == 1){
        score = 0;
        scoreUpdater.textContent = score;
        diceImg.src = "/img/dice1.png";
        infoUpdater.textContent = "You rolled a 1! You score has been reset."
    } else if(num == 2) {
        score += 2;
        scoreUpdater.textContent = score;
        diceImg.src = "/img/dice2.png";
        infoUpdater.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        gameCheck();
    } else if(num == 3) {
        score += 3;
        scoreUpdater.textContent = score;
        diceImg.src = "/img/dice3.png";
        infoUpdater.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        gameCheck();
    } else if(num == 4){
        score += 4
        scoreUpdater.textContent = score;
        diceImg.src = "/img/dice4.png";
        infoUpdater.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        gameCheck();
    } else if(num == 5){
        score += 5
        scoreUpdater.textContent = score;
        diceImg.src = "/img/dice5.png";
        infoUpdater.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        gameCheck();
    } else if(num == 6) {
        score += 6
        scoreUpdater.textContent = score;
        diceImg.src = "/img/dice6.png";
        infoUpdater.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        gameCheck();
    }
});

function gameCheck() {
    if(score >= 20) {
        infoUpdater.textContent = `Congratulations you made it to 20!`
        wins++;
        winUpdater.textContent = wins;
        score = 0
        scoreUpdater.textContent = score;
        diceImg.style.display = "none"
    }
}

resetGame.addEventListener('click', () => {
    if(confirm("WARNING \nThis will reset your game as well as your wins. \nAre you sure you want to continue?")) {
        wins = 0;
        winUpdater.textContent = wins;
        score = 0;
        scoreUpdater.textContent = score;
        diceImg.style.display = "none"
    } else {
        prompt("Reset Cancelled.")
    }
})