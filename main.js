const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

// Calculate size of canvas from constants.
context.canvas.width = COLS * BLOCK_SIZE;
context.canvas.height = ROWS * BLOCK_SIZE;

