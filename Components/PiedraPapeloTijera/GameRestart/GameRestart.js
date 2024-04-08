import './GameRestart.css'


export const gameRestart = (ganador) => {
    const divApp = document.querySelector('#app')
    const divRestart = document.createElement('div')
    const pRestart = document.createElement('p')
    const buttonRestart = document.createElement('button')
    pRestart.innerText = ganador
    divRestart.className = 'div-restart'
    divRestart.style.opacity = 0;
    setTimeout(() => {
        divRestart.style.opacity = 1;
    }, 100);
    divRestart.classList.add('opacity-seleccionada')
    buttonRestart.className = 'button-restart'
    buttonRestart.id ='restartButton'
    buttonRestart.innerText = '¡Jugar de Nuevo!'
    buttonRestart.addEventListener('click', restart)
    divRestart.append(pRestart,buttonRestart)
    divApp.append(divRestart)
    
}



export const restart = () => {
    const divRestart = document.querySelector('.div-restart')
    const divImgUser = document.querySelector('.div-img-user')
    const imgUser = document.querySelectorAll('.div-img-user img')
    const ImgComputer = document.querySelectorAll('.div-img-computer img')
    const imgUserSelected = document.querySelector('.img-selected-user')
    const imgComputerSelected = document.querySelector('.img-selected-computer')
    imgUser.forEach(element => {
        element.classList.remove('seleccionado')
        if(imgUserSelected){
            imgUserSelected.classList.remove('opacity-seleccionada') 
            setTimeout(() => {
            imgUserSelected.remove()
            }, 200);
        }
    });
    ImgComputer.forEach(element => {
        element.classList.remove('seleccionado')
        if(imgComputerSelected){
            imgComputerSelected.classList.remove('opacity-seleccionada')
            setTimeout(() => {
            imgComputerSelected.remove()
            }, 200);
        }
    });
    divImgUser.style.pointerEvents = "auto";
if(divRestart){
    divRestart.style.opacity = 0;
    setTimeout(() => {
        divRestart.remove()
    }, 500);
}
}

