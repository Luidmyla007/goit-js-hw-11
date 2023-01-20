const myGallery = document.querySelector('.gallery');
export { renderGallery }

function renderGallery(images) {
  const markup = images
    .map(image => {
      const { webformatURL, tags, likes, views, comments, downloads } = image
      return `
        
          <div class="gallery-item">
            <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b>${likes}</p>
              <p class="info-item"><b>Views</b>${views}</p>
              <p class="info-item"><b>Comments</b>${comments}</p>
              <p class="info-item"><b>Downloads</b>${downloads}</p>
            </div>
          </div>
        
      `
    })
    .join('')

  myGallery.insertAdjacentHTML('beforeend', markup)
}


// function renderGallery(photos) {
//     const markup = photos
//         .map(photo => {
//         const {webformatURL, tags, likes, views, comments, downloads } = photo
//         return `
//         <div class="photo-card">
//             <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//             <div class="info">
//                 <p class="info-item">
//                 <b>Likes${likes}</b>
//                 </p>
//                 <p class="info-item">
//                 <b>Views${views}</b>
//                 </p>
//                 <p class="info-item">
//                 <b>Comments${comments}</b>
//                 </p>
//                 <p class="info-item">
//                 <b>Downloads${downloads}</b>
//                 </p>
//             </div>
//         </div>`
//     })
//         .join('')
   
//      myGallery.insertAdjacentHTML('beforeend', markup)
  
// }