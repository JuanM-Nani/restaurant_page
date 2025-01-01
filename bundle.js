/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about_page/about.css":
/*!**********************************!*\
  !*** ./src/about_page/about.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant_page/./src/about_page/about.css?");

/***/ }),

/***/ "./src/contact_page/contact.css":
/*!**************************************!*\
  !*** ./src/contact_page/contact.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant_page/./src/contact_page/contact.css?");

/***/ }),

/***/ "./src/home_page/home.css":
/*!********************************!*\
  !*** ./src/home_page/home.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant_page/./src/home_page/home.css?");

/***/ }),

/***/ "./src/menu_page/menu.css":
/*!********************************!*\
  !*** ./src/menu_page/menu.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/menu.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant_page/./src/style.css?");

/***/ }),

/***/ "./src/about_page/about.js":
/*!*********************************!*\
  !*** ./src/about_page/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPage: () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _about_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about_content.js */ \"./src/about_page/about_content.js\");\n\n\nconst aboutPage = function () {\n  content.replaceChildren();\n  content.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';\n  document.body.style.backgroundColor = 'var(--dark)';\n  document.body.style.backgroundImage = 'url()';\n\n  const article = document.createElement('article');\n  article.classList.add('about_article');\n\n  content.appendChild(crateCarousel());\n  article.appendChild(createAboutCard());\n  content.appendChild(article);\n};\n\nfunction createAboutCard() {\n  const aboutCard = document.createElement('article');\n  aboutCard.classList.add('about_card');\n  _about_content_js__WEBPACK_IMPORTED_MODULE_0__.aboutTextContent.forEach((item) => {\n    const element = document.createElement(item.element);\n    element.textContent = item.text;\n    aboutCard.appendChild(element);\n  });\n\n  return aboutCard;\n}\n\nfunction crateCarousel() {\n  const carousel = document.createElement('div');\n  carousel.classList.add('carousel');\n\n  for (let col in _about_content_js__WEBPACK_IMPORTED_MODULE_0__.carouselBgImgs) {\n    const colDiv = document.createElement('div');\n    colDiv.classList.add('col');\n    const colImgs = document.createElement('div');\n    _about_content_js__WEBPACK_IMPORTED_MODULE_0__.carouselBgImgs[col].forEach((item) => {\n      const img = document.createElement('img');\n      img.src = item;\n      colImgs.appendChild(img);\n    });\n\n    const clonedColImgs = colImgs.cloneNode(true);\n    colDiv.append(colImgs);\n    colDiv.appendChild(clonedColImgs);\n    carousel.appendChild(colDiv);\n  }\n\n  return carousel;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/about_page/about.js?");

/***/ }),

/***/ "./src/about_page/about_content.js":
/*!*****************************************!*\
  !*** ./src/about_page/about_content.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutTextContent: () => (/* binding */ aboutTextContent),\n/* harmony export */   carouselBgImgs: () => (/* binding */ carouselBgImgs)\n/* harmony export */ });\n/* harmony import */ var _img_img1_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/img1.avif */ \"./src/about_page/img/img1.avif\");\n/* harmony import */ var _img_img2_avif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/img2.avif */ \"./src/about_page/img/img2.avif\");\n/* harmony import */ var _img_img3_avif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/img3.avif */ \"./src/about_page/img/img3.avif\");\n/* harmony import */ var _img_img4_avif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/img4.avif */ \"./src/about_page/img/img4.avif\");\n/* harmony import */ var _img_img5_avif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/img5.avif */ \"./src/about_page/img/img5.avif\");\n/* harmony import */ var _img_img6_avif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/img6.avif */ \"./src/about_page/img/img6.avif\");\n/* harmony import */ var _img_img7_avif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/img7.avif */ \"./src/about_page/img/img7.avif\");\n/* harmony import */ var _img_img8_avif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/img8.avif */ \"./src/about_page/img/img8.avif\");\n/* harmony import */ var _img_img9_avif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/img9.avif */ \"./src/about_page/img/img9.avif\");\n\n\n\n\n\n\n\n\n\n\nconst carouselBgImgs = {\n  col1: [_img_img1_avif__WEBPACK_IMPORTED_MODULE_0__, _img_img2_avif__WEBPACK_IMPORTED_MODULE_1__, _img_img3_avif__WEBPACK_IMPORTED_MODULE_2__],\n  col2: [_img_img4_avif__WEBPACK_IMPORTED_MODULE_3__, _img_img5_avif__WEBPACK_IMPORTED_MODULE_4__, _img_img6_avif__WEBPACK_IMPORTED_MODULE_5__],\n  col3: [_img_img7_avif__WEBPACK_IMPORTED_MODULE_6__, _img_img8_avif__WEBPACK_IMPORTED_MODULE_7__, _img_img9_avif__WEBPACK_IMPORTED_MODULE_8__],\n};\n\nconst aboutTextContent = [\n  { element: 'h1', text: 'About Pizzeria El Papu' },\n  { element: 'h2', text: 'Our Story' },\n  {\n    element: 'p',\n    text: 'At Pizzeria El Papu, we started with a simple dream: to bring authentic, handmade pizza to our community. With fresh ingredients, traditional recipes, and a touch of creativity, we’ve built a reputation for delicious flavors and a warm atmosphere.',\n  },\n  { element: 'h2', text: 'Our Ingredients' },\n  {\n    element: 'p',\n    text: 'Quality is our priority. We carefully select the freshest ingredients, from farm-picked tomatoes to premium cheeses. Our dough is made daily, and every pizza is crafted with love and attention to detail.',\n  },\n  { element: 'h2', text: 'Our Passion' },\n  {\n    element: 'p',\n    text: \"Pizza is more than food; it's a way of connecting people. At Pizzeria El Papu, we are passionate about bringing friends and families together around a table, sharing laughter, and enjoying unforgettable meals.\",\n  },\n];\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/about_page/about_content.js?");

