import { formInput } from './Form/Form'
import './Principal.css'

const divApp = document.getElementById('app');
export const principal = () => {
    formInput()
    const nameUser = localStorage.getItem('username', username);
    const divUser = document.createElement('div');
    const pUser = document.createElement('p');
    divUser.append(pUser)
    divApp.append(divUser)
    pUser.innerText = nameUser;
    pUser.className = 'p-user'
}
