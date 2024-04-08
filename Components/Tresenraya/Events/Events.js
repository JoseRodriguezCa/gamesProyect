import { checkResult, players } from '../Check/Check';
import { renderGameOverButton } from '../RestartGame/RestartGame';
import './Events.css'



let tablero = [];
let gameOver = false;
let marcadas = 0;
let jugador ;
export const setJugador = (value) => {
    jugador = value;
};

export const setLet = (array,numMarcadas) => {
    tablero = array
    marcadas = numMarcadas
};

export const getTableroYMarcadas = () => {
    return {
        tablero: tablero,
        marcadas: marcadas,
        gameOver: gameOver
    };
};


export const handleSelector = (gameOver) => {
    const cells = document.querySelectorAll('.grid-item')
    cells.forEach((cell, i) => {
        cell.addEventListener('click', (e) => columSelected(e, i, gameOver))
        
    });
}

const columSelected = (e, i, gameOver) => {
        if (!gameOver && jugador != undefined) {
            for (const player of players) {
                const cell = e.target;
                if (!cell.classList.contains('selected')) {
                    const player = players[jugador % 2];
                    const img = cell.querySelector('img')
                    img.src = player.img;
                    cell.classList.add('selected');
                    tablero[i] = player.name;
                    jugador++;
                    marcadas++;
                    const resultado = checkResult(tablero, marcadas, gameOver);
                    if (resultado !== null) {
                        gameOver = resultado;
                        renderGameOverButton(gameOver,tablero, marcadas,jugador,players);
                    }
                }
            }
    }
}









