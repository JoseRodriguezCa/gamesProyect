import { getLocaleStorage } from '../../Principal/Form/Form';
import { gameRestart } from '../GameRestart/GameRestart';
import './Checked.css'

let usuario = localStorage.getItem("user") || 0;
let ordenador = localStorage.getItem("ordenador") || 0;



export const checkedWinner = (elementUser, elementComputer) => {
    const divImgUser = document.querySelector('.div-img-user') 
    if (elementUser.counter.includes(elementComputer.name)) {
        setTimeout(() => {
            gameRestart("Gana el ordenador");
            ordenador++
            setLocaleStorage(ordenador,"ordenador")
            changeScore()
        }, 300);
        divImgUser.style.pointerEvents = "none";
    } 
    else if (elementUser.name === elementComputer.name) {
        setTimeout(() => {
            gameRestart("Es un empate");
        }, 300);
        divImgUser.style.pointerEvents = "none";
    } 
    else {
        setTimeout(() => {
            let nameUser = getLocaleStorage()
            gameRestart(`Gana  ${nameUser}`);
            usuario++
            setLocaleStorage(usuario,"user")
            changeScore()
        }, 300);
        divImgUser.style.pointerEvents = "none";
    }
}


export const PrintScore = () => {
    let nameUser = getLocaleStorage()
    const divUser = document.querySelector('.div-user');
    const divComputer = document.querySelector('.div-computer')
    const h1User = document.createElement('h1');
    const h1Computer = document.createElement('h1');
    h1User.className = 'h1-score-user'
    h1Computer.className = 'h1-score-computer'
    h1User.innerText = `${nameUser} = ${usuario}`
    h1Computer.innerText = `Ordenador = ${ordenador}`
    divUser.append(h1User)
    divComputer.append(h1Computer)
}

export const changeScore = () => {
    let nameUser = getLocaleStorage()
    const h1User = document.querySelector('.h1-score-user')
    const h1Computer = document.querySelector('.h1-score-computer')
    h1User.innerText = `${nameUser} = ${usuario}`
    h1Computer.innerText = `Ordernador = ${ordenador}`
}

export const restartScore = () => {
    let nameUser = getLocaleStorage()
    usuario = 0;
    ordenador = 0;
    const h1User = document.querySelector('.h1-score-user');
    const h1Computer = document.querySelector('.h1-score-computer');
    if(h1User){
        h1User.innerText = `${nameUser} = ${usuario}`;
    }
    if(h1Computer){
        h1Computer.innerText = `Ordernador = ${ordenador}`;
    }
}

export const setLocaleStorage = (score,userorcomputer) => {
    localStorage.setItem(userorcomputer, JSON.stringify(score))
}
