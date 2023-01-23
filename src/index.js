import Notiflix from 'notiflix';
import { fetchPhotos } from './fetch.js';
import { renderGallery } from './render.js';


const myGallery = document.querySelector('.gallery');
const searchForm = document.querySelector(".search-form");
// const searchQuery = document.querySelector('input[name="searchQuery"]');
// console.log(searchQuery);
const loadBtn = document.querySelector('.load-more');
loadBtn.hidden = true;
// let query = searchQuery.value;
// console.log(query);
let query = '';
let page = 1;
const perPage = 40;


searchForm.addEventListener('submit', onSubmit);

function onSubmit(event){
  event.preventDefault();
  myGallery.innerHTML = '';
  page = 1;
  query = searchForm.children[0].value.trim();

  if (!query) {
      return (myGallery.innerHTML = '')
  }
  
  fetchPhotos(query, page)
    .then(({ data }) => {
      if (data.totalHits === 0) {
        emptyRequest()
      }
      
      renderGallery(data.hits);
      if (data.totalHits > perPage) {
        loadBtn.hidden = false;
      }
      })
    .catch(emptyRequest);
}

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
  .catch(emptyRequest);
}
  








function endOfShow() {
  Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
}


function emptyRequest() {
  Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
}

// function onSubmit(event) {
//   event.preventDefault();
//   page = 1;
//   myGallery.innerHTML = '';
//   const { elements: { searchQuery } } = event.target;

//   const query = event.currentTarget.searchQuery.value;
  
//   if (!query) { 
//     return (myGallery.innerHTML = '')
//   }
  
//   fetchPhotos(query, page)
//     .then(({ data }) => {
//         if (data.totalHits === 0) {
//         emptyRequest()
//       }
//       else {
//         renderGallery(data.hits);
//         if (data.totalHits > perPage) {
//           loadBtn.hidden = false;
//           loadBtn.addEventListener('click', onLoad);
//           function onLoad() {
//           page += 1;
//           fetchPhotos(query, page, perPage).then(({ data }) => {
//           renderGallery(data.hits);
//           const totalPages = Math.ceil(data.totalHits / perPage);
//            if (page >= totalPages) {
//             loadBtn.hidden = true;
//             endOfShow();        
//            }   
//       })  
//      }
//     }
//    }
//   })
//     .catch(emptyRequest)    
//  }
