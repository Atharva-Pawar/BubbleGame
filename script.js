let containerBottom = document.querySelector(".c-bottom");
let hitValue = document.querySelector("#hit");
let timeValue = document.querySelector("#time");
let scoreValue = document.querySelector("#score");

function bubbleFunc() {
    let bubbleCount = "";

    for (let i = 1; i <= 136; i++) {
        let ramdomNumber = Math.floor(Math.random() * 10);
        bubbleCount += `<div class="bubble">${ramdomNumber}</div>`;
    }

    containerBottom.innerHTML = bubbleCount;
}
bubbleFunc();

let randomeHit;
function hitFunc() {
    randomeHit = Math.floor(Math.random() * 10);
    hitValue.innerHTML = randomeHit;
}
hitFunc();

let timer = 60;
function timeFunc() {
    let timeInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            timeValue.innerHTML = timer;
        }
        else {
            clearInterval(timeInt);
            containerBottom.innerHTML = `<h1>Game Over...</h1>`;
            hitValue.innerHTML = ``;
        }
    }, 1000);
}
timeFunc();

let score = 0;
function incScore() {
    score += 10;
    scoreValue.innerHTML = score;
}

function scoreFunc() {
    containerBottom.addEventListener('click', function (e) {
        let clickTarget = Number(e.target.innerHTML);

        if (clickTarget === randomeHit) {
            incScore();
            hitFunc();
            bubbleFunc();
        }
        else {
            hitFunc();
            bubbleFunc();
        }
    })
}
scoreFunc();