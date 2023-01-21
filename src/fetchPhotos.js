
// my key 32917546-69d1ddfd267a57e0819ed8262
// https://pixabay.com/api/?key=32917546-69d1ddfd267a57e0819ed8262&q=cat&image_type=photo&orientation=horizontal&safesearch=true

import axios from 'axios';
export { fetchPhotos };

let page = 1;
const perPage = 40;

const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '32917546-69d1ddfd267a57e0819ed8262&';
const PHOTO_PARAM = 'image_type=photo&orientation=horizontal&safesearch=true';

async function fetchPhotos(query, page = 1, perPage = 40) {
  const response = await axios.get(
    `${BASE_URL}?key=${MY_KEY}&q=${query}&${PHOTO_PARAM}&page=${page}&per_page=${perPage}`)
  return response
}


// export function fetchPhotos(name) {
//   return fetch(`${BASE_URL}?key=${MY_KEY}&q=${name}&${PHOTO_PARAM}`)
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }