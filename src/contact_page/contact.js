import contactBg from '../assets/img/contact_bg.avif';
import { contactContent } from './assets/contact_content.js';

const contactPage = function () {
  content.replaceChildren();

  document.body.style.backgroundImage = `url(${contactBg})`;

  const article = document.createElement('article');
  article.classList.add('contact_article');

  const info = document.createElement('div');
  infoContent.forEach((item) => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = item.imgSrc;
    const figCaption = document.createElement('figcaption');
  });

  const mapContainer = document.createElement('div');
  mapContainer.id = 'map';

  article.append(info, mapContainer);
  content.appendChild(article);

  const map = L.map('map').setView([40.60378835, -111.79560955113706], 14);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([40.60378835, -111.79560955113706])
    .addTo(map)
    .bindPopup('Pizzeria<br> El Papu')
    .openPopup();
};

export { contactPage };
