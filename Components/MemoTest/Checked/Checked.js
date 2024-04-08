import { gameRestart } from "../GameRestart/GameRestart";
import { sumScore } from "../MemoTest";
import "./Checked.css";

export const checked = (flippedCards) => {
  const id1 = flippedCards[0];
  const id2 = flippedCards[1];
  if (id1 === id2) {
    document.querySelectorAll(`[data-id="${id1}"]`).forEach((item) => {
        item.closest(".grid-item-memo").classList.add("selected-card");
    });
    sumScore()
  }
  const gridItems = document.querySelectorAll(".grid-item-memo");
  let allSelected = true;
  for (const item of gridItems) {
    if (item.classList.contains("selected-card")) {
      item.style.pointerEvents = "none";
    } else {
      allSelected = false;
    }
  }
  return allSelected;
};

export const winner = (flippedCards,imgFolderDuplicated) => {
  if (checked(flippedCards) === true) {
    const divGame = document.querySelector(".div-game-memo");
    const divWinner = document.createElement("div");
    const pWinner = document.createElement("p");
    const btnWinner = document.createElement("button");
    btnWinner.innerText = "¡Jugar de nuevo!";
    divWinner.className = "div-winner";
    divWinner.classList.add('div-restart')
    btnWinner.id = 'restartButton'
    pWinner.innerText = "¡Has Ganado!";
    divWinner.append(pWinner, btnWinner);
    divGame.append(divWinner);
    gameRestart(imgFolderDuplicated)
  }
  return true;
};
