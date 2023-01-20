import Notiflix from 'notiflix';
import { fetchPhotos } from './fetchPhotos.js';
import { renderGallery } from './renderGallery.js';


const a = 276;
console.log(a);

const searchForm = document.querySelector(".search-form");
const loadBtn = document.querySelector('.load-more');
loadBtn.hidden = true;
let page = 1;
const perPage = 40;

// loadBtn.addEventListener('click', onLoad);


// fetchPhotos()
//   .then(({ data }) => {
//     console.log(data);
//     renderGallery( data.hits )
//     load.hidden = false
//   })
// .catch(error => console.log(error))



searchForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const { searchQuery } = event.currentTarget.elements;
  const name = searchQuery.value;
     if (name === '') {
    return (myGallery.innerHTML = '')
  }
  
  fetchPhotos(name, page, perPage)
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
       .catch(error => console.log(error))
    }



// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

function emptyRequest() {
  Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
}