/***/ }),

/***/ "./src/contact_page/contact.js":
/*!*************************************!*\
  !*** ./src/contact_page/contact.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactPage: () => (/* binding */ contactPage)\n/* harmony export */ });\n/* harmony import */ var _img_contact_bg_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/contact_bg.avif */ \"./src/contact_page/img/contact_bg.avif\");\n/* harmony import */ var _contact_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact_content.js */ \"./src/contact_page/contact_content.js\");\n\n\n\nconst contactPage = function () {\n  content.replaceChildren();\n\n  document.body.style.backgroundImage = `url(${_img_contact_bg_avif__WEBPACK_IMPORTED_MODULE_0__})`;\n\n  const article = document.createElement('article');\n  article.classList.add('contact_article');\n\n  const contactInfoContainer = document.createElement('div');\n  contactInfoContainer.classList.add('contact_info_container');\n  contactInfoContainer.append(\n    createFigures(_contact_content_js__WEBPACK_IMPORTED_MODULE_1__.contactData),\n    createFigures(_contact_content_js__WEBPACK_IMPORTED_MODULE_1__.contactMedia),\n    createForm()\n  );\n\n  const mapContainer = document.createElement('div');\n  mapContainer.id = 'map';\n\n  article.append(contactInfoContainer, mapContainer);\n  content.appendChild(article);\n\n  document.querySelector('.send_msg').addEventListener('click', (event) => {\n    const form = document.querySelector('form');\n\n    function sendEmail() {\n      const params = {\n        form_name: form.querySelector('#msg_name').value,\n        message: form.querySelector('#message').value,\n        email_id: form.querySelector('#email').value,\n        reply_to: form.querySelector('#email').value,\n      };\n\n      emailjs.send('service_y688wdv', 'template_4noj7io', params);\n    }\n\n    if (form.checkValidity()) {\n      event.preventDefault();\n      sendEmail();\n      form.reset();\n    }\n  });\n\n  const map = L.map('map').setView([40.60378835, -111.79560955113706], 14);\n\n  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {\n    attribution:\n      '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n  }).addTo(map);\n\n  L.marker([40.60378835, -111.79560955113706])\n    .addTo(map)\n    .bindPopup('Pizzeria<br> El Papu')\n    .openPopup();\n};\n\nfunction createFigures(infoArr) {\n  const contactDataContainer = document.createElement('div');\n  contactDataContainer.classList.add('contact_data_container');\n\n  infoArr.forEach((item) => {\n    const figure = document.createElement('figure');\n    const img = document.createElement('img');\n    img.src = item.imgSrc;\n    const figCaption = document.createElement('figcaption');\n\n    item.paragraphs.forEach((paragraph) => {\n      const p = document.createElement('p');\n      const span = document.createElement('span');\n      span.textContent = paragraph;\n      p.appendChild(span);\n      figCaption.appendChild(p);\n    });\n\n    figure.append(img, figCaption);\n    contactDataContainer.appendChild(figure);\n  });\n\n  return contactDataContainer;\n}\n\nfunction createForm() {\n  const form = document.createElement('form');\n  const inputsContainer = document.createElement('div');\n  inputsContainer.classList.add('inputs_container');\n  form.appendChild(inputsContainer);\n\n  _contact_content_js__WEBPACK_IMPORTED_MODULE_1__.contactForm.forEach((item) => {\n    const label = document.createElement('label');\n    const formField = document.createElement(`${item.element}`);\n    label.appendChild(formField);\n\n    if (item.element === 'input') {\n      inputsContainer.appendChild(label);\n    } else if (item.element !== 'input') {\n      form.appendChild(label);\n    }\n\n    label.setAttribute('for', `${item.attrs[0].value}`);\n\n    item.attrs.forEach((attr) => {\n      formField.setAttribute(`${attr.tag}`, `${attr.value}`);\n    });\n  });\n\n  const button = document.createElement('button');\n  button.textContent = 'Send message';\n  button.classList.add('send_msg');\n\n  form.appendChild(button);\n  return form;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/contact_page/contact.js?");

