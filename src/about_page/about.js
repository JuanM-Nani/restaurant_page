import img1 from '../assets/img/about/img1.avif';
import img2 from '../assets/img/about/img2.avif';
import img3 from '../assets/img/about/img3.avif';
import img4 from '../assets/img/about/img4.avif';
import img5 from '../assets/img/about/img5.avif';
import img6 from '../assets/img/about/img6.avif';
import img7 from '../assets/img/about/img7.avif';
import img8 from '../assets/img/about/img8.avif';
import img9 from '../assets/img/about/img9.avif';

const carouselImgs = {
  col1: [img1, img2, img3],
  col2: [img4, img5, img6],
  col3: [img7, img8, img9],
};

const aboutPage = function () {
  content.replaceChildren();
  content.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';

  const article = document.createElement('article');
  article.classList.add('about_article');
  document.body.style.backgroundImage = 'url()';

  article.appendChild(crateCarousel());
  content.appendChild(article);
};

function crateCarousel() {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  for (let col in carouselImgs) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    const colImgs = document.createElement('div');
    carouselImgs[col].forEach((item) => {
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
