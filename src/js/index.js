const startMenu = document.getElementById('start-menu');
const startButton = document.getElementById('start-button');
const userInput = document.getElementById('user-input');
const resInput = document.getElementById('res-input');

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

let started;

startButton.onclick = () => {
    started = true;
    startMenu.classList.add('hidden');
    settingsButton.classList.remove('hidden');
    if (userInput.checked) {
        startCapturingInput();
        userInput2.checked = true;
    }
    else userInput2.checked = false;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setup();
};

function getResolution() {
    return 50 - resInput.value;
}