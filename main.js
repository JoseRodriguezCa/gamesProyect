import { header } from './Components/Header/Header'
import { principal } from './Components/Principal/Principal'
import './style.css'
const body = document.body
const firstChild = document.body.firstChild;
const h = header()
body.insertBefore(h, firstChild);
principal()