import './styles.css';
import { drop } from './dropdown.js';
import { circleNav, slider, slideRight, start } from './carousel.js';

const dropdown = document.querySelector('.menu');
const items = document.querySelector('.items');
const startBtn = document.querySelector('.start');
const stop = document.querySelector('.stop');

drop(dropdown, items);
circleNav();
slider();
let timer = 0;
startBtn.addEventListener('click', () => {
  timer = setInterval(slideRight, 3000);
});
stop.addEventListener('click', () => clearInterval(timer));
