// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      item =>
        `<li class="gallery-item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>`
    )
    .join('');
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.innerHTML = addGalleryMarkup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

galleryEl.style.listStyle = 'none';

console.log(galleryItems);
