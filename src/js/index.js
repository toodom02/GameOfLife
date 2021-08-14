
const startMenu = document.getElementById('start-menu');
const startButton = document.getElementById('start-button');
const userInput = document.getElementById('user-input');
const resInput = document.getElementById('res-input');


startMenu.classList.remove('hidden');
startButton.onclick = () => {
    startMenu.classList.add('hidden');
    if (userInput.checked) startCapturingInput();
    setup();
};

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getResolution() {
    return 50 - resInput.value;
}