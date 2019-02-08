const rollerA = document.getElementById("roller1");
const rollerB = document.getElementById("roller2");
const scoreUpdater1 = document.getElementById("score1");
const infoUpdater1 = document.getElementById("info1");
const scoreUpdater2 = document.getElementById("score2");
const infoUpdater2 = document.getElementById("info2");
const diceImg = document.getElementById("dice");
const winUpdater1 = document.getElementById("wins1");
const winUpdater2 = document.getElementById("wins2");
const winner = document.getElementById("winner");
const newRound = document.getElementById("round");
let turn = true;
let scoreA = 0;
let wins1 = 0;
let scoreB = 0;
let wins2 = 0;


rollerA.addEventListener("click", () => {
    let num = (Math.floor(Math.random() * 6 ) + 1);
    diceImg.style.display = "block";
    console.log(num);
    if(num == 1){
        scoreA = 0;
        scoreUpdater1.textContent = scoreA;
        diceImg.src = "/img/dice1.png";
        infoUpdater1.textContent = "You rolled a 1! You score has been reset."
        turn = false;
        turnCount();  
    } else if(num == 2) {
        scoreA += 2;
        scoreUpdater1.textContent = scoreA;
        diceImg.src = "/img/dice2.png";
        infoUpdater1.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        turn = false;
        turnCount();
        gameCheck();
    } else if(num == 3) {
        scoreA += 3;
        scoreUpdater1.textContent = scoreA;
        diceImg.src = "/img/dice3.png";
        infoUpdater1.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        turn = false;
        turnCount();
        gameCheck();
    } else if(num == 4){
        scoreA += 4
        scoreUpdater1.textContent = scoreA;
        diceImg.src = "/img/dice4.png";
        infoUpdater1.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        turn = false;
        turnCount();
        gameCheck();
    } else if(num == 5){
        scoreA += 5
        scoreUpdater1.textContent = scoreA;
        diceImg.src = "/img/dice5.png";
        infoUpdater1.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        turn = false;
        turnCount();
        gameCheck();
    } else if(num == 6) {
        scoreA += 6
        scoreUpdater1.textContent = scoreA;
        diceImg.src = "/img/dice6.png";
        infoUpdater1.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        turn = false;
        turnCount();
        gameCheck();
    }
});

rollerB.addEventListener("click", () => {
    let num = (Math.floor(Math.random() * 6 ) + 1);
    diceImg.style.display = "block";
    console.log(num);
    if(num == 1){
        scoreB = 0;
        scoreUpdater2.textContent = scoreB;
        diceImg.src = "/img/dice1.png";
        infoUpdater2.textContent = "You rolled a 1! You score has been reset."
        turn = true;
        turnCount();
    } else if(num == 2) {
        scoreB += 2;
        scoreUpdater2.textContent = scoreB;
        diceImg.src = "/img/dice2.png";
        infoUpdater2.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        turn = true;
        turnCount();
        gameCheck();
    } else if(num == 3) {
        scoreB += 3;
        scoreUpdater2.textContent = scoreB;
        diceImg.src = "/img/dice3.png";
        infoUpdater2.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        turn = true;
        turnCount();
        gameCheck();
    } else if(num == 4){
        scoreB += 4
        scoreUpdater2.textContent = scoreB;
        diceImg.src = "/img/dice4.png";
        infoUpdater2.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        turn = true;
        turnCount();
        gameCheck();
    } else if(num == 5){
        scoreB += 5
        scoreUpdater2.textContent = scoreB;
        diceImg.src = "/img/dice5.png";
        infoUpdater2.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        turn = true;
        turnCount();
        gameCheck();
    } else if(num == 6) {
        scoreB += 6
        scoreUpdater2.textContent = scoreB;
        diceImg.src = "/img/dice6.png";
        infoUpdater2.textContent = `You rolled a ${num}! ${num} has been added to your score.`
        turn = true;
        turnCount();
        gameCheck();
    }
});

function turnCount() {
    if(turn == true ){
        rollerB.disabled = true;
        rollerA.disabled = false;
    } else {
        rollerA.disabled = true;
        rollerB.disabled = false;
    }
}

function gameCheck() {
    if(scoreA >= 20) {
        rollerA.disabled = true;
        rollerB.disabled = true;
        infoUpdater1.textContent = `Congratulations Player 1 you made it to 20!`
        infoUpdater2.textContent = `You lose, better luck next time.`
        wins1++;
        winUpdater1.textContent = wins1;
        scoreA = 0;
        scoreB = 0
        scoreUpdater1.textContent = scoreA;
        scoreUpdater2.textContent = scoreB;
        winner.textContent = "Player 1 WINS!"
        diceImg.src = "/img/trophySmall.png"
        newRound.style.display = "block"
    } else if (scoreB >= 20) {
        rollerA.disabled = true;
        rollerB.disabled = true;s
        infoUpdater2.textContent = `Congratulations Player 2 you made it to 20!`
        infoUpdater1.textContent = `You lose, better luck next time.`
        wins2++;
        winUpdater2.textContent = wins2;
        scoreA = 0;
        scoreB = 0
        scoreUpdater1.textContent = scoreA;
        scoreUpdater2.textContent = scoreB;
        winner.textContent = "Player 2 WINS!"
        diceImg.src = "/img/trophySmall.png"
        newRound.style.display = "block"
    }
}

function nextRound() {
    rollerB.disabled = true;
    rollerA.disabled = false;
    newRound.style.display = "none";
    winner.textContent = "";
    diceImg.style.display = "none;"
}

function resetGame() {
    if(confirm("WARNING \nThis will reset your game as well as your wins. \nAre you sure you want to continue?")) {
        wins1 = 0;
        winUpdater1.textContent = wins1;
        scoreA = 0;
        scoreUpdater1.textContent = scoreA;
        wins2 = 0;
        winUpdater2.textContent = wins1;
        scoreB = 0;
        scoreUpdater2.textContent = scoreB;
        diceImg.style.display = "none"
        turn = true;
        turnCount();
    } else {
        alert("Reset Cancelled.");
    }
};