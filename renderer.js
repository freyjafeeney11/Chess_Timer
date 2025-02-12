let timer1 = 600; // Player 1 countdown (10 minutes = 600 seconds)
let timer2 = 600; // Player 2 countdown (10 minutes = 600 seconds)
let interval1;    // Player 1 timer interval
let interval2;    // Player 2 timer interval
let isRunning1 = false; // Player 1 timer state (running or stopped)
let isRunning2 = false; // Player 2 timer state (running or stopped)

const startStopButton1 = document.getElementById('startStopButton1');
const startStopButton2 = document.getElementById('startStopButton2');
const timerDisplay1 = document.getElementById('timerDisplay1');
const timerDisplay2 = document.getElementById('timerDisplay2');

// Function to format the time in mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Function to start/stop Player 1's timer
startStopButton1.addEventListener('click', () => {
  if (isRunning1) {
    clearInterval(interval1);
    isRunning1 = false;
  } else {
    interval1 = setInterval(() => {
      if (timer1 > 0) {
        timer1--;
        timerDisplay1.textContent = formatTime(timer1); // Display time in mm:ss format
      } else {
        clearInterval(interval1);
        isRunning1 = false;
        window.location.href = "timesup.html";
      }
    }, 1000);
    isRunning1 = true;
  }
});

// Function to start/stop Player 2's timer
startStopButton2.addEventListener('click', () => {
  if (isRunning2) {
    clearInterval(interval2);
    isRunning2 = false;
  } else {
    interval2 = setInterval(() => {
      if (timer2 > 0) {
        timer2--;
        timerDisplay2.textContent = formatTime(timer2); // Display time in mm:ss format
      } else {
        clearInterval(interval2);
        isRunning2 = false;
        window.location.href = "timesup2.html";
      }
    }, 1000);
    isRunning2 = true;
  }
});
