
import { rpsData } from '../RpsData/RpsData';
import { countdown } from '../SelectedCard/SelectedCard';
import './CreateCard.css'


export const createCard = (userocomputer) => {

    rpsData.forEach(element => {
    const imgCard = document.createElement('img')
        imgCard.src = element.img
        userocomputer.append(imgCard)
        imgCard.addEventListener('click', (e) => countdown(e, element))
        return imgCard
    }); 
}