/***/ }),

/***/ "./src/contact_page/contact_content.js":
/*!*********************************************!*\
  !*** ./src/contact_page/contact_content.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactData: () => (/* binding */ contactData),\n/* harmony export */   contactForm: () => (/* binding */ contactForm),\n/* harmony export */   contactMedia: () => (/* binding */ contactMedia)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/location.png */ \"./src/assets/icons/location.png\");\n/* harmony import */ var _assets_icons_clock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/clock.png */ \"./src/assets/icons/clock.png\");\n/* harmony import */ var _assets_icons_phone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/phone.png */ \"./src/assets/icons/phone.png\");\n/* harmony import */ var _assets_icons_envelope_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/envelope.png */ \"./src/assets/icons/envelope.png\");\n/* harmony import */ var _assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/instagram.svg */ \"./src/assets/icons/instagram.svg\");\n/* harmony import */ var _assets_icons_x_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/x.svg */ \"./src/assets/icons/x.svg\");\n/* harmony import */ var _assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/facebook.svg */ \"./src/assets/icons/facebook.svg\");\n/* harmony import */ var _assets_icons_tiktok_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/tiktok.svg */ \"./src/assets/icons/tiktok.svg\");\n\n\n\n\n\nconst contactData = [\n  {\n    imgSrc: _assets_icons_location_png__WEBPACK_IMPORTED_MODULE_0__,\n    alt: 'location icon',\n    paragraphs: ['1432 Crescent Valley Blvd', 'Portland, OR 97225'],\n  },\n  {\n    imgSrc: _assets_icons_clock_png__WEBPACK_IMPORTED_MODULE_1__,\n    alt: 'clock icon',\n    paragraphs: ['Mon-Fri: 7pm-12pm', 'Sat: 8pm-12pm'],\n  },\n  {\n    imgSrc: _assets_icons_phone_png__WEBPACK_IMPORTED_MODULE_2__,\n    alt: 'phone icon',\n    paragraphs: ['+1-555-123-4567'],\n  },\n  {\n    imgSrc: _assets_icons_envelope_png__WEBPACK_IMPORTED_MODULE_3__,\n    alt: 'envelope icon',\n    paragraphs: ['elpapupizzeria@gmail.com'],\n  },\n];\n\nconst contactForm = [\n  {\n    element: 'input',\n    attrs: [\n      { tag: 'autocomplete', value: 'off' },\n      { tag: 'id', value: 'msg_name' },\n      { tag: 'required', value: true },\n      { tag: 'placeholder', value: 'Fullname' },\n      { tag: 'pattern', value: '^[A-Za-záéíóúüñÁÉÍÓÚÜÑ][A-Za-záéíóúüñÁÉÍÓÚÜÑ ]*$' },\n      { tag: 'minlength', value: '2' },\n      { tag: 'maxlength', value: '30' },\n    ],\n  },\n  {\n    element: 'input',\n    attrs: [\n      { tag: 'id', value: 'email' },\n      { tag: 'type', value: 'email' },\n      { tag: 'required', value: true },\n      { tag: 'placeholder', value: 'Your email' },\n      { tag: 'maxlength', value: '254' },\n      { tag: 'autocomplete', value: 'off' },\n    ],\n  },\n  {\n    element: 'textarea',\n    attrs: [\n      { tag: 'id', value: 'message' },\n      { tag: 'required', value: true },\n      { tag: 'placeholder', value: 'Give us your opinion and clarify your doubts.' },\n      { tag: 'pattern', value: '^[A-Za-záéíóúüñÁÉÍÓÚÜÑ][A-Za-záéíóúüñÁÉÍÓÚÜÑ ]*$' },\n      { tag: 'minlength', value: '10' },\n      { tag: 'maxlength', value: '200' },\n      { tag: 'autocomplete', value: 'off' },\n    ],\n  },\n];\n\n\n\n\n\n\nconst contactMedia = [\n  {\n    imgSrc: _assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_4__,\n    alt: 'instagram icon',\n    paragraphs: ['@papupizzeria'],\n  },\n  {\n    imgSrc: _assets_icons_x_svg__WEBPACK_IMPORTED_MODULE_5__,\n    alt: 'x icon',\n    paragraphs: ['@papupizzeria'],\n  },\n  {\n    imgSrc: _assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_6__,\n    alt: 'facebook icon',\n    paragraphs: ['El Papu Pizzería'],\n  },\n  {\n    imgSrc: _assets_icons_tiktok_svg__WEBPACK_IMPORTED_MODULE_7__,\n    alt: 'tiktok icon',\n    paragraphs: ['@papupizzeria'],\n  },\n];\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/contact_page/contact_content.js?");

