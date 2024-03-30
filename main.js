import { header } from './Components/Header/Header'
import { players } from './Components/Tresenraya/Check/Check'
import { tresEnRaya } from './Components/Tresenraya/Tresenraya'
import './style.css'
const body = document.body
const firstChild = document.body.firstChild;
const h = header()
body.insertBefore(h, firstChild);
tresEnRaya(players)