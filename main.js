const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');
let board = new Board();

// Calculate size of canvas from constants.
context.canvas.width = COLS * BLOCK_SIZE;
context.canvas.height = ROWS * BLOCK_SIZE;

function start() {
    board.getEmptyBoard();
    let piece = new Piece(context);
    piece.draw()

    board.piece = piece;
}