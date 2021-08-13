
const playMenu = document.getElementById('play-menu');
const playButton = document.getElementById('play-button');


playMenu.classList.remove('hidden');
playButton.onclick = () => {
    // Play!
    playMenu.classList.add('hidden');
    setup();
};


function onGameOver() {
    playMenu.classList.remove('hidden');
}


const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const res = 10;

let grid;
let cols, rows;


function makeArray(cols, rows) {
    const x = new Array(cols);
    for (var i = 0; i < x.length; i++) {
        // initialised to false
        x[i] = new Array(rows).fill(0);
    }
    return x
}

function setup() {
    cols = Math.floor(canvas.width / res);
    rows = Math.floor(canvas.height / res);
    grid = makeArray(cols, rows);

    // randomly set grid
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (Math.random() < 0.5 ? 0 : 1 == 1) grid[i][j] = 1;
        }
    }

    draw()
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            var x = i * res;
            var y = j * res;
            if (grid[i][j] == 1) {
                ctx.fillStyle = "Black";
                ctx.fillRect(x, y, res - 1, res - 1);
            }
        }
    }

    reproduce()

}

function sumOfNeighbours(x, y) {
    return grid[x][(y + 1 + rows) % rows] + grid[x][(y - 1 + rows) % rows] +
        grid[(x + 1 + cols) % cols][y] + grid[(x - 1 + cols) % cols][y] +
        grid[(x + 1 + cols) % cols][(y + 1 + rows) % rows] + grid[(x + 1 + cols) % cols][(y - 1 + rows) % rows] +
        grid[(x - 1 + cols) % cols][(y + 1 + rows) % rows] + grid[(x - 1 + cols) % cols][(y - 1 + rows) % rows];

}

function reproduce() {
    var nextGeneration = makeArray(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            var neighbours = sumOfNeighbours(i, j);
            if ((grid[i][j] == 1 && (neighbours == 2 || neighbours == 3)) || (grid[i][j] == 0 && neighbours == 3)) nextGeneration[i][j] = 1;
            else nextGeneration[i][j] = 0;
        }
    }
    grid = nextGeneration;
    requestAnimationFrame(animate);
}

let frame = 0;
let frameLimit = 3;
function animate() {
    frame++
    if (frame % frameLimit == 0) draw();
    else requestAnimationFrame(animate);
}