/***/ }),

/***/ "./src/home_page/home.js":
/*!*******************************!*\
  !*** ./src/home_page/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/location.png */ \"./src/assets/icons/location.png\");\n/* harmony import */ var _assets_icons_clock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/clock.png */ \"./src/assets/icons/clock.png\");\n/* harmony import */ var _img_home_bg_avif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/home_bg.avif */ \"./src/home_page/img/home_bg.avif\");\n\n\n\n\nconst info = [\n  {\n    imgSrc: _assets_icons_location_png__WEBPACK_IMPORTED_MODULE_0__,\n    alt: 'location icon',\n    paragraphs: ['1432 Crescent Valley Blvd', 'Portland, OR 97225'],\n  },\n  {\n    imgSrc: _assets_icons_clock_png__WEBPACK_IMPORTED_MODULE_1__,\n    alt: 'calendar icon',\n    paragraphs: ['Mon-Fri: 7pm-12pm', 'Sat: 8pm-12pm'],\n  },\n];\n\nconst homePage = function () {\n  content.replaceChildren();\n\n  document.body.style.backgroundImage = `url(${_img_home_bg_avif__WEBPACK_IMPORTED_MODULE_2__})`;\n  content.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';\n  const article = document.createElement('article');\n  article.classList.add('home_article');\n  const header = document.createElement('header');\n  article.appendChild(header);\n  const h1 = document.createElement('h1');\n  h1.textContent =\n    'Experience the Best Pizza in Town. Fresh Ingredients, Unique Flavors, and Unbeatable Taste!';\n  const h2 = document.createElement('h2');\n  h2.textContent = 'Affordable, Delicious, and Made Just for You!';\n  header.append(h1, h2);\n  const button = document.createElement('button');\n  button.textContent = 'Order now';\n  article.appendChild(button);\n  const addressCard = document.createElement('section');\n  addressCard.classList.add('address_card');\n\n  info.forEach((item) => {\n    const figure = document.createElement('figure');\n\n    const img = document.createElement('img');\n    img.src = item.imgSrc;\n    img.alt = item.alt;\n\n    const figcaption = document.createElement('figcaption');\n    item.paragraphs.forEach((paragraphText) => {\n      const paragraph = document.createElement('p');\n      const span = document.createElement('span');\n      paragraph.appendChild(span);\n      span.textContent = paragraphText;\n      figcaption.appendChild(paragraph);\n    });\n\n    figure.append(img, figcaption);\n    addressCard.appendChild(figure);\n  });\n\n  article.appendChild(addressCard);\n  content.append(article);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/home_page/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _about_page_about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about_page/about.js */ \"./src/about_page/about.js\");\n/* harmony import */ var _about_page_about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about_page/about.css */ \"./src/about_page/about.css\");\n/* harmony import */ var _contact_page_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact_page/contact.js */ \"./src/contact_page/contact.js\");\n/* harmony import */ var _contact_page_contact_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact_page/contact.css */ \"./src/contact_page/contact.css\");\n/* harmony import */ var _home_page_home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home_page/home.js */ \"./src/home_page/home.js\");\n/* harmony import */ var _home_page_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home_page/home.css */ \"./src/home_page/home.css\");\n/* harmony import */ var _menu_page_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu_page/menu.js */ \"./src/menu_page/menu.js\");\n/* harmony import */ var _menu_page_menu_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu_page/menu.css */ \"./src/menu_page/menu.css\");\n\nconst content = document.querySelector('#content');\nconst header = document.querySelector('.site_header');\n\n\n\n\n\n\nconst headerBtnsNode = document.querySelectorAll('.site_header button');\nheader.addEventListener('click', (event) => {\n  const target = event.target;\n  if (target.classList.contains('nav_button')) {\n    headerBtnsNode.forEach((btn) => {\n      btn.classList.remove('gradient');\n    });\n    target.classList.add('gradient');\n  }\n});\n\n\n\n(0,_home_page_home_js__WEBPACK_IMPORTED_MODULE_5__.homePage)();\ndocument.querySelector('.home_page').addEventListener('click', () => {\n  (0,_home_page_home_js__WEBPACK_IMPORTED_MODULE_5__.homePage)();\n});\n\n\n\n\ndocument.querySelector('.menu_page').addEventListener('click', () => {\n  (0,_menu_page_menu_js__WEBPACK_IMPORTED_MODULE_7__.menuPage)();\n});\n\ndocument.querySelector('.about_page').addEventListener('click', () => {\n  (0,_about_page_about_js__WEBPACK_IMPORTED_MODULE_1__.aboutPage)();\n});\n\ndocument.querySelector('.contact_page').addEventListener('click', () => {\n  (0,_contact_page_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactPage)();\n});\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu_page/menu.js":
