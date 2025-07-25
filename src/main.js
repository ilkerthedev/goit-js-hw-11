import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery } from './js/render-functions.js';
import { showLoader } from './js/render-functions.js';
import { hideLoader } from './js/render-functions.js';
import { createGallery } from './js/render-functions.js';

const form = document.querySelector('.form');
const formInput = document.querySelector('[name="search-text"]')
const formBtn = document.querySelector("button");

form.addEventListener('submit', clickStart)
function clickStart(event) {
    event.preventDefault()
    let inputValue = formInput.value.trim();
    if (inputValue === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter valid values',
        });
        return;
    }
    clearGallery();
    showLoader();

    getImagesByQuery(inputValue)
    .then(hits => {  // Artık direkt hits array'i geliyor
      if (hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        return;
      }
        createGallery(hits);  // Direkt hits'i gönderiyoruz
        console.log(hits);
    })
    .catch(error => {
      console.error('Hata detayı:', error); // Debug için
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Try again!'
      });
    })
    .finally(() => {
      hideLoader();
    });
    
}