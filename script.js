let s, p = 0, b = 1
let min = 30
let sec = 0
let isPause = false;

let timer = document.body.querySelector(".timer");
let startbt = document.querySelector(".start");

function format(min, sec) {
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
}

function startTimer() {
    s = setInterval(updateTimer, 1000)
}

function updateTimer() {
    timer.textContent = format(min, sec);

    if (min == 0 && sec == 0) {
        timer.textContent = format(min, sec);
        clearInterval(s);
        setTimeout(() => {
            if (p == 0) {
                alert("Times UP, Take a Break");
                breakBT();
            } else {
                alert("Times UP, Get Back to Work");
                pomodoroBT();
            }
        }, 1000);
    }
    else if (sec > 0) {
        sec--;
    }
    else {
        sec = 59;
        min--;
    }
}

function startPause() {
    if (isPause == false) {
        startbt.textContent = "Pause";
        isPause = true;
        startTimer();
    } else {
        startbt.textContent = "Start";
        isPause = false;
        clearInterval(s);
    }
}

function breakBT() {
    if (b == 1) {
        document.body.classList.toggle("invert");
        min = 5;
        sec = 0;
        p = 1;
        b = 0;
        clearInterval(s);
        isPause = false;
        startbt.textContent = "Start";
        timer.textContent = format(min, sec);
    }
}
function pomodoroBT() {
    if (p == 1) {
        document.body.classList.toggle("invert");
        min = 30;
        sec = 0;
        p = 0;
        b = 1;
        clearInterval(s);
        isPause = false;
        startbt.textContent = "Start";
        timer.textContent = format(min, sec);
    }
}

document.querySelector(".pomodoro").addEventListener("click", pomodoroBT)

document.querySelector(".break").addEventListener("click", breakBT)

startbt.addEventListener("click", startPause)