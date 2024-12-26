import './style.css';
const content = document.querySelector('#content');
const header = document.querySelector('.site_header');
import { homePage } from './home.js';
homePage();
import './home.css';
import { menuPage } from './menu.js';
import './menu.css';

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

const homeBtn = document.querySelector('.home_page');
homeBtn.addEventListener('click', () => {
  homePage();
});

const menuBtn = document.querySelector('.menu_page');
menuBtn.addEventListener('click', () => {
  menuPage();
});
