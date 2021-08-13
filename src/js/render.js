const res = 10;
let grid, cols, rows, colours;

// creates 2d 0 array
function makeArray(cols, rows) {
    const x = new Array(cols);
    for (var i = 0; i < x.length; i++) {
        x[i] = new Array(rows).fill(0);
    }
    return x
}

function setup() {
    cols = Math.floor(canvas.width / res);
    rows = Math.floor(canvas.height / res);
    grid = makeArray(cols, rows);
    colours = makeArray(cols, rows);

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
                var colour = colours[i][j];
                var r, g, b = 0;
                if (colour < 100) r = colour;
                else if (colour > 200) {
                    r = 100;
                    g = 100;
                    b = colour - 200;
                } else {
                    r = 100;
                    g = colour - 100;
                }
                //ctx.fillStyle = "Black";
                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                ctx.fillRect(x, y, res - 1, res - 1);
            }
        }
    }

    reproduce()

}

function sumOfNeighbours(x, y) {
    let sum = 0
    for (var i = - 1; i < 2; i++) {
        for (var j = - 1; j < 2; j++) sum += grid[(x + i + cols) % cols][(y + j + rows) % rows];
    }
    sum -= grid[x][y];
    return sum;
}


function reproduce() {
    var nextGeneration = makeArray(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            var neighbours = sumOfNeighbours(i, j);
            if (grid[i][j] == 1 && (neighbours == 2 || neighbours == 3)) {
                nextGeneration[i][j] = 1;
                colours[i][j] = (colours[i][j] + 1) % 300;
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
    requestAnimationFrame(animate);
}

// slows framerate
let frame = 0;
let frameLimit = 3;
function animate() {
    frame++
    if (frame % frameLimit == 0) draw();
    else requestAnimationFrame(animate);
}
