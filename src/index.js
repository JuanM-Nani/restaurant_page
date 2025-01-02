import './style.css';
const content = document.querySelector('#content');
const header = document.querySelector('.site_header');

import { aboutPage } from './about_page/about.js';
import './about_page/about.css';
import { contactPage } from './contact_page/contact.js';
import './contact_page/contact.css';

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

import { homePage, homeBtnEvent } from './home_page/home.js';
import './home_page/home.css';
homePage();
homeBtnEvent();

document.querySelector('.home_page').addEventListener('click', () => {
  homePage();
  homeBtnEvent();
});

import { menuPage } from './menu_page/menu.js';
import './menu_page/menu.css';

document.querySelector('.menu_page').addEventListener('click', () => {
  menuPage();
});

document.querySelector('.about_page').addEventListener('click', () => {
  aboutPage();
});

document.querySelector('.contact_page').addEventListener('click', () => {
  contactPage();
});

export { header };
