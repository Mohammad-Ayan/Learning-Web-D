let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "blue"]

let started = false;    //game start(No)
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {             // game will start 1 time
        console.log("Game Started");
        started = true;

        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 600);
}

function levelup() {
    userSeq = [];     //reset
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            levelup();
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> Press any key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 170);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");    // when button is pressed    
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {         // reset to new game
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}