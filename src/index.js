import './style.css';
const content = document.querySelector('#content');
const header = document.querySelector('.site_header');
import { homePage } from './home.js';
homePage();
import './home.css';
import { menuPage } from './menu.js';
import './menu.css';
import { aboutPage } from './about_page/about.js';
import './about_page/about.css';

const headerBtnsNode = document.querySelectorAll('.site_header button');
header.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('nav_button')) {
    headerBtnsNode.forEach((btn) => {
      btn.classList.remove('gradient');
    });
    target.classList.add('gradient');
  }
});

document.querySelector('.home_page').addEventListener('click', () => {
  homePage();
});

document.querySelector('.menu_page').addEventListener('click', () => {
  menuPage();
});

document.querySelector('.about_page').addEventListener('click', () => {
  aboutPage();
});

export { header };