/*!*******************************!*\
  !*** ./src/menu_page/menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _img_menu_bg_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/menu_bg.avif */ \"./src/menu_page/img/menu_bg.avif\");\n/* harmony import */ var _menu_items_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_items.js */ \"./src/menu_page/menu_items.js\");\n\n\n\nconst menuPage = function () {\n  content.replaceChildren();\n\n  document.body.style.backgroundImage = `url(${_img_menu_bg_avif__WEBPACK_IMPORTED_MODULE_0__})`;\n  const article = document.createElement('article');\n  article.classList.add('menu_article');\n\n  article.append(createSection(_menu_items_js__WEBPACK_IMPORTED_MODULE_1__.pizzas), createSection(_menu_items_js__WEBPACK_IMPORTED_MODULE_1__.drinks));\n  content.appendChild(article);\n};\n\nfunction createSection(itemsArr) {\n  const section = document.createElement('section');\n  const sectionTitle = document.createElement('h1');\n  const itemsContainer = document.createElement('div');\n\n  if (itemsArr === _menu_items_js__WEBPACK_IMPORTED_MODULE_1__.pizzas) {\n    itemsContainer.classList.add('pizza_container');\n    sectionTitle.textContent = 'Our pizzas';\n  } else {\n    itemsContainer.classList.add('drink_container');\n    sectionTitle.textContent = 'Refreshing drinks';\n  }\n\n  itemsArr.forEach((item) => {\n    const itemCard = document.createElement('div');\n    itemCard.classList.add('item_card');\n    const figure = document.createElement('figure');\n    const figCaption = document.createElement('figcaption');\n    const itemImg = document.createElement('img');\n    itemImg.src = item.imgSrc;\n    const itemName = document.createElement('h2');\n    itemName.textContent = item.name;\n    const itemDescription = document.createElement('p');\n    itemDescription.textContent = item.ingredients;\n    const itemPrice = document.createElement('p');\n    itemPrice.textContent = item.price;\n\n    figCaption.append(itemName, itemDescription, itemPrice);\n    figure.append(itemImg, figCaption);\n    itemCard.appendChild(figure);\n    itemsContainer.appendChild(itemCard);\n  });\n\n  section.append(sectionTitle, itemsContainer);\n  return section;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/menu.js?");

/***/ }),

