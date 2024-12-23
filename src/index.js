import './style.css';
import { homePage } from './home.js';
homePage();
import './home.css';
import { menuPage } from './menu.js';
import './menu.css';
const content = document.querySelector('#content');

const homeBtn = document.querySelector('.home_page');
homeBtn.addEventListener('click', () => {
  homePage();
});

const menuBtn = document.querySelector('.menu_page');
menuBtn.addEventListener('click', () => {
  menuPage();
});
