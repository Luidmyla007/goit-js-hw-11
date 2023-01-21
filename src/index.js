import Notiflix from 'notiflix';
import { fetchPhotos } from './fetchPhotos.js';
import { renderGallery } from './renderGallery.js';

const a = 210;
console.log(a);

const searchForm = document.querySelector(".search-form");
const loadBtn = document.querySelector('.load-more');
loadBtn.hidden = true;
let page = 1;
const perPage = 40;



searchForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const { searchQuery } = event.currentTarget.elements;
  const query = event.currentTarget.searchQuery.value;
     if (query === '') {
    return (myGallery.innerHTML = '')
  }
  
  fetchPhotos(query, page, perPage)
    .then(({ data }) => {
         if (data.totalHits === 0) {
        emptyRequest()
      }
      else {
        console.log(data);
        renderGallery(data.hits);
        if (data.totalHits > perPage) {
          loadBtn.hidden = false;
        }
      }
    })
    .catch(emptyRequest)
    
    }

loadBtn.addEventListener('click', onLoad);
function onLoad() {
  page += 1;
  fetchPhotos(query, page, perPage).then(({ data }) => {
    renderGallery(data.hits);
    const totalPages = Math.ceil(data.totalHits / perPage)

      if (page > totalPages) {
        loadBtn.hidden = true;
        return Notiflix.Notify.info(
          "We're sorry, but you've reached the end of search results.");
        
      }
   
    })
  .catch(emptyRequest)
}



function emptyRequest() {
  Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
}