
// my key 32917546-69d1ddfd267a57e0819ed8262
// https://pixabay.com/api/?key=32917546-69d1ddfd267a57e0819ed8262&q=cat&image_type=photo&orientation=horizontal&safesearch=true

import axios from 'axios';
export { fetchPhotos };

const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '32917546-69d1ddfd267a57e0819ed8262&';
const PHOTO_PARAM = 'image_type=photo&orientation=horizontal&safesearch=true';

async function fetchPhotos(name, page, perPage) {
  const response = await axios.get(
    `${BASE_URL}?key=${MY_KEY}&q=${name}&${PHOTO_PARAM}&page=${page}&per_page=${perPage}`)
  return response
}


// export function fetchPhotos(name) {
//   return fetch(`${BASE_URL}?key=${MY_KEY}&q=${name}&${PHOTO_PARAM}`)
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }