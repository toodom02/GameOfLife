function handleInput(x, y) {
    const xsq = Math.floor(x / res);
    const ysq = Math.floor(y / res);
    grid[xsq][ysq] == 0 ? grid[xsq][ysq] = 1 : grid[xsq][ysq] = 0;
}

function onMouseInput(e) {
    handleInput(e.clientX, e.clientY);
}

function onTouchInput(e) {
    const touch = e.touches[0];
    handleInput(touch.clientX, touch.clientY);
}

function startCapturingInput() {
    window.addEventListener('mousemove', onMouseInput);
    window.addEventListener('click', onMouseInput);
    window.addEventListener('touchstart', onTouchInput);
    window.addEventListener('touchmove', onTouchInput);
}

function stopCapturingInput() {
    window.removeEventListener('mousemove', onMouseInput);
    window.removeEventListener('click', onMouseInput);
    window.removeEventListener('touchstart', onTouchInput);
    window.removeEventListener('touchmove', onTouchInput);
}
