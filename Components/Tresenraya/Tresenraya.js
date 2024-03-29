import { handleSelector, setJugador } from './Events/Events';
import './Tresenraya.css'




const divApp = document.querySelector('#app')

export const tresEnRaya = (players) => {

    const divContainer = document.createElement('div');
    const divGame = document.createElement('div');
    const divSelector = document.createElement('div');
    const divImgs = document.createElement('div');
    const pIndication = document.createElement('p')
    const imgPlayer1 = document.createElement('img');
    const imgPlayer2 = document.createElement('img');
    divGame.className = 'div-game';
    divSelector.className = 'div-Selector'
    divContainer.className = 'div-container'
    pIndication.className = 'p-indication'
    imgPlayer1.className = 'img-1'
    imgPlayer2.className = 'img-2'
    pIndication.innerText = 'Elige con quien jugar'
    imgPlayer1.src = players[0].img;
    imgPlayer2.src = players[1].img;
    divImgs.append(imgPlayer1, imgPlayer2)
    for (const player of players) {
        const divPlayers = document.createElement('div')
        const img = document.createElement('img')
        let score = document.createElement('p')
        score.className = "score-text"
        divPlayers.className = "div-players"
        score.innerText = player.score;
        img.src = player.img
        divPlayers.append(img,score)
        divSelector.append(pIndication,divImgs);
        divContainer.append(divSelector,divPlayers)
    }
    for (let i = 0; i < 9; i++){
            const cell = document.createElement('div');
            const imgCell = document.createElement('img');
            cell.classList.add('grid-item');
            cell.append(imgCell)
            divGame.append(cell)
    }
    divApp.append(divContainer,divGame)
    selectPlayer()
    handleSelector()
    
};


export const selectPlayer = () => {
    const divSelector = document.querySelector('.div-Selector')
    const img2 = document.querySelector('.img-2')
    const img1 = document.querySelector('.img-1')
    img2.addEventListener('click',() => {
        if (img2) {
            setJugador(1);
            divSelector.classList.add("oculto")
        }
    })
    img1.addEventListener('click',() => {
        if (img1) {
            setJugador(0);
            divSelector.classList.add("oculto")
        }
    })
}