import { checkedWinner } from '../Checked/Checked';
import { rpsData } from '../RpsData/RpsData';
import { computerUserSelect, selectedCard } from '../SelectedCard/SelectedCard';
import './CreateCard.css'


export const createCard = (userocomputer) => {

    rpsData.forEach(element => {
    const imgCard = document.createElement('img')
        imgCard.src = element.img
        userocomputer.append(imgCard)
        imgCard.addEventListener('click', (e) => computerUserSelect(e, element))
    }); 

}


