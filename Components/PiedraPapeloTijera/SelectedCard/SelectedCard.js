import { checkedWinner } from '../Checked/Checked';
import { rpsData } from '../RpsData/RpsData';
import './SelectedCard.css'


export const computerUserSelect = (e, element) => {
    const target = e.target; 
    target.classList.add("seleccionado");
    if(selectedCard(e, element) === true){
        setTimeout(() => {
            const divComputer = document.querySelector('.div-computer');
            const existingImgComputer = divComputer.querySelector('.img-selected-computer');
            const randomIndex = Math.floor(Math.random() * rpsData.length);
            checkedWinner(element,rpsData[randomIndex] )
            if(existingImgComputer) {
                existingImgComputer.src = rpsData[randomIndex].img;
            }else {
                const computerImage = document.createElement("img");
                computerImage.className = 'img-selected-computer';
                computerImage.src = rpsData[randomIndex].img;
                divComputer.append(computerImage);
            }
        }, 500);
    }
}

export const selectedCard = (e, element) => {
    const divUser = document.querySelector('.div-user');
    const divImgUser = document.querySelector('.div-img-user')
    const existingImg = divUser.querySelector('.img-selected-user');
    if (existingImg) {
        divImgUser.style.pointerEvents = "none";
        existingImg.src = element.img;
    } else {
        const ImgSelectedUser = document.createElement('img');
        ImgSelectedUser.className = 'img-selected-user';
        ImgSelectedUser.src = element.img;
        divUser.append(ImgSelectedUser);
        divImgUser.style.pointerEvents = "none";
    }
    return true
}

