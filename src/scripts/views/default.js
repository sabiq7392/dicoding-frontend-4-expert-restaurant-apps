import DicodingRestaurantSource from '../data/dicoding-restaurant-source.js';
import FavoriteButton from '../utils/favorite-button';
import CONFIG from '../globals/config';
import { Mame as $ } from '../lib/Mame';

const Default = {
  async render() {
    return `
      <div id="exploreRestaurants">
        <h1 tabindex="0">Explore Restaurants</h1>
        <div id="containerRestaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantSource.getAll();
    const containerRestaurants = $('#containerRestaurants');

    restaurants.forEach((restaurant, indexIcon) => {
      containerRestaurants.innerHTML += this._template(restaurant, indexIcon);
    });

    FavoriteButton.init();
  },

  _template(restaurant, indexIcon) {
    return `
      <article id="${restaurant.id}" class="restaurant" tabindex="0">
        <img 
          src="${CONFIG.IMG_URL.LARGE}/${restaurant.pictureId}" 
          alt="${restaurant.name}" 
          class="restaurant-picture">
        <section>
          <header>
            <div>
              <h2 class="restaurant-name" tabindex="0">${restaurant.name}</h2>
              <div class="d-flex">
                <span aria-label="rating" tabindex="0">
                  <i class="bi bi-star-fill"></i> 
                  <span class="restaurant-rating">${restaurant.rating}</span>
                </span>
                <button 
                  class="add-favorite" 
                  aria-label="add to favorite" 
                  type="button">
                  ${FavoriteButton.renderDefaultOrUpdate(indexIcon)}
                </button>
                <a class="detail" href="#detail/${restaurant.id}">
                  <i class="bi bi-eye-fill"></i>
                  Detail
                </a>
              </div>
              <address 
                class="restaurant-city" 
                tabindex="0" 
                title="location ${restaurant.city}">
                ${restaurant.city}
              </address>
            </div>
          </header>
          <p class="restaurant-description">${restaurant.description}</p>
        </section>
      </article>
    `;
  },
};

export default Default;
