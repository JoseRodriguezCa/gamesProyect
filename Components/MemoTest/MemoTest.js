import { imgFolder } from './ImgFolder/ImgFolder'
import './MemoTest.css'
import {  selectCard, winner } from './selectCard/selectCard';




export const MemoTest = () => {
    const bodyApp = document.querySelector('#app');
    bodyApp.innerHTML = "";
    const divGame = document.createElement('div');
    divGame.className = 'div-game-memo';
    const imgFolderDuplicated = [...imgFolder, ...imgFolder];
    shuffleArray(imgFolderDuplicated);
    imgFolderDuplicated.forEach((img) => {
        const gridItem = document.createElement('div');
        const card = document.createElement('div')
        const frontCard = document.createElement('div');
        const backCard = document.createElement('div')
        const imgCard = document.createElement('img');
        gridItem.className = 'grid-item-memo';
        frontCard.className = 'front-card'
        backCard.className = 'back-card';
        card.className = "card"
        imgCard.src = img.img;
        imgCard.dataset.id = img.id;
        gridItem.addEventListener('click', (e) => selectCard(e,gridItem,img.id));
        backCard.append(imgCard)
        card.append(frontCard,backCard);
        gridItem.append(card)
        divGame.append(gridItem);
    });
    bodyApp.append(divGame);
}


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

