import { CreateCards } from './CreateCard/CreateCard';
import { imgFolder } from './ImgFolder/ImgFolder'
import './MemoTest.css'

let score = 0;


export const MemoTest = () => {
    const bodyApp = document.querySelector('#app');
    const scores = document.createElement('p')
    const divGame = document.createElement('div');
    scores.innerText = `PUNTUACION: ${score}`;
    bodyApp.innerHTML = "";
    divGame.className = 'div-game-memo';
    scores.className = 'scores'
    const imgFolderDuplicated = [...imgFolder, ...imgFolder];
    bodyApp.append(scores,divGame);
    shuffleArray(imgFolderDuplicated);
    CreateCards(imgFolderDuplicated);
}


export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


export const sumScore = () => {
    score++
    console.log(score)
    const scores = document.querySelector('.scores')
    scores.innerText = `PUNTUACION: ${score}`;
}