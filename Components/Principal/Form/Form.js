import './Form.css'


export const formInput = () => {
        const divApp = document.getElementById('app');
        divApp.innerHTML = ""; 
        const container = document.createElement('div');
        container.id = 'usernameContainer'; 
        divApp.appendChild(container);
        const form = document.createElement('form');
        form.classList.add('formulario');
        const heading = document.createElement('h2');
        heading.textContent = '¡Bienvenido!';
        form.appendChild(heading);
        const label = document.createElement('label');
        label.setAttribute('for', 'username');
        label.textContent = 'Nombre de usuario:';
        form.appendChild(label);
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'username');
        input.setAttribute('name', 'username');
        input.setAttribute('required', '');
        form.appendChild(input);
        const button = document.createElement('button');
        button.setAttribute('type', 'button'); 
        button.textContent = 'Ingresar';
        button.addEventListener('click', (e) => {
            e.preventDefault()
            input.preventDefault()
            const username = input.value;
            localStorage.setItem('username', username);
            console.log('Nombre de usuario guardado:', username);
        });
        form.appendChild(button);
        container.appendChild(form);
}
