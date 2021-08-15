const settingsButton = document.getElementById('settings-button');
const settingsMenu = document.getElementById('settings-menu');
const rateInput = document.getElementById('rate-input');
const userInput2 = document.getElementById('user-input2');
const pauseButton = document.getElementById('play-pause');
const pauseIcon = document.getElementById('pause-icon');
const playIcon = document.getElementById('play-icon');
const nextButton = document.getElementById('next-frame');
const clearButton = document.getElementById('clear-button');
const exitButton = document.getElementById('exit-button');

function openSettings() {
    settingsButton.checked = true;
    settingsMenu.classList.remove('hidden');
    userInput2.addEventListener("click", userInputClicked);
    pauseButton.addEventListener("click", pauseClicked);
    nextButton.addEventListener("click", nextClicked);
}

function closeSettings() {
    settingsMenu.classList.add('hidden');
    userInput2.removeEventListener("click", userInputClicked);
    pauseButton.removeEventListener("click", pauseClicked);
    nextButton.removeEventListener("click", nextClicked);
    settingsButton.checked = false;
}

settingsButton.onclick = () => {
    if (settingsButton.checked) closeSettings();
    else openSettings();
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

function nextClicked() {
    reproduce();
    draw(false);
}

clearButton.onclick = () => {
    grid = makeArray(cols, rows);
    colours = makeArray(cols, rows);
}

exitButton.onclick = () => {
    started = false;
    closeSettings();
    stopCapturingInput();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    settingsButton.classList.add('hidden');
    startMenu.classList.remove('hidden');
    pauseButton.checked = false;
    pauseIcon.classList.remove('hidden');
    playIcon.classList.add('hidden');
}

function getFramerate() {
    return 20 - rateInput.value;
}

function isPaused() {
    return pauseButton.checked;
}