import Notiflix from 'notiflix';
import axios from 'axios';
import { fetchPhotos } from './fetchPhotos.js'
// my key 32917546-69d1ddfd267a57e0819ed8262
// https://pixabay.com/api/?key=32917546-69d1ddfd267a57e0819ed8262&q=cat&image_type=photo&orientation=horizontal&safesearch=true

const a = 25;
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
      console.log(data)
     
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