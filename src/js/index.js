
const startMenu = document.getElementById('start-menu');
const startButton = document.getElementById('start-button');


startMenu.classList.remove('hidden');
startButton.onclick = () => {
    startMenu.classList.add('hidden');
    startCapturingInput();
    setup();
};

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
