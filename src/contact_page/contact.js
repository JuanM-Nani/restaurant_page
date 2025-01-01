import contactBg from './img/contact_bg.avif';
import { contactData, contactForm, contactMedia } from './contact_content.js';

const contactPage = function () {
  content.replaceChildren();

  document.body.style.backgroundImage = `url(${contactBg})`;

  const article = document.createElement('article');
  article.classList.add('contact_article');

  const contactInfoContainer = document.createElement('div');
  contactInfoContainer.classList.add('contact_info_container');
  contactInfoContainer.append(
    createFigures(contactData),
    createFigures(contactMedia),
    createForm()
  );

  const mapContainer = document.createElement('div');
  mapContainer.id = 'map';

  article.append(contactInfoContainer, mapContainer);
  content.appendChild(article);

  document.querySelector('.send_msg').addEventListener('click', (event) => {
    const form = document.querySelector('form');

    function sendEmail() {
      const params = {
        form_name: form.querySelector('#msg_name').value,
        message: form.querySelector('#message').value,
        email_id: form.querySelector('#email').value,
        reply_to: form.querySelector('#email').value,
      };

      emailjs.send('service_y688wdv', 'template_4noj7io', params);
    }

    if (form.checkValidity()) {
      event.preventDefault();
      sendEmail();
      form.reset();
    }
  });

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

function createFigures(infoArr) {
  const contactDataContainer = document.createElement('div');
  contactDataContainer.classList.add('contact_data_container');

  infoArr.forEach((item) => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = item.imgSrc;
    const figCaption = document.createElement('figcaption');

    item.paragraphs.forEach((paragraph) => {
      const p = document.createElement('p');
      const span = document.createElement('span');
      span.textContent = paragraph;
      p.appendChild(span);
      figCaption.appendChild(p);
    });

    figure.append(img, figCaption);
    contactDataContainer.appendChild(figure);
  });

  return contactDataContainer;
}

function createForm() {
  const form = document.createElement('form');
  const inputsContainer = document.createElement('div');
  inputsContainer.classList.add('inputs_container');
  form.appendChild(inputsContainer);

  contactForm.forEach((item) => {
    const label = document.createElement('label');
    const formField = document.createElement(`${item.element}`);
    label.appendChild(formField);

    if (item.element === 'input') {
      inputsContainer.appendChild(label);
    } else if (item.element !== 'input') {
      form.appendChild(label);
    }

    label.setAttribute('for', `${item.attrs[0].value}`);

    item.attrs.forEach((attr) => {
      formField.setAttribute(`${attr.tag}`, `${attr.value}`);
    });
  });

  const button = document.createElement('button');
  button.textContent = 'Send message';
  button.classList.add('send_msg');

  form.appendChild(button);
  return form;
}

export { contactPage };
