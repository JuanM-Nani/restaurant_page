import { carouselBgImgs, aboutTextContent } from './about_content.js';

const aboutPage = function () {
  content.replaceChildren();
  content.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  document.body.style.backgroundColor = 'var(--dark)';
  document.body.style.backgroundImage = 'url()';

  const article = document.createElement('article');
  article.classList.add('about_article');

  content.appendChild(crateCarousel());
  article.appendChild(createAboutCard());
  content.appendChild(article);
};

function createAboutCard() {
  const aboutCard = document.createElement('article');
  aboutCard.classList.add('about_card');
  aboutTextContent.forEach((item) => {
    const element = document.createElement(item.element);
    element.textContent = item.text;
    aboutCard.appendChild(element);
  });

  return aboutCard;
}

function crateCarousel() {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  for (let col in carouselBgImgs) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    const colImgs = document.createElement('div');
    carouselBgImgs[col].forEach((item) => {
      const img = document.createElement('img');
      img.src = item;
      colImgs.appendChild(img);
    });

    const clonedColImgs = colImgs.cloneNode(true);
    colDiv.append(colImgs);
    colDiv.appendChild(clonedColImgs);
    carousel.appendChild(colDiv);
  }

  return carousel;
}

export { aboutPage };
