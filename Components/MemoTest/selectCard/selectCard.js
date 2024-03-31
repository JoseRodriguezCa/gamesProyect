

export const selectCard = (e, imgCard) => {
    const card = e.target;
    card.classList.toggle('flipped'); // Agregar una clase llamada 'selected' a la carta
    console.log(card);
}