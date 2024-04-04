import { CreateCards } from './CreateCard/CreateCard';
import { imgFolder } from './ImgFolder/ImgFolder'
import './MemoTest.css'




export const MemoTest = () => {
    const bodyApp = document.querySelector('#app');
    bodyApp.innerHTML = "";
    const divGame = document.createElement('div');
    divGame.className = 'div-game-memo';
    const imgFolderDuplicated = [...imgFolder, ...imgFolder];
    bodyApp.append(divGame);
    shuffleArray(imgFolderDuplicated);
    CreateCards(imgFolderDuplicated)
}


export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
