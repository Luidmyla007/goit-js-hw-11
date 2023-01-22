import Notiflix from 'notiflix';
import { fetchPhotos } from './fetchPhotos.js';
import { renderGallery } from './renderGallery.js';

const a = 25;
console.log(a);

const searchForm = document.querySelector(".search-form");
const loadBtn = document.querySelector('.load-more');
loadBtn.hidden = true;
let query = '';
let page = 1;
const perPage = 40;



searchForm.addEventListener('submit', onSubmit);
loadBtn.addEventListener('click', onLoad);

function onSubmit(event) {
  event.preventDefault();
  // myGallery.innerHTML = '';
  const { elements: {
    searchQuery },
  } = event.target;
  const query = searchQuery.value;
  
     if (query === '') {
    return (myGallery.innerHTML = '')
  }
  
  fetchPhotos(query, page, perPage)
    .then(({ data }) => {
      if (data.totalHits === 0) {
        emptyRequest()
      }
      else {
        renderGallery(data.hits);
        if (data.totalHits > perPage) {
          loadBtn.hidden = false;
        }
       }
      })
    .catch(emptyRequest)    
    }


function onLoad() {


// на цьому етапі консоль видає помилку і пише, що не бачить "searchQuery" і далі код не виконується,
// якщо 61 - й рядок прибрати - помилка в консолі: не знаходить змінну "query" в рядку 71,
// якщо в рядку 71 в параметр функції передати тільки page, то замість поточного значення інпута він підставляє число 2 (номер сторінки) і рендерить
// фото зовсім не пов'язані з запитом 
// тому прийшлося функцію loadBtn.addEventListener('click', onLoad) закинути в середину функції onSubmit(event), тільки тоді запрацювало

  page += 1;
  fetchPhotos(query, page, perPage).then(({ data }) => {
    renderGallery(data.hits);
    const totalPages = Math.ceil(data.totalHits / perPage)

      if (page > totalPages) {
        loadBtn.hidden = true;
        endOfShow();        
      }   
    })
  .catch(emptyRequest)
}

function endOfShow() {
  Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
}


function emptyRequest() {
  Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
}