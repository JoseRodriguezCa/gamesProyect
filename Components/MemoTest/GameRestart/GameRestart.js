import { MemoTest } from "../MemoTest"

export const gameRestart = () => {
    const restartBtn = document.querySelector('.div-winner button')
    restartBtn.addEventListener('click', MemoTest)
}