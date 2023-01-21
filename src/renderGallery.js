const myGallery = document.querySelector('.gallery');
export { renderGallery }

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

