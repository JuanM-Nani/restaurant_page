import homeBgImg from './img/home_bg.avif';
import { addressInfo } from './home_content.js';

const homePage = function () {
  content.replaceChildren();

  document.body.style.backgroundImage = `url(${homeBgImg})`;
  content.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';

  const article = document.createElement('article');
  article.classList.add('home_article');

  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent =
    'Experience the Best Pizza in Town. Fresh Ingredients, Unique Flavors, and Unbeatable Taste!';
  const h2 = document.createElement('h2');
  h2.textContent = 'Affordable, Delicious, and Made Just for You!';
  const button = document.createElement('button');
  button.classList.add('home_btn');
  button.textContent = 'Order now';

  header.append(h1, h2, button);
  article.append(header, createAddressCard());
  content.append(article);
};

function createAddressCard() {
  const addressCard = document.createElement('section');
  addressCard.classList.add('address_card');

  addressInfo.forEach((item) => {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = item.alt;

    const figcaption = document.createElement('figcaption');
    item.paragraphs.forEach((paragraphText) => {
      const paragraph = document.createElement('p');
      const span = document.createElement('span');
      paragraph.appendChild(span);
      span.textContent = paragraphText;
      figcaption.appendChild(paragraph);
    });

    figure.append(img, figcaption);
    addressCard.appendChild(figure);
  });

  return addressCard;
}

import { menuPage } from '../menu_page/menu.js';
function homeBtnEvent() {
  const headerBtnsNode = document.querySelectorAll('.site_header button');
  document.querySelector('.home_btn').addEventListener('click', () => {
    headerBtnsNode.forEach((btn) => {
      btn.classList.remove('gradient');
    });
    document.querySelector('.menu_page').classList.add('gradient');
    menuPage();
  });
}

export { homePage, homeBtnEvent };
