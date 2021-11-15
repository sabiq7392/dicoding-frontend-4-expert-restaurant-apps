import DicodingRestaurantSource from '../data/dicoding-restaurant';
import FavoriteButton from '../utils/favorite-button';
import CONFIG from '../globals/config';
import { Mame as $ } from '../lib/Mame';
import { createButtonFavoriteTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

class Default {
  static async render() {
    return `
      <hero-element id="hero"></hero-element>
      <div id="mainContents">
        <h1 tabindex="0">Explore Restaurants</h1>
        <div id="containerRestaurants">

        </div>
      </div>
    `;
  }

  static async afterRender() {
    const restaurants = await DicodingRestaurantSource.getAll();
    const containerRestaurants = $('#containerRestaurants');

    restaurants.forEach((restaurant, indexButton) => {
      containerRestaurants.innerHTML += this.#template(restaurant, indexButton);

      // FavoriteButton.init({
      //   buttons: $('.add-favorite'),
      //   restaurant: {
      //     id: restaurant.id,
      //     name: restaurant.name,
      //   },
      // });
    });
    // const buttons = $('.add-favorite');
    // buttons.forEach((button, index) => {
    //   button.addEventListener('click', () => {
    //     console.log(restaurants[index].name)
    //   });
    // });
    await FavoriteButton.init({
      page: 'default',
      buttons: $('.add-favorite'),
      data: restaurants,
    });
  }

  static #template(restaurant) {
    return `
      <article id="${restaurant.id}" class="restaurant" tabindex="0">
        <img 
          src="${CONFIG.IMG_URL.LARGE}/${restaurant.pictureId}" 
          alt="${restaurant.name}" 
          class="restaurant-picture">
        <div class="wrapper">
          <header>
            <h2 class="restaurant-name" tabindex="0">${restaurant.name}</h2>
            <div class="d-flex gap-md align-items-center">
              <span aria-label="rating" tabindex="0">
                <i class="bi bi-star-fill"></i> 
                <span class="restaurant-rating">${restaurant.rating}</span>
              </span>
              <button 
                class="add-favorite" 
                aria-label="add to favorite" 
                type="button">
              ${createButtonFavoriteTemplate()}
              </button>
              <a class="detail" href="#detail/${restaurant.id}">
                <i class="bi bi-eye-fill"></i>
                Detail
              </a>
            </div>
            <p 
              class="restaurant-city" 
              tabindex="0" 
              title="city ${restaurant.city}">
              ${restaurant.city}
            </p>
          </header>
          <p class="restaurant-description">${restaurant.description}</p>
        </div>
      </article>
    `;
  }

  // static #favoriteButton(buttons) {
  //   const favoriteButton = new FavoriteButton(buttons);
  //   return favoriteButton;
  // }
}

// ${FavoriteButton.renderDefaultOrUpdate(indexIcon)}

export default Default;
