class Board {

    getEmptyBoard() {
        return Array.from(
            {length: ROWS}, () => Array(COLS).fill(0)
        );
    }
}