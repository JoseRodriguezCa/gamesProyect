import { checkedWinner } from '../Checked/Checked';
import { rpsData } from '../RpsData/RpsData';
import './SelectedCard.css'

let count = 3;

export const restCount = () => {
    if(count > 0){
        count--;
    }
    const countdown = document.querySelector('.countdown')
    countdown.innerText = count;
}

export const countdown = (e,element) => {
    const divImgUser = document.querySelector('.div-img-user');
    const countdownContainer = document.createElement('div');
    const divApp = document.querySelector('#app')
    countdownContainer.className = 'countdown-container';
    divApp.append(countdownContainer);
    const countdown = document.createElement('div');
    divImgUser.style.pointerEvents = "none";
    countdown.className = 'countdown';
    countdown.innerText = 3;
    countdownContainer.append(countdown);
    const countdownInterval = setInterval(() => {
        restCount();
        if (count == 0) {
            countdownContainer.style.opacity = 0;
            clearInterval(countdownInterval);
            setTimeout(() => {
                countdownContainer.remove();
                count = 3;
            }, 1000);
            computerUserSelect(e, element)
        }
    }, 700);
};


export const computerUserSelect = (e, element) => {
    const target = e.target; 
    target.classList.add("seleccionado");
        if(selectedCard(e, element) === true){
                const divComputer = document.querySelector('.div-computer');
                const randomIndex = Math.floor(Math.random() * rpsData.length);
                checkedWinner(element,rpsData[randomIndex] )
                    const computerImage = document.createElement("img");
                    computerImage.className = 'img-selected-computer';
                    computerImage.src = rpsData[randomIndex].img;
                    const divImgComputer = document.querySelectorAll('.div-img-computer img').forEach(element => {
                        if(element.src == rpsData[randomIndex].img){
                            element.classList.add('seleccionado')
                        }
                    });
                    divComputer.append(computerImage);
                    setTimeout(() => {
                        computerImage.classList.add('opacity-seleccionada') 
                    }, 100);
    }
}

export const selectedCard = (e, element) => {
    const divUser = document.querySelector('.div-user');
    const divImgUser = document.querySelector('.div-img-user');
        const ImgSelectedUser = document.createElement('img');
        ImgSelectedUser.className = 'img-selected-user';
        ImgSelectedUser.src = element.img;
        divUser.append(ImgSelectedUser);
        divImgUser.style.pointerEvents = "none";
        setTimeout(() => {
            ImgSelectedUser.classList.add('opacity-seleccionada') 
        }, 100);
    return true;
}