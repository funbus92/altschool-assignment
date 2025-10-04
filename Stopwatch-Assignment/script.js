let timer;
let seconds = 0, minutes = 0, hours = 0;
let isRunning = false;

const display = document.getElementById("display");
const toggleBtn = document.getElementById("toggle");
const clearBtn = document.getElementById("clear");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

toggleBtn.addEventListener("click", () => {
  if (!isRunning) {
    startTimer();
    isRunning = true;
  } else {
    stopTimer();
    isRunning = false;
  }
});

clearBtn.addEventListener("click", () => {
  stopTimer();
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
});

// Initialize display
updateDisplay();