// creating chessboard
const chessboard = document.querySelector('#chessboard');
for(let row= 0; row < 8; row++){
    for(let col =0; col < 8; col++){
        const square = document.createElement('div');
        // diffrentiating between black and white squares
        square.className = 'square' + ((row+col) % 2 == 0 ? 'white ': 'black');
        chessboard.appendChild(square);
    }
}

const pieces = {
    white: {
        king: 'k',
        queen: 'q',
        rook: 'r',
        bishoup: 'b',
        knight: 'k',
        pawn: 'p'
    },
    black: {
        king: 'k',
        queen: 'q',
        rook: 'r',
        bishoup: 'b',
        knight: 'k',
        pawn: 'p'
    },
};
const initialBoard = [
    ['r','n','b','q','k','b','n','r'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['r','n','b','q','k','b','n','r']
];