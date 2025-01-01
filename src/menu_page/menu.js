import menuBgImg from './img/menu_bg.avif';
import { pizzas, drinks } from './menu_items.js';

const menuPage = function () {
  content.replaceChildren();

  document.body.style.backgroundImage = `url(${menuBgImg})`;
  const article = document.createElement('article');
  article.classList.add('menu_article');

  article.append(createSection(pizzas), createSection(drinks));
  content.appendChild(article);
};

function createSection(itemsArr) {
  const section = document.createElement('section');
  const sectionTitle = document.createElement('h1');
  const itemsContainer = document.createElement('div');

  if (itemsArr === pizzas) {
    itemsContainer.classList.add('pizza_container');
    sectionTitle.textContent = 'Our pizzas';
  } else {
    itemsContainer.classList.add('drink_container');
    sectionTitle.textContent = 'Refreshing drinks';
  }

  itemsArr.forEach((item) => {
    const itemCard = document.createElement('div');
    itemCard.classList.add('item_card');
    const figure = document.createElement('figure');
    const figCaption = document.createElement('figcaption');
    const itemImg = document.createElement('img');
    itemImg.src = item.imgSrc;
    const itemName = document.createElement('h2');
    itemName.textContent = item.name;
    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.ingredients;
    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;

    figCaption.append(itemName, itemDescription, itemPrice);
    figure.append(itemImg, figCaption);
    itemCard.appendChild(figure);
    itemsContainer.appendChild(itemCard);
  });

  section.append(sectionTitle, itemsContainer);
  return section;
}

export { menuPage };
