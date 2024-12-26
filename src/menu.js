import menuBgImg from './assets/img/menu_bg.avif';
const header = document.querySelector('.site_header');
import { pizzas, drinks } from './menu_items.js';

const menuPage = function () {
  content.replaceChildren();

  header.style.backgroundColor = 'rgba(0, 0, 0, 0.07)';
  content.style.backgroundColor = 'transparent';
  document.body.style.backgroundImage = `url(${menuBgImg})`;

  const article = document.createElement('article');
  article.classList.add('menu_article');

  const pizzaSection = document.createElement('section');
  pizzaSection.classList.add('pizza_section');
  const pizzaH1 = document.createElement('h1');
  pizzaH1.textContent = 'Our pizzas';

  pizzas.forEach((pizza) => {
    const pizzaCard = document.createElement('div');
    pizzaCard.classList.add('item_card');
    const figure = document.createElement('figure');
    const figCaption = document.createElement('figcaption');
    const pizzaImg = document.createElement('img');
    pizzaImg.src = pizza.imgSrc;
    const pizzaName = document.createElement('h2');
    pizzaName.textContent = pizza.name;
    const pizzaIngredients = document.createElement('p');
    pizzaIngredients.textContent = pizza.ingredients;
    const pizzaPrice = document.createElement('p');
    pizzaPrice.textContent = pizza.price;

    figCaption.append(pizzaName, pizzaIngredients, pizzaPrice);
    figure.append(pizzaImg, figCaption);
    pizzaCard.appendChild(figure);
    pizzaSection.appendChild(pizzaCard);
  });

  const drinkSection = document.createElement('section');
  drinkSection.classList.add('drink_section');
  const drinkH1 = document.createElement('h1');
  drinkH1.textContent = 'Refreshing drinks';

  drinks.forEach((drink) => {
    const drinkCard = document.createElement('div');
    drinkCard.classList.add('item_card');
    const figure = document.createElement('figure');
    const figCaption = document.createElement('figcaption');
    const drinkImg = document.createElement('img');
    drinkImg.src = drink.imgSrc;
    const drinkName = document.createElement('h2');
    drinkName.textContent = drink.name;
    const drinkDescripition = document.createElement('p');
    drinkDescripition.textContent = drink.description;
    const drinkPrice = document.createElement('p');
    drinkPrice.textContent = drink.price;

    figCaption.append(drinkName, drinkDescripition, drinkPrice);
    figure.append(drinkImg, figCaption);
    drinkCard.appendChild(figure);
    drinkSection.appendChild(drinkCard);
  });

  article.append(pizzaH1, pizzaSection, drinkH1, drinkSection);
  content.appendChild(article);
};

export { menuPage };
