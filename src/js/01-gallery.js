// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

// console.log(galleryItems);

const galleryElement = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryElement.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src= "${preview}"
          data-source= "${original}"
          alt="Image "${description}"
        />
      </a>
    </li>
    `;
    })
    .join('');
}

galleryElement.addEventListener('click', onImageClick);

function onImageClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  } else {
    event.preventDefault();
    const bigImageUrl = event.target.dataset.source;
    const modal = basicLightbox.create(
      `
		<img width="1400" height="900" src="${bigImageUrl}">
	`
    );
    modal.show();

    document.addEventListener('keydown', onModalClose);

    function onModalClose(event) {
      if (event.key === 'Escape') {
        modal.close();
        document.removeEventListener('keydown', onModalClose);
      }
    }
  }
}
