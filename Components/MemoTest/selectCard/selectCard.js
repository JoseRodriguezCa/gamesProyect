import './selectCard.css'

let flippedCards = [];
let processingClick = false;

export const selectCard = (e, gridItem,idimgCard) => {
    const id = idimgCard

  if (processingClick || gridItem.classList.contains("flipped")) {
    return;
  }

  processingClick = true;
  gridItem.classList.add("flipped");
  flippedCards.push(id)

  if (flippedCards.length === 2) {
    if(winner() === true)
    {
      processingClick = true;
    }
    
    setTimeout(() => {
      const gridItems = document.querySelectorAll(".grid-item-memo");
      gridItems.forEach((item) => {
        item.classList.remove("flipped");
      });
      flippedCards = [];
      processingClick = false;
    }, 1000);
  } else {
    processingClick = false;
  }
};


export const checked = () => {
    const id1 = flippedCards[0]
    const id2 = flippedCards[1]
    console.log(id1);
    console.log(id2);
    console.log("Dos cartas volteadas");
    if (id1 === id2) {
        document.querySelectorAll(`[data-id="${id1}"]`).forEach((item) => {
            item.closest('.grid-item-memo').classList.add("selected-card");
        });
    }
    const gridItems = document.querySelectorAll(".grid-item-memo");
    for (const item of gridItems) {
        if (!item.classList.contains("selected-card")) {
            return false; 
        }
    }
    return true;
}

export const winner = () => {
  if(checked() === true){
    console.log(checked())
    console.log("gane");
      const divGame = document.querySelector('.div-game-memo')
      const divWinner = document.createElement('div')
      const pWinner = document.createElement('p')
      const btnWinner = document.createElement('button')
      btnWinner.innerText = '¡Jugar de nuevo!';
      divWinner.className = 'div-winner'
      pWinner.innerText = 'Ganaste Wachon'
      divWinner.append(pWinner,btnWinner)
      divGame.append(divWinner)
  }
  return true;
}