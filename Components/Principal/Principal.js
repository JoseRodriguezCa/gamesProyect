
import { formInput } from './Form/Form'
import './Principal.css'


export const principal = () => {
    formInput()
    explain()
}


const explain = () => {
    const container = document.getElementById('usernameContainer')
    const explanationsContainer = document.createElement('div');
    explanationsContainer.classList.add('explanations-container');
    
    const explanationsTitle = document.createElement('h3');
    explanationsTitle.textContent = 'Explicaciones';
    
    const explanationsContent = document.createElement('div');
    explanationsContent.classList.add('explanations-content');
    
    const backButtonExplanation = document.createElement('p');
    backButtonExplanation.textContent = 'Presione la foto de perfil para volver a inicio';
    
    const gamesSelectionExplanation = document.createElement('p');
    gamesSelectionExplanation.textContent = 'Seleccione uno de los juegos en el header';
    
    explanationsContent.append(backButtonExplanation, gamesSelectionExplanation);
    explanationsContainer.append(explanationsTitle, explanationsContent);
    
    container.append(explanationsContainer)
    }