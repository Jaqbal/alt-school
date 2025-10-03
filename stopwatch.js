
let startTime; 
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
const timeDisplay = document.querySelector('.time-display');
const controlButton = document.querySelector('.control-button');


function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
}


function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        timeDisplay.textContent = formatTime(elapsedTime);
    }, 1000); 
    
    controlButton.textContent = 'stop';
    isRunning = true;
}

function stopTimer() {
    clearInterval(timerInterval);
    controlButton.textContent = 'start/stop';
    isRunning = false;
}

controlButton.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

document.querySelector('.clear-label').addEventListener('click', () => {
    stopTimer(); 
    elapsedTime = 0;
    timeDisplay.textContent = '00:00:00';
});
