const content = document.querySelector('#content');
const header = document.querySelector('.site_header');
import './style.css';
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
      btn.style.color = 'var(--000)';
    });
    target.style.color = 'var(--semi-dark_red)';
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