/***/ "./src/menu_page/menu_items.js":
/*!*************************************!*\
  !*** ./src/menu_page/menu_items.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drinks: () => (/* binding */ drinks),\n/* harmony export */   pizzas: () => (/* binding */ pizzas)\n/* harmony export */ });\n/* harmony import */ var _img_pizzas_pepperoni_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pizzas/pepperoni.avif */ \"./src/menu_page/img/pizzas/pepperoni.avif\");\n/* harmony import */ var _img_pizzas_margherita_avif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pizzas/margherita.avif */ \"./src/menu_page/img/pizzas/margherita.avif\");\n/* harmony import */ var _img_pizzas_hawaiian_avif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/pizzas/hawaiian.avif */ \"./src/menu_page/img/pizzas/hawaiian.avif\");\n/* harmony import */ var _img_pizzas_four_cheese_avif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/pizzas/four_cheese.avif */ \"./src/menu_page/img/pizzas/four_cheese.avif\");\n/* harmony import */ var _img_pizzas_vegetarian_avif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/pizzas/vegetarian.avif */ \"./src/menu_page/img/pizzas/vegetarian.avif\");\n/* harmony import */ var _img_pizzas_bbq_avif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/pizzas/bbq.avif */ \"./src/menu_page/img/pizzas/bbq.avif\");\n/* harmony import */ var _img_pizzas_meat_avif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/pizzas/meat.avif */ \"./src/menu_page/img/pizzas/meat.avif\");\n/* harmony import */ var _img_pizzas_mexican_avif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/pizzas/mexican.avif */ \"./src/menu_page/img/pizzas/mexican.avif\");\n/* harmony import */ var _img_drinks_coke_avif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/drinks/coke.avif */ \"./src/menu_page/img/drinks/coke.avif\");\n/* harmony import */ var _img_drinks_sprite_avif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/drinks/sprite.avif */ \"./src/menu_page/img/drinks/sprite.avif\");\n/* harmony import */ var _img_drinks_fanta_avif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/drinks/fanta.avif */ \"./src/menu_page/img/drinks/fanta.avif\");\n/* harmony import */ var _img_drinks_sparkling_water_avif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/drinks/sparkling_water.avif */ \"./src/menu_page/img/drinks/sparkling_water.avif\");\n/* harmony import */ var _img_drinks_still_water_avif__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/drinks/still_water.avif */ \"./src/menu_page/img/drinks/still_water.avif\");\n/* harmony import */ var _img_drinks_beer_avif__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/drinks/beer.avif */ \"./src/menu_page/img/drinks/beer.avif\");\n\n\n\n\n\n\n\n\n\nconst pizzas = [\n  {\n    imgSrc: _img_pizzas_pepperoni_avif__WEBPACK_IMPORTED_MODULE_0__,\n    name: 'Pepperoni',\n    description: 'Pepperoni, mozzarella cheese, tomato sauce',\n    price: '$8.00',\n  },\n  {\n    imgSrc: _img_pizzas_margherita_avif__WEBPACK_IMPORTED_MODULE_1__,\n    name: 'Margherita',\n    description: 'Mozzarella cheese, fresh tomatoes, basil',\n    price: '$7.50',\n  },\n  {\n    imgSrc: _img_pizzas_hawaiian_avif__WEBPACK_IMPORTED_MODULE_2__,\n    name: 'Hawaiian',\n    description: 'Pineapple, ham, mozzarella cheese, tomato sauce',\n    price: '$9.00',\n  },\n  {\n    imgSrc: _img_pizzas_four_cheese_avif__WEBPACK_IMPORTED_MODULE_3__,\n    name: 'Four Cheese',\n    description: 'Mozzarella, parmesan, gorgonzola, provolone',\n    price: '$10.00',\n  },\n  {\n    imgSrc: _img_pizzas_vegetarian_avif__WEBPACK_IMPORTED_MODULE_4__,\n    name: 'Vegetarian',\n    description: 'Bell peppers, onions, mushrooms, olives, mozzarella cheese',\n    price: '$8.50',\n  },\n  {\n    imgSrc: _img_pizzas_bbq_avif__WEBPACK_IMPORTED_MODULE_5__,\n    name: 'BBQ',\n    description: 'BBQ chicken, red onions, cheddar cheese, BBQ sauce',\n    price: '$9.50',\n  },\n  {\n    imgSrc: _img_pizzas_meat_avif__WEBPACK_IMPORTED_MODULE_6__,\n    name: 'Meat',\n    description: 'Ground beef, pepperoni, ham, Italian sausage, mozzarella cheese',\n    price: '$11.00',\n  },\n  {\n    imgSrc: _img_pizzas_mexican_avif__WEBPACK_IMPORTED_MODULE_7__,\n    name: 'Mexican',\n    description: 'Chorizo, refried beans, jalapeños, cheddar cheese, spicy sauce',\n    price: '$10.50',\n  },\n];\n\n\n\n\n\n\n\n\nconst drinks = [\n  {\n    imgSrc: _img_drinks_coke_avif__WEBPACK_IMPORTED_MODULE_8__,\n    name: 'Coca-Cola',\n    description: '12 fl oz, glass bottle, classic soda with bubbles',\n    price: '$2.00',\n  },\n  {\n    imgSrc: _img_drinks_sprite_avif__WEBPACK_IMPORTED_MODULE_9__,\n    name: 'Sprite',\n    description: '12 fl oz, can, lemon-lime soda, crisp and refreshing',\n    price: '$2.00',\n  },\n  {\n    imgSrc: _img_drinks_fanta_avif__WEBPACK_IMPORTED_MODULE_10__,\n    name: 'Fanta',\n    description: '12 fl oz, plastic bottle, orange soda with bubbles',\n    price: '$2.00',\n  },\n  {\n    imgSrc: _img_drinks_sparkling_water_avif__WEBPACK_IMPORTED_MODULE_11__,\n    name: 'Sparkling Water',\n    description: '16 fl oz, glass bottle, carbonated, light and refreshing',\n    price: '$1.50',\n  },\n  {\n    imgSrc: _img_drinks_still_water_avif__WEBPACK_IMPORTED_MODULE_12__,\n    name: 'Still Water',\n    description: '16 fl oz, plastic bottle, purified water, no bubbles',\n    price: '$1.00',\n  },\n  {\n    imgSrc: _img_drinks_beer_avif__WEBPACK_IMPORTED_MODULE_13__,\n    name: 'Beer',\n    description: '12 fl oz, can, craft beer, pairs well with pizza',\n    price: '$4.50',\n  },\n];\n\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/menu_items.js?");

