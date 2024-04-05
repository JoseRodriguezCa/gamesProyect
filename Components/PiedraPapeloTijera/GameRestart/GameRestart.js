import './GameRestart.css'


export const gameRestart = (ganador) => {
    const divApp = document.querySelector('#app')
    const divRestart = document.createElement('div')
    const pRestart = document.createElement('p')
    const buttonRestart = document.createElement('button')
    pRestart.innerText = ganador
    divRestart.className = 'div-restart'
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
    imgUser.forEach(element => {
        element.classList.remove('seleccionado')
    });
    divImgUser.style.pointerEvents = "auto";
if(divRestart){
    divRestart.remove()
}
}

