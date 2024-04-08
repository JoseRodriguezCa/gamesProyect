
import { MemoTest } from '../MemoTest/MemoTest';
import { PiedraPapeloTijera } from '../PiedraPapeloTijera/PiedraPapeloTijera';
import { players } from '../Tresenraya/Check/Check';
import { tresEnRaya } from '../Tresenraya/Tresenraya';
import './Header.css'


const headerEnlaces = [
    {
        name: 'Tres en raya',
        href: ()=> tresEnRaya(players)
    },
    {
        name: 'MemoTest',
        href: ()=> MemoTest()
    },
    {
        name: 'Piedra Papel o Tijera',
        href: ()=> PiedraPapeloTijera()
    }
]

export const header = () => {
    const header = document.createElement('header')
    const divContainer = document.createElement('div');
    const divLogo = document.createElement('div');
    const logo = document.createElement('img')
    const ulContainer = document.createElement('ul');
    header.classList.add('header');
    divContainer.className = 'h-div-container';
    divLogo.className = 'div-logo';
    ulContainer.className = 'ul-container'
    logo.src = 'https://res.cloudinary.com/dtgsaqjwa/image/upload/v1711758054/control-del-juego_la4wmx.png'
    for (const enlace of headerEnlaces) {
        const liHeader = document.createElement('li');
        const aHeader = document.createElement('a');
        liHeader.className = 'li-header'
        aHeader.innerText = enlace.name;
        liHeader.append(aHeader)
        ulContainer.append(liHeader);
        aHeader.addEventListener('click', (e) => {
            e.preventDefault();
            enlace.href();
        })
    }
    divLogo.append(logo)
    divContainer.append(divLogo,ulContainer);
    header.append(divContainer);
    return header;
}