/***/ }),

/***/ "./src/about_page/img/img1.avif":
/*!**************************************!*\
  !*** ./src/about_page/img/img1.avif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"24b73b984cd1014fe68a.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/about_page/img/img1.avif?");

/***/ }),

/***/ "./src/about_page/img/img2.avif":
/*!**************************************!*\
  !*** ./src/about_page/img/img2.avif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"17316857c73a1e1959e8.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/about_page/img/img2.avif?");

/***/ }),

/***/ "./src/about_page/img/img3.avif":
/*!**************************************!*\
  !*** ./src/about_page/img/img3.avif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"686f16afe00b5da4cf7c.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/about_page/img/img3.avif?");

/***/ }),

/***/ "./src/about_page/img/img4.avif":
/*!**************************************!*\
  !*** ./src/about_page/img/img4.avif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"644ed542c2a141f3c014.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/about_page/img/img4.avif?");

/***/ }),

/***/ "./src/about_page/img/img5.avif":
/*!**************************************!*\
  !*** ./src/about_page/img/img5.avif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"008a04f1325db1733145.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/about_page/img/img5.avif?");

/***/ }),

/***/ "./src/about_page/img/img6.avif":
/*!**************************************!*\
  !*** ./src/about_page/img/img6.avif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"faab8dccf6d78bbb6ce5.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/about_page/img/img6.avif?");

/***/ }),

/***/ "./src/about_page/img/img7.avif":
/*!**************************************!*\
  !*** ./src/about_page/img/img7.avif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8ce6c7311d94e5d2fcc.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/about_page/img/img7.avif?");

/***/ }),

/***/ "./src/about_page/img/img8.avif":
/*!**************************************!*\
  !*** ./src/about_page/img/img8.avif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e0262adf21d18419a9a.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/about_page/img/img8.avif?");

/***/ }),

/***/ "./src/about_page/img/img9.avif":
/*!**************************************!*\
  !*** ./src/about_page/img/img9.avif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b3c43a3f0a95cd88167e.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/about_page/img/img9.avif?");

/***/ }),

/***/ "./src/assets/icons/clock.png":
/*!************************************!*\
  !*** ./src/assets/icons/clock.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"520c7f58aff604a86e5e.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/icons/clock.png?");

/***/ }),

/***/ "./src/assets/icons/envelope.png":
/*!***************************************!*\
  !*** ./src/assets/icons/envelope.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b250d3064bae3219505.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/icons/envelope.png?");

/***/ }),

/***/ "./src/assets/icons/facebook.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/facebook.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ffd61564a1eddd8b515.svg\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/icons/facebook.svg?");

/***/ }),

/***/ "./src/assets/icons/instagram.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/instagram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51874212bf1259d81c7e.svg\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/icons/instagram.svg?");

/***/ }),

/***/ "./src/assets/icons/location.png":
/*!***************************************!*\
  !*** ./src/assets/icons/location.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06aecfb7a73fe7e13383.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/icons/location.png?");

/***/ }),

/***/ "./src/assets/icons/phone.png":
/*!************************************!*\
  !*** ./src/assets/icons/phone.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8eea51070a74b48a2108.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/icons/phone.png?");

/***/ }),

/***/ "./src/assets/icons/tiktok.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/tiktok.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa732ca42dbf793082c8.svg\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/icons/tiktok.svg?");

/***/ }),

/***/ "./src/assets/icons/x.svg":
/*!********************************!*\
  !*** ./src/assets/icons/x.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ac9952ec2b791d34452.svg\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/icons/x.svg?");

/***/ }),

