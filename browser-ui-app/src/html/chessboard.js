

let initialPosition = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];
    
export let boardstate = initialPosition;

export function createChessboard() {
    const board = document.getElementById('chessboard');
    board.innerHTML = ''; 
    
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.style.backgroundColor = (row + col) % 2 === 0 ? '#f0d9b5' : '#b58863'; 
            square.textContent = boardstate[row][col] || '';
            square.dataset.row = row;
            square.dataset.col = col;

            
            board.appendChild(square);
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Page loaded, creating chessboard...');
});
