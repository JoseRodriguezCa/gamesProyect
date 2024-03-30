import { changeScore, renderGameOverButton } from '../RestartGame/RestartGame';
import './Check.css'

export let players = [
    {
        name:"X",
        score:0,
        img:'https://res.cloudinary.com/dtgsaqjwa/image/upload/v1711638070/letra-x_xcvhho.png'
    },
    {
        name:"O",
        score:0,
        img:'https://res.cloudinary.com/dtgsaqjwa/image/upload/v1711638169/letra-o_kqfiyp.png'
    },
    
]


export const checkWinner = (tablero) => {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const line of winningLines) {
        const [a, b, c] = line;
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            return tablero[a];
        }
    }
    return null;
};



export const checkResult = (tablero, marcadas, gameOver) => {
    let winner = null;
    for (const player of players) {
        winner = checkWinner(tablero);
        if (winner && winner === player.name) {
            player.score++;
            changeScore(players)
            return true;
        }
    }
    if (!winner && marcadas === 9) {
        return true;
    } else {
        return gameOver;
    }
};
