// const BASE_URL = 'https://restcountries.com/v3.1/name/'
// my key 32917546-69d1ddfd267a57e0819ed8262
// https://pixabay.com/api/?key=32917546-69d1ddfd267a57e0819ed8262&q=cat&image_type=photo&orientation=horizontal&safesearch=true
const BASE_URL = 'https://pixabay.com/api/?key=32917546-69d1ddfd267a57e0819ed8262&q=';




export function fetchPhotos(name) {
  return fetch(`https://pixabay.com/api/?key=32917546-69d1ddfd267a57e0819ed8262&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then(response => response.json())
    .catch(error => console.log(error))
}