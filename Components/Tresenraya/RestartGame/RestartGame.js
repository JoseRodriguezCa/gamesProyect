import { handleSelector, setJugador, setLet } from "../Events/Events";
import "./RestartGame.css"

export const restartGame = (gameOver,tablero, marcadas,jugador) => {
    gameOver = false;
    setJugador("null")
    setLet([], 0, )
    tablero.length = 0;
    marcadas = 0;
    const divSelector = document.querySelector('.div-Selector')
    divSelector.classList.remove("oculto")
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => {
        cell.querySelector('img').src = '';
        cell.classList.remove('selected');
    });
    renderGameOverButton(false);
    handleSelector(gameOver)
};


export const renderGameOverButton = (gameOver,tablero, marcadas,jugador,players) => {
    if (gameOver) {
        if (!document.querySelector('.div-restart')) {
            const divGame = document.querySelector('.div-game')
            const divRestart = document.createElement('div')
            const pRestart = document.createElement('p')
            divRestart.className = 'div-restart'
            for (const player of players) {
                pRestart.innerText = `El jugador ${player.name} ha ganado.`
            }
            const restartButton = document.createElement('button');
            restartButton.id = 'restartButton';
            restartButton.textContent = 'Reiniciar Partida';
            restartButton.addEventListener('click',(e) => restartGame(gameOver,tablero, marcadas,jugador));
            divRestart.append(pRestart,restartButton)
            divGame.appendChild(divRestart);
        }
    } else {
        const existingRestartButton = document.querySelector('.div-restart');
        if (existingRestartButton) {
            existingRestartButton.classList.add('oculto');
            setTimeout(() => {
                existingRestartButton.remove()
            }, 500);

        }
    }
};


export const changeScore = (players) => {
    const scoreElements = document.querySelectorAll('.score-text');
    players.forEach((player, index) => {
        scoreElements[index].innerText = player.score;
    });
}