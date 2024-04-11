import Swal from 'sweetalert2';
import { MemoTest } from '../MemoTest/MemoTest';
import { PiedraPapeloTijera } from '../PiedraPapeloTijera/PiedraPapeloTijera';
import { getLocaleStorage } from '../Principal/Form/Form';
import { players } from '../Tresenraya/Check/Check';
import { tresEnRaya } from '../Tresenraya/Tresenraya';
import './Header.css'
import { principal } from '../Principal/Principal';


export const headerEnlaces = [
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
    const header = document.createElement('header');
    const divContainer = document.createElement('div');
    const divLogo = document.createElement('div');
    const logo = document.createElement('img')
    const ulContainer = document.createElement('ul');
    header.classList.add('header');
    divContainer.className = 'h-div-container';
    divLogo.className = 'div-logo';
    ulContainer.className = 'ul-container'
    let imgLogo = localStorage.getItem('imglogo');
    if(imgLogo !== null){
        logo.src = imgLogo
    }else {
        logo.src = 'https://res.cloudinary.com/dtgsaqjwa/image/upload/v1711758054/control-del-juego_la4wmx.png'
    }
    divLogo.addEventListener('click', principal)
    for (const enlace of headerEnlaces) {
        const liHeader = document.createElement('li');
        const aHeader = document.createElement('a');
        liHeader.className = 'li-header'
        aHeader.innerText = enlace.name;
        liHeader.append(aHeader)
        ulContainer.append(liHeader);
        aHeader.addEventListener('click', (e) => {
            e.preventDefault();
            let userName = getLocaleStorage()
            if(userName){
                enlace.href();
            }else {
                Swal.fire({
                    title: 'Alerta',
                    text: 'Debes iniciar sesión primero',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    customClass: {
                        text: 'mi-clase-texto'
                    }
                });
            }
        })
    }
    divLogo.append(logo)
    divContainer.append(divLogo,ulContainer);
    header.append(divContainer);
    return header;
}
