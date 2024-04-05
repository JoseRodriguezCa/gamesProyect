import { printScore } from './Checked/Checked';
import { createCard } from './CreateCard/CreateCard';
import './PiedraPapeloTijera.css'

const divApp = document.querySelector('#app');
export const PiedraPapeloTijera = () => {
    divApp.innerHTML = "";
    const divContainer = document.createElement('div');
    const divUser = document.createElement('div')
    const divComputer = document.createElement('div')
    const divImgUser = document.createElement('div');
    const divImgComputer = document.createElement('div');
    divImgUser.className = 'div-img-user';
    divContainer.className = 'div-container-3'
    divImgComputer.className = 'div-img-computer';
    divComputer.className = 'div-computer'
    divUser.className = 'div-user'
    divUser.append(divImgUser)
    divComputer.append(divImgComputer)
    divContainer.append(divUser,divComputer);
    divApp.append(divContainer);
    printScore()
    createCard(divImgUser);
    createCard(divImgComputer);

}





