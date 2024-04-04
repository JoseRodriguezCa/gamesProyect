import { gameRestart } from "../GameRestart/GameRestart";
import "./Checked.css";

export const checked = (flippedCards) => {
  const id1 = flippedCards[0];
  const id2 = flippedCards[1];

  console.log(id1);
  console.log(id2);
  console.log("Dos cartas volteadas");
  if (id1 === id2) {
    document.querySelectorAll(`[data-id="${id1}"]`).forEach((item) => {
        item.closest(".grid-item-memo").classList.add("selected-card");
    });
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
    pWinner.innerText = "¡Has Ganado!";
    divWinner.append(pWinner, btnWinner);
    divGame.append(divWinner);
    gameRestart(imgFolderDuplicated)
  }
  return true;
};
