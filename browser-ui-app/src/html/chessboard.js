export function createChessboard() {
    const chessboard = document.getElementById('chessboard');
    chessboard.innerHTML = ''; 

    const initialPosition = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
    ];
    
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = 'chess-square';
            
            if ((row + col) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }
            
            square.textContent = initialPosition[row][col];
            
            square.dataset.row = row;
            square.dataset.col = col;
            
            square.addEventListener('click', function() {
                if (this.textContent && !selectedSquare) {
                    
                    selectedSquare = this;
                    this.classList.add('selected');
                    console.log(`Selected piece: ${this.textContent} at ${row},${col}`);
                } else if (selectedSquare && selectedSquare !== this) {
                    
                    makeMove(selectedSquare, this);
                    selectedSquare.classList.remove('selected');
                    selectedSquare = null;
                } else if (selectedSquare === this) {
                    
                    this.classList.remove('selected');
                    selectedSquare = null;
                }
            });

            chessboard.appendChild(square);
        }
    }
}

function makeMove(fromSquare, toSquare) {
    const piece = fromSquare.textContent;
    const fromPos = `${fromSquare.dataset.row},${fromSquare.dataset.col}`;
    const toPos = `${toSquare.dataset.row},${toSquare.dataset.col}`;
    
    console.log(`Moving ${piece} from ${fromPos} to ${toPos}`);
    
    
    toSquare.textContent = piece;
    fromSquare.textContent = '';
    
    
}

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Page loaded, creating chessboard...');
});
