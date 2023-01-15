//DOM Elements
const timer = document.querySelector("#timer");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const btn = document.querySelector("#btn");
const start = document.querySelector(".fa-circle-play");
const pause = document.querySelector(".fa-circle-pause");
const stopWatch = document.querySelector(".fa-stopwatch-20");
let runTimer;
remainingSeconds = 0;

//Event listner
start.addEventListener("click", play);
pause.addEventListener("click", pausee);
stopWatch.addEventListener("click", watch);

function play() {
  start.classList.add("active");
  pause.classList.remove("stopActive");

  if (remainingSeconds === 0) return removeActive();

  runTimer = setInterval(() => {
    remainingSeconds--;
    showTimer();

    if (remainingSeconds <= 0) {
      timeOut();
    }
  }, 1000);
}

//Pause the timer
function pausee() {
  start.classList.remove("active");
  pause.classList.add("stopActive");
  clearInterval(runTimer);
}

//Time calculation method
function showTimer() {
  let min = Math.floor(remainingSeconds / 60);
  let sec = remainingSeconds % 60;
  minute.textContent = min.toString().padStart(2, "0");
  second.textContent = sec.toString().padStart(2, "0");
}

//End the timer
function timeOut() {
  timer.innerHTML = "Time Out";
  clearInterval(runTimer);
}

//Take user value in minutes
function watch() {
  const inputMinutes = prompt("Enter number of Minutes:");

  if (inputMinutes < 60) {
    remainingSeconds = inputMinutes * 60;
    showTimer();
  }
}

function removeActive() {
  start.classList.remove("active");
  pause.classList.remove("stopActive");
}
