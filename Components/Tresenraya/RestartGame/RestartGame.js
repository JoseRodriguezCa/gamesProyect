import { checkWinner } from "../Check/Check";
import { handleSelector, setJugador, setLet } from "../Events/Events";
import { createFireworks } from "../FireWorks/FireWorks";
import "./RestartGame.css";

export const restartGame = (gameOver, tablero, marcadas, jugador) => {
    gameOver = false;
    setJugador(undefined);
    setLet([], 0);
    tablero.length = 0;
    marcadas = 0;
    const divSelector = document.querySelector('.div-Selector');
    divSelector.classList.remove("oculto");
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => {
        cell.querySelector('img').src = '';
        cell.classList.remove('selected');
        cell.style.pointerEvents = "auto";
    });
    renderGameOverButton(false);
    handleSelector(gameOver);
};

export const renderGameOverButton = (gameOver, tablero, marcadas, jugador, players) => {
    if (gameOver) {
        if (!document.querySelector('.div-restart')) {
            const divGame = document.querySelector('.div-count');
            const divRestart = document.createElement('div');
            const pRestart = document.createElement('p');
            divRestart.className = 'div-restart oculto';
            if (checkWinner(tablero)) {
                document.querySelectorAll('.grid-item').forEach(item => {
                    item.style.pointerEvents = "none";
                });
                pRestart.innerText = `El jugador ${checkWinner(tablero)} ha ganado.`;
                createFireworks();
            } else {
                pRestart.innerText = `¡Tenemos un Empate!`;
            }
            const restartButton = document.createElement('button');
            restartButton.id = 'restartButton';
            restartButton.textContent = 'Reiniciar Partida';
            restartButton.addEventListener('click', (e) => restartGame(gameOver, tablero, marcadas, jugador));
            divRestart.append(pRestart, restartButton);
            divGame.appendChild(divRestart);
            setTimeout(() => {
                divRestart.classList.remove('oculto');
            }, 100);
        }
    } else {
        const existingRestartButton = document.querySelector('.div-restart');
        const existingfireworlds = document.querySelector('.fireworks-container');
        if (existingRestartButton) {
            existingRestartButton.classList.add('oculto');
            if (existingfireworlds) {
                existingfireworlds.classList.add('oculto');
            }
            setTimeout(() => {
                if (existingfireworlds) {
                    existingfireworlds.remove();
                }
                existingRestartButton.remove();
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