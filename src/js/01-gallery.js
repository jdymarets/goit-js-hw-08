import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(galleryItems);

// add module-markup
const galleryModuleMarkup = window.document.createElement('div');
galleryModuleMarkup.classList.add('gallery-markup');

// add title
const galleryTitle = window.document.createElement('h2');
galleryTitle.textContent = 'Gallery';
galleryModuleMarkup.appendChild(galleryTitle);

//add murkup
const galleryMarkupRef = window.document.createElement('div');
galleryMarkupRef.classList.add('gallery');

const createElement = images =>
  images
    .map(
      ({ preview, original, description }) =>
        `<div class = 'gallery__item'>
    <a href="${original}" class = 'gallery__link'>
<img src="${preview}" alt="${description}" title="${description}" class = 'gallery__image'></img>
    </a>
    </div>`
    )
    .join('');

const galleryMarkup = createElement(galleryItems);

galleryMarkupRef.innerHTML = galleryMarkup;

galleryModuleMarkup.appendChild(galleryMarkupRef);

//add to DOM

window.document.querySelector('body').appendChild(galleryMarkupRef);

//simplelightbox initialization

new SimpleLightbox('.gallery a');