/***/ "./src/contact_page/img/contact_bg.avif":
/*!**********************************************!*\
  !*** ./src/contact_page/img/contact_bg.avif ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"85097cf4010921ec1794.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/contact_page/img/contact_bg.avif?");

/***/ }),

/***/ "./src/home_page/img/home_bg.avif":
/*!****************************************!*\
  !*** ./src/home_page/img/home_bg.avif ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ca81e8d5485b3893aa3d.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/home_page/img/home_bg.avif?");

/***/ }),

/***/ "./src/menu_page/img/drinks/beer.avif":
/*!********************************************!*\
  !*** ./src/menu_page/img/drinks/beer.avif ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fdf301e746cf945e1a25.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/drinks/beer.avif?");

/***/ }),

/***/ "./src/menu_page/img/drinks/coke.avif":
/*!********************************************!*\
  !*** ./src/menu_page/img/drinks/coke.avif ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"da11f86a1f8a596e0afc.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/drinks/coke.avif?");

/***/ }),

/***/ "./src/menu_page/img/drinks/fanta.avif":
/*!*********************************************!*\
  !*** ./src/menu_page/img/drinks/fanta.avif ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d3b176acca482e7ac1cf.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/drinks/fanta.avif?");

/***/ }),

/***/ "./src/menu_page/img/drinks/sparkling_water.avif":
/*!*******************************************************!*\
  !*** ./src/menu_page/img/drinks/sparkling_water.avif ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6b4183fdf9a2a36ac387.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/drinks/sparkling_water.avif?");

/***/ }),

/***/ "./src/menu_page/img/drinks/sprite.avif":
/*!**********************************************!*\
  !*** ./src/menu_page/img/drinks/sprite.avif ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ccf2ad21056943577700.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/drinks/sprite.avif?");

/***/ }),

/***/ "./src/menu_page/img/drinks/still_water.avif":
/*!***************************************************!*\
  !*** ./src/menu_page/img/drinks/still_water.avif ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aa18bdd37bb64029f424.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/drinks/still_water.avif?");

/***/ }),

/***/ "./src/menu_page/img/menu_bg.avif":
/*!****************************************!*\
  !*** ./src/menu_page/img/menu_bg.avif ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0c1d48efc1b27f28093.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/menu_bg.avif?");

/***/ }),

/***/ "./src/menu_page/img/pizzas/bbq.avif":
/*!*******************************************!*\
  !*** ./src/menu_page/img/pizzas/bbq.avif ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ec380d81ce01c77b680.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/pizzas/bbq.avif?");

/***/ }),

/***/ "./src/menu_page/img/pizzas/four_cheese.avif":
/*!***************************************************!*\
  !*** ./src/menu_page/img/pizzas/four_cheese.avif ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4afed5f1df1d5476a446.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/pizzas/four_cheese.avif?");

/***/ }),

/***/ "./src/menu_page/img/pizzas/hawaiian.avif":
/*!************************************************!*\
  !*** ./src/menu_page/img/pizzas/hawaiian.avif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"855b3dc1c3f1705843c0.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/pizzas/hawaiian.avif?");

/***/ }),

/***/ "./src/menu_page/img/pizzas/margherita.avif":
/*!**************************************************!*\
  !*** ./src/menu_page/img/pizzas/margherita.avif ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b0161b77686f79d2f7b.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/pizzas/margherita.avif?");

/***/ }),

/***/ "./src/menu_page/img/pizzas/meat.avif":
/*!********************************************!*\
  !*** ./src/menu_page/img/pizzas/meat.avif ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9430ab07663afaccf350.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/pizzas/meat.avif?");

/***/ }),

/***/ "./src/menu_page/img/pizzas/mexican.avif":
/*!***********************************************!*\
  !*** ./src/menu_page/img/pizzas/mexican.avif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"618ca0652c58ce6f1426.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/pizzas/mexican.avif?");

/***/ }),

/***/ "./src/menu_page/img/pizzas/pepperoni.avif":
/*!*************************************************!*\
  !*** ./src/menu_page/img/pizzas/pepperoni.avif ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4e57fa3d1d449d2053f8.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/pizzas/pepperoni.avif?");

/***/ }),

/***/ "./src/menu_page/img/pizzas/vegetarian.avif":
/*!**************************************************!*\
  !*** ./src/menu_page/img/pizzas/vegetarian.avif ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dbe07686a3c2878eb16c.avif\";\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page/img/pizzas/vegetarian.avif?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;