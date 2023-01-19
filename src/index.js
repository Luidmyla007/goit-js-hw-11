import Notiflix from 'notiflix';
import { fetchPhotos } from './fetchPhotos.js';
import { renderGallery } from './renderGallery.js';


const a = 26;
console.log(a);

const searchForm = document.querySelector(".search-form");
const load = document.querySelector('.load-more');
let page = 1;
const perPage = 40;

// load.addEventListener('click', onLoad);


fetchPhotos()
  .then(({ data }) => {
    console.log(data);
    renderGallery( data.hits )
    load.hidden = false
  })
.catch(error => console.log(error))



searchForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const { searchQuery } = event.currentTarget.elements;
  const name = searchQuery.value;
     if (name === '') {
    return (myGallery.innerHTML = '')
    }
  fetchPhotos(name)
    .then(data => {
       console.log(data);
      renderGallery(data.hits);
      
      })
      //  .catch(badRequest)
    }



// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

function badRequest() {
  Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
}