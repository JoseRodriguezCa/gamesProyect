import { header } from '../../Header/Header';
import { restartScore, setLocaleStorage } from '../../PiedraPapeloTijera/Checked/Checked';
import { principal } from '../Principal';
import './Form.css'


export const formInput = () => {
        const divApp = document.getElementById('app');
        divApp.innerHTML = ""; 
        const container = document.createElement('div');
        container.id = 'usernameContainer'; 
        divApp.append(container);
        const storedUsername = getLocaleStorage()
        const storedImg = localStorage.getItem('imglogo') 
        const form = document.createElement('form');
        form.classList.add('formulario');
        const heading = document.createElement('h2');
        heading.textContent = '¡Bienvenido!';
        form.append(heading);
        if (storedUsername) {
            const divUser = document.createElement('div');
            const pUser = document.createElement('p');
            divUser.append(pUser);
            divApp.append(divUser);
            pUser.innerText = storedUsername;
            pUser.className = 'p-user-form';
            form.append(divUser);
        } else {
            const label = document.createElement('label');
            label.setAttribute('for', 'username');
            label.textContent = 'Ingrese un Nombre de usuario';
            const input = document.createElement('input');
            form.append(label,input);
            input.setAttribute('type', 'text');
            input.setAttribute('id', 'username');
            input.setAttribute('name', 'username');
            input.setAttribute('required', '');
            input.setAttribute('maxlength', '9');
            input.placeholder = 'Ingrese Nombre de Usuario';
            const labelImg = document.createElement('label');
            form.append(labelImg);
            const imgInput = document.createElement('input');
            labelImg.setAttribute('for', 'img-profile');
            labelImg.textContent = 'Ingrese imagen de perfil';
            imgInput.setAttribute('type', 'text');
            imgInput.setAttribute('id', 'img-profile');
            imgInput.setAttribute('required', '');
            imgInput.placeholder = 'Ingrese URL en formato PNG';
            form.append(imgInput);
        }
        const button = document.createElement('button');
        button.setAttribute('type', 'submit'); 
        if(storedUsername){
            button.textContent = 'Cerrar Sesion'
            button.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.clear();
                restartScore()
                principal();
                header();
                const logoUser = document.querySelector('.div-logo img');
                logoUser.src = 'https://res.cloudinary.com/dtgsaqjwa/image/upload/v1711758054/control-del-juego_la4wmx.png';
            });
        }
        else{
            button.textContent = 'Iniciar Sesion';
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const input = document.getElementById('username');
                const imgInput = document.getElementById('img-profile');
                let logo;
                let username;
                if (input) {
                    username = input.value;
                    logo = imgInput.value;
                } else {
                    username = storedUsername;
                    logo = storedImg;
                }
                if(username !== "" && logo !== ""){
                    localStorage.setItem('username', username);
                    localStorage.setItem('imglogo', logo);
                    principal();
                    const logoUser = document.querySelector('.div-logo img')
                    logoUser.src = logo;
                }
            });
        }
        form.append(button);
        container.append(form);
}


export const getLocaleStorage = () =>  {
    return   localStorage.getItem('username')
}


