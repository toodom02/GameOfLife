
const startMenu = document.getElementById('start-menu');
const startButton = document.getElementById('start-button');
const userInput = document.getElementById('user-input');
const resInput = document.getElementById('res-input');
const settingsButton = document.getElementById('settings-button');
const settingsMenu = document.getElementById('settings-menu');
const rateInput = document.getElementById('rate-input');
const userInput2 = document.getElementById('user-input2');
const pauseButton = document.getElementById('play-pause');
const pauseIcon = document.getElementById('pause-icon');
const playIcon = document.getElementById('play-icon');
const clearButton = document.getElementById('clear-button');

startMenu.classList.remove('hidden');
startButton.onclick = () => {
    startMenu.classList.add('hidden');
    settingsButton.classList.remove('hidden');
    if (userInput.checked) {
        startCapturingInput();
        userInput2.checked = true;
    }
    else userInput2.checked = false;
    setup();
};

settingsButton.onclick = () => {
    if (settingsButton.checked) {
        settingsMenu.classList.add('hidden');
        userInput2.removeEventListener("click", userInputClicked);
        pauseButton.removeEventListener("click", pauseClicked);
        settingsButton.checked = false;
    }
    else {
        settingsButton.checked = true;
        settingsMenu.classList.remove('hidden');
        userInput2.addEventListener("click", userInputClicked);
        pauseButton.addEventListener("click", pauseClicked);
    }
}

function userInputClicked() {
    if (userInput2.checked) startCapturingInput();
    else stopCapturingInput();
}

function pauseClicked() {
    if (pauseButton.checked) {
        pauseButton.checked = false;
        pauseIcon.classList.remove('hidden');
        playIcon.classList.add('hidden');
    } else {
        pauseButton.checked = true;
        pauseIcon.classList.add('hidden');
        playIcon.classList.remove('hidden');
    }
}

clearButton.onclick = () => {
    grid = makeArray(cols, rows);
    colours = makeArray(cols, rows);
}

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getResolution() {
    return 50 - resInput.value;
}

function getFramerate() {
    return 20 - rateInput.value;
}

function isPaused() {
    return pauseButton.checked;
}