import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const myLoader = document.querySelector(".loader");

console.log("The value of myLoader when the script is loaded:", myLoader);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
}); 

export function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <div class="info">
        <p class="info-item"><span class="label">Likes:</span> ${image.likes}</p>
        <p class="info-item"><span class="label">Views:</span> ${image.views}</p>
        <p class="info-item"><span class="label">Comments:</span> ${image.comments}</p>
        <p class="info-item"><span class="label">Downloads:</span> ${image.downloads}</p>
        </div>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = ' ';
}

export function showLoader() {
  myLoader.classList.add('visible');
}

export function hideLoader() {
  myLoader.classList.remove('visible');
}