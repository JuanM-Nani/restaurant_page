import locationImg from '../assets/img/location.png';
import calendarImg from '../assets/img/calendar.png';
import homeBgImg from '../assets/img/home_bg.avif';

const imgs = [
  {
    imgSrc: locationImg,
    alt: 'location icon',
    paragraphs: ['1432 Crescent Valley Blvd', 'Portland, OR 97225'],
  },
  {
    imgSrc: calendarImg,
    alt: 'calendar icon',
    paragraphs: ['Mon-Fri: 7pm-12pm', 'Sat: 8pm-12pm'],
  },
];

const homePage = function () {
  content.replaceChildren();

  document.body.style.backgroundImage = `url(${homeBgImg})`;
  content.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  const article = document.createElement('article');
  article.classList.add('home_article');
  const header = document.createElement('header');
  article.appendChild(header);
  const h1 = document.createElement('h1');
  h1.textContent =
    'Experience the Best Pizza in Town. Fresh Ingredients, Unique Flavors, and Unbeatable Taste!';
  const h2 = document.createElement('h2');
  h2.textContent = 'Affordable, Delicious, and Made Just for You!';
  header.append(h1, h2);
  const button = document.createElement('button');
  button.textContent = 'Order now';
  article.appendChild(button);
  const addressCard = document.createElement('section');
  addressCard.classList.add('address_card');

  imgs.forEach((item) => {
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

  article.appendChild(addressCard);
  content.append(article);
};

export { homePage };
