import './CreateCard.css'
import { shuffleArray } from "../MemoTest";
import { selectCard } from "../selectCard/selectCard";

export const CreateCards = (imgFolderDuplicated) => {
    const divGame = document.querySelector('.div-game-memo');
    divGame.innerHTML = ""
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
        gridItem.addEventListener('click', (e) => selectCard(e, gridItem, img.id,imgFolderDuplicated));
        backCard.append(imgCard)
        card.append(frontCard,backCard);
        gridItem.append(card)
        divGame.append(gridItem);
    });
}
