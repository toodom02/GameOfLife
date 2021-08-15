<h1 align="center">
    <img src="src/static/glider.svg" width="100"> <br />
    Conway's Game of Life
</h1>

A simulation of John Conway's Game of Life cellular automaton, built with javascript.

## Rules

Each cell is one of two states: `Live` or `Dead`.

Every cell interacts with its eight neighbours.

At each step in time, the following transitions occur:

- Any live cell with fewer than two live neighbours dies
- Any live cell with two or three live neighbours lives
- Any live cell with more than three live neighbours dies
- Any dead cell with exactly three live neighbours becomes a live cell

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- MIT license
- Icons licensed from [FontAwesome](https://fontawesome.com/license) under the Creative Commons Attribution 4.0 International license