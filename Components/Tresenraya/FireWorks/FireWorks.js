import './FireWorks.css'

export const createFireworks = () => {
    const fireworksContainer = document.createElement('div');
    fireworksContainer.className = 'fireworks-container';
    const divGame = document.querySelector('.div-game');
    divGame.appendChild(fireworksContainer);
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('img');
        firework.className = 'firework';
        firework.src = 'https://i.pinimg.com/originals/fc/76/2c/fc762c19cbdd1edaa1351d774c689ef2.png';
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        firework.style.left = `${randomX}px`;
        firework.style.top = `${randomY}px`;
        const animationDuration = Math.random() * 4 + 2; 
        const animationDelay = Math.random() * 8;
        firework.style.animation = `fireworks-animation ${animationDuration}s ${animationDelay}s infinite`;
        fireworksContainer.appendChild(firework);
    }

};