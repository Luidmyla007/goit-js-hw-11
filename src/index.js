import Notiflix from 'notiflix';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '32917546-69d1ddfd267a57e0819ed8262&';
const PHOTO_PARAM = 'image_type=photo&orientation=horizontal&safesearch=true';

async function fetchPhotos(query, page = 1, perPage = 40) {
  const response = await axios.get(
    `${BASE_URL}?key=${MY_KEY}&q=${query}&${PHOTO_PARAM}&page=${page}&per_page=${perPage}`)
  return response
}

const myGallery = document.querySelector('.gallery');

function renderGallery(images) {
  const markup = images
    .map(({webformatURL, tags, likes, views, comments, downloads}) => {
      return `  
          <div class="gallery-wrap">      
          <div class="gallery-item">
            <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b>${likes}</p>
              <p class="info-item"><b>Views</b>${views}</p>
              <p class="info-item"><b>Comments</b>${comments}</p>
              <p class="info-item"><b>Downloads</b>${downloads}</p>
            </div>
          </div>  
          </div>      
      `
    })
    .join('')

  myGallery.insertAdjacentHTML('beforeend', markup)
}

const searchForm = document.querySelector(".search-form");
const searchQuery = document.querySelector('input[name="searchQuery"]');
const loadBtn = document.querySelector('.load-more');
loadBtn.hidden = true;
let query = searchQuery.value;
let page = 1;
const perPage = 40;


searchForm.addEventListener('submit', onSubmit);


function onSubmit(event) {
  event.preventDefault();
  myGallery.innerHTML = '';
  const { elements: {
    searchQuery },
  } = event.target;

  const query = event.currentTarget.searchQuery.value;
  
  if (!query) { 
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
          loadBtn.addEventListener('click', onLoad);
          function onLoad() {
          page += 1;
          fetchPhotos(query, page, perPage).then(({ data }) => {
          renderGallery(data.hits);
          const totalPages = Math.ceil(data.totalHits / perPage);
           if (page >= totalPages) {
            loadBtn.hidden = true;
            endOfShow();        
           }   
      })  
     }
    }
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