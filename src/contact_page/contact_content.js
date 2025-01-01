import locationIcon from '../assets/icons/location.png';
import clockIcon from '../assets/icons/clock.png';
import phoneIcon from '../assets/icons/phone.png';
import envelopeIcon from '../assets/icons/envelope.png';

const contactData = [
  {
    imgSrc: locationIcon,
    alt: 'location icon',
    paragraphs: ['1432 Crescent Valley Blvd', 'Portland, OR 97225'],
  },
  {
    imgSrc: clockIcon,
    alt: 'clock icon',
    paragraphs: ['Mon-Fri: 7pm-12pm', 'Sat: 8pm-12pm'],
  },
  {
    imgSrc: phoneIcon,
    alt: 'phone icon',
    paragraphs: ['+1-555-123-4567'],
  },
  {
    imgSrc: envelopeIcon,
    alt: 'envelope icon',
    paragraphs: ['elpapupizzeria@gmail.com'],
  },
];

const contactForm = [
  {
    element: 'input',
    attrs: [
      { tag: 'autocomplete', value: 'off' },
      { tag: 'id', value: 'msg_name' },
      { tag: 'required', value: true },
      { tag: 'placeholder', value: 'Fullname' },
      { tag: 'pattern', value: '^[A-Za-záéíóúüñÁÉÍÓÚÜÑ][A-Za-záéíóúüñÁÉÍÓÚÜÑ ]*$' },
      { tag: 'minlength', value: '2' },
      { tag: 'maxlength', value: '30' },
    ],
  },
  {
    element: 'input',
    attrs: [
      { tag: 'id', value: 'email' },
      { tag: 'type', value: 'email' },
      { tag: 'required', value: true },
      { tag: 'placeholder', value: 'Your email' },
      { tag: 'maxlength', value: '254' },
      { tag: 'autocomplete', value: 'off' },
    ],
  },
  {
    element: 'textarea',
    attrs: [
      { tag: 'id', value: 'message' },
      { tag: 'required', value: true },
      { tag: 'placeholder', value: 'Give us your opinion and clarify your doubts.' },
      { tag: 'pattern', value: '^[A-Za-záéíóúüñÁÉÍÓÚÜÑ][A-Za-záéíóúüñÁÉÍÓÚÜÑ ]*$' },
      { tag: 'minlength', value: '10' },
      { tag: 'maxlength', value: '200' },
      { tag: 'autocomplete', value: 'off' },
    ],
  },
];

import instagramIcon from '../assets/icons/instagram.svg';
import xIcon from '../assets/icons/x.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import tiktokIcon from '../assets/icons/tiktok.svg';

const contactMedia = [
  {
    imgSrc: instagramIcon,
    alt: 'instagram icon',
    paragraphs: ['@papupizzeria'],
  },
  {
    imgSrc: xIcon,
    alt: 'x icon',
    paragraphs: ['@papupizzeria'],
  },
  {
    imgSrc: facebookIcon,
    alt: 'facebook icon',
    paragraphs: ['El Papu Pizzería'],
  },
  {
    imgSrc: tiktokIcon,
    alt: 'tiktok icon',
    paragraphs: ['@papupizzeria'],
  },
];

export { contactData, contactForm, contactMedia };
