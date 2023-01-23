import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '32917546-69d1ddfd267a57e0819ed8262&';
const PHOTO_PARAM = 'image_type=photo&orientation=horizontal&safesearch=true';

async function fetchPhotos(query, page = 1) {
  const response = await axios.get(
    `${BASE_URL}?key=${MY_KEY}&q=${query}&${PHOTO_PARAM}&page=${page}&per_page=40`)
  return response
};

export { fetchPhotos };

