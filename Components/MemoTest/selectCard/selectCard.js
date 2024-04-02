import { winner } from '../Checked/Checked';
import './selectCard.css'

export let flippedCards = [];
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
    if(winner(flippedCards) === true)
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


