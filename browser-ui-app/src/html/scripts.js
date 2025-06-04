class Chess {

    constructor() {
        this.baseURL = 'http://localhost:8080';
    }

    // GET current FEN from server
    async getCurrentFEN() {
        try {
            const response = await fetch(`${this.baseURL}/api/position`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const fen = await response.text();
            console.log('Current FEN:', fen);
            return fen;
        } catch (error) {
            console.error('Error fetching FEN:', error);
            return null;
        }
    }

    
    async setfen(fenString) {
        console.log('Setting FEN:', fenString);
        try {
            const response = await fetch(`${this.baseURL}/api/position`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: fenString
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.text();
            console.log('FEN updated:', result);
            return true;
        } catch (error) {
            console.error('Error setting FEN:', error);
            return false;
        }
    }

    
    async makeMove(move) {
        try {
            const response = await fetch(`${this.baseURL}/api/move`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: move
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const newFEN = await response.text();
            console.log('Move made, new FEN:', newFEN);
            return newFEN;
        } catch (error) {
            console.error('Error making move:', error);
            return null;
        }
    }
}


const chess = new Chess();


document.addEventListener('DOMContentLoaded', async () => {
    console.log('Page loaded, fetching current position...');
    

    const currentFEN = await chess.getCurrentFEN();
    
    setfen("hello  world");
    
});

