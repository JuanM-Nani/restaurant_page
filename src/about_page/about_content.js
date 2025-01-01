import img1 from './img/img1.avif';
import img2 from './img/img2.avif';
import img3 from './img/img3.avif';
import img4 from './img/img4.avif';
import img5 from './img/img5.avif';
import img6 from './img/img6.avif';
import img7 from './img/img7.avif';
import img8 from './img/img8.avif';
import img9 from './img/img9.avif';

const carouselBgImgs = {
  col1: [img1, img2, img3],
  col2: [img4, img5, img6],
  col3: [img7, img8, img9],
};

const aboutTextContent = [
  { element: 'h1', text: 'About Pizzeria El Papu' },
  { element: 'h2', text: 'Our Story' },
  {
    element: 'p',
    text: 'At Pizzeria El Papu, we started with a simple dream: to bring authentic, handmade pizza to our community. With fresh ingredients, traditional recipes, and a touch of creativity, we’ve built a reputation for delicious flavors and a warm atmosphere.',
  },
  { element: 'h2', text: 'Our Ingredients' },
  {
    element: 'p',
    text: 'Quality is our priority. We carefully select the freshest ingredients, from farm-picked tomatoes to premium cheeses. Our dough is made daily, and every pizza is crafted with love and attention to detail.',
  },
  { element: 'h2', text: 'Our Passion' },
  {
    element: 'p',
    text: "Pizza is more than food; it's a way of connecting people. At Pizzeria El Papu, we are passionate about bringing friends and families together around a table, sharing laughter, and enjoying unforgettable meals.",
  },
];

export { carouselBgImgs, aboutTextContent };
