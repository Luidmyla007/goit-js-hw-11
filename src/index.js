import Notiflix from 'notiflix';
import axios from 'axios';
import { fetchPhotos } from './fetchPhotos.js';
import { renderGallery } from './renderGallery.js';


const a = 26;
console.log(a);

const searchForm = document.querySelector(".search-form");

searchForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const { searchQuery } = event.currentTarget.elements;
  const name = searchQuery.value;
 
 

  
//   if (name === '') {
//     return (countryList.innerHTML = ''), (countryInfo.innerHTML = '')
//   }
 fetchPhotos(name)
    .then(data => {
      console.log(data);
      myGallery.insertAdjacentHTML('beforeend', renderGallery(data))
      
      })
      .catch(badRequest)
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