let res = 10;
let grid, cols, rows, colours;

// creates 2d 0 array
function makeArray(cols, rows) {
    const x = new Array(cols);
    for (let i = 0; i < x.length; i++) {
        x[i] = new Array(rows).fill(0);
    }
    return x
}

function setup() {
    res = getResolution();
    cols = Math.floor(canvas.width / res);
    rows = Math.floor(canvas.height / res);
    grid = makeArray(cols, rows);
    colours = makeArray(cols, rows);

    // randomly set grid
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (Math.random() < 0.5 ? 0 : 1 == 1) grid[i][j] = 1;
        }
    }

    draw()
}

function getColour(x, y) {
    let colour = colours[x][y];
    let r = 0, g = 0, b = 0;
    if (colour < 100) r = colour;
    else if (colour > 200) {
        r = 100;
        g = 100;
        b = colour - 200;
    } else {
        r = 100;
        g = colour - 100;
    }
    return [r, g, b];
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * res;
            let y = j * res;
            if (grid[i][j] == 1) {
                let [r, g, b] = getColour(i, j);
                //ctx.fillStyle = "Black";
                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                ctx.fillRect(x, y, res - 1, res - 1);
            }
        }
    }

    if (!isPaused()) reproduce();

    requestAnimationFrame(animate);
}

function sumOfNeighbours(x, y) {
    let sum = 0
    for (let i = - 1; i < 2; i++) {
        for (let j = - 1; j < 2; j++) sum += grid[(x + i + cols) % cols][(y + j + rows) % rows];
    }
    sum -= grid[x][y];
    return sum;
}


function reproduce() {
    let nextGeneration = makeArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let neighbours = sumOfNeighbours(i, j);
            if (grid[i][j] == 1 && (neighbours == 2 || neighbours == 3)) {
                nextGeneration[i][j] = 1;
                colours[i][j] = (colours[i][j] + 1) % 455;
            }
            else if (grid[i][j] == 0 && neighbours == 3) {
                nextGeneration[i][j] = 1;
                colours[i][j] = 0;
            }
            else {
                nextGeneration[i][j] = 0;
                colours[i][j] = 0;
            }
        }
    }
    grid = nextGeneration;
}

// slows framerate
let frame = 0;
let frameLimit = 3;
function animate() {
    if (started) {
        frameLimit = getFramerate();
        frame++
        if (frame % frameLimit == 0) draw();
        else requestAnimationFrame(animate);
    }
}

