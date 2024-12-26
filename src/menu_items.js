import pepperoniImg from './assets/img/pizzas/pepperoni.avif';
import margheritaImg from './assets/img/pizzas/margherita.avif';
import hawaiianImg from './assets/img/pizzas/hawaiian.avif';
import fourCheeseImg from './assets/img/pizzas/four_cheese.avif';
import vegetarianImg from './assets/img/pizzas/vegetarian.avif';
import bbqImg from './assets/img/pizzas/bbq.avif';
import meatLoverImg from './assets/img/pizzas/meat.avif';
import mexicanImg from './assets/img/pizzas/mexican.avif';

const pizzas = [
  {
    imgSrc: pepperoniImg,
    name: 'Pepperoni',
    ingredients: 'Pepperoni, mozzarella cheese, tomato sauce',
    price: '$8.00',
  },
  {
    imgSrc: margheritaImg,
    name: 'Margherita',
    ingredients: 'Mozzarella cheese, fresh tomatoes, basil',
    price: '$7.50',
  },
  {
    imgSrc: hawaiianImg,
    name: 'Hawaiian',
    ingredients: 'Pineapple, ham, mozzarella cheese, tomato sauce',
    price: '$9.00',
  },
  {
    imgSrc: fourCheeseImg,
    name: 'Four Cheese',
    ingredients: 'Mozzarella, parmesan, gorgonzola, provolone',
    price: '$10.00',
  },
  {
    imgSrc: vegetarianImg,
    name: 'Vegetarian',
    ingredients: 'Bell peppers, onions, mushrooms, olives, mozzarella cheese',
    price: '$8.50',
  },
  {
    imgSrc: bbqImg,
    name: 'BBQ',
    ingredients: 'BBQ chicken, red onions, cheddar cheese, BBQ sauce',
    price: '$9.50',
  },
  {
    imgSrc: meatLoverImg,
    name: 'Meat',
    ingredients: 'Ground beef, pepperoni, ham, Italian sausage, mozzarella cheese',
    price: '$11.00',
  },
  {
    imgSrc: mexicanImg,
    name: 'Mexican',
    ingredients: 'Chorizo, refried beans, jalapeños, cheddar cheese, spicy sauce',
    price: '$10.50',
  },
];

import cokeImg from './assets/img/drinks/coke.avif';
import spriteImg from './assets/img/drinks/sprite.avif';
import fantaImg from './assets/img/drinks/fanta.avif';
import sparklingWaterImg from './assets/img/drinks/sparkling_water.avif';
import stillWaterImg from './assets/img/drinks/still_water.avif';
import beerImg from './assets/img/drinks/beer.avif';

const drinks = [
  {
    imgSrc: cokeImg,
    name: 'Coca-Cola',
    description: '12 fl oz, glass bottle, classic soda with bubbles',
    price: '$2.00',
  },
  {
    imgSrc: spriteImg,
    name: 'Sprite',
    description: '12 fl oz, can, lemon-lime soda, crisp and refreshing',
    price: '$2.00',
  },
  {
    imgSrc: fantaImg,
    name: 'Fanta',
    description: '12 fl oz, plastic bottle, orange soda with bubbles',
    price: '$2.00',
  },
  {
    imgSrc: sparklingWaterImg,
    name: 'Sparkling Water',
    description: '16 fl oz, glass bottle, carbonated, light and refreshing',
    price: '$1.50',
  },
  {
    imgSrc: stillWaterImg,
    name: 'Still Water',
    description: '16 fl oz, plastic bottle, purified water, no bubbles',
    price: '$1.00',
  },
  {
    imgSrc: beerImg,
    name: 'Beer',
    description: '12 fl oz, can, craft beer, pairs well with pizza',
    price: '$4.50',
  },
];

export { pizzas };
export { drinks };
