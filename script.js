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
    ['p','p','p','p','p','p','p','p'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['P','P','P','P','P','P','P','P'],
    ['R','N','B','Q','K','B','N','R']
];

//placing pieces
const pieceMap = {
    r: pieces.black.rook,
    n: pieces.black.knight,
    b: pieces.black.bishop,
    q: pieces.black.queen,
    k: pieces.black.king,
    p: pieces.black.pawn,
    R: pieces.white.rook,
    N: pieces.white.knight,
    B: pieces.white.bishop,
    Q: pieces.white.queen,
    K: pieces.white.king,
    P: pieces.white.pawn
};
