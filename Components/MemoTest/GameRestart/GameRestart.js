import { shuffleArray } from "../MemoTest"

export const gameRestart = (imgFolderDuplicated) => {
    const restartBtn = document.querySelector('.div-winner button')
    if(restartBtn){
    restartBtn.addEventListener('click', (e) => Restart(imgFolderDuplicated))
    }
}




const Restart = (imgFolderDuplicated) => {
    const divWinner = document.querySelector('.div-winner')
    const gridItems = document.querySelectorAll(".grid-item-memo");
    for (const item of gridItems) {
    item.classList.remove('selected-card')
    item.style.pointerEvents = "auto";
    }
    if(divWinner){
    divWinner.remove()
    }
    console.log("esto pasa?");
    shuffleArray(imgFolderDuplicated)
}