/* eslint-disable no-return-assign */
import { Mame as $ } from '../lib/Mame';
import DicodingRestaurantSource from '../data/dicoding-restaurant';
import CONFIG from '../globals/config';
import FavoriteButton from '../utils/favorite-button';
import { createButtonFavoriteTemplate } from '../templates/template-creator';

class Detail {
  static async render() {
    return `
      <div id="mainContents">
        <div id="containerDetailRestaurant">

        </div>
      </div>
    `;
  }

  static async afterRender(id) {
    const containerRestaurant = $('#containerDetailRestaurant');
    const restaurant = await DicodingRestaurantSource.detail(id);

    containerRestaurant.innerHTML = await this.#template(restaurant);
    await this.#menuFoods(restaurant);
    await this.#menuDrinks(restaurant);
    await this.#customerReviews(restaurant);
    await FavoriteButton.init({
      page: 'detail',
      buttons: document.querySelector('.add-favorite'),
      data: restaurant,
    });
  }

  static async #menuFoods(restaurant) {
    const restaurantMenuFoods = $('#restaurantMenuFoods');
    restaurant.menus.foods.forEach((food) => {
      restaurantMenuFoods.innerHTML += `<li tabindex="0">${food.name}</li>`;
    });
  }

  static async #menuDrinks(restaurant) {
    const restaurantMenuDrinks = $('#restaurantMenuDrinks');
    restaurant.menus.drinks.forEach((drink) => {
      restaurantMenuDrinks.innerHTML += `<li tabindex="0">${drink.name}</li>`;
    });
  }

  static async #customerReviews(restaurant) {
    const restaurantCustomerReviews = $('#restaurantCustomerReviews');
    restaurant.customerReviews.forEach((customerReview) => {
      restaurantCustomerReviews.innerHTML += `
      <li>
        <h4 tabindex="0">${customerReview.name}</h4>
        <p tabindex="0">${customerReview.review}</p>
        <time tabindex="0"><small>${customerReview.date}</small></time>
      </li>
    `;
    });
  }

  static async #template(restaurant) {
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
            </div>
            <p 
              class="restaurant-city" 
              tabindex="0" 
              title="city ${restaurant.city}">
              ${restaurant.city}
            </p>
            <address 
              class="restaurant-address" 
              tabindex="0" 
              title="address ${restaurant.address}">
              ${restaurant.address}
            </address>
          </header>
          <div class="d-flex gap-md">
            <section class="container-menu-foods">
              <h3 tabindex="0">Menu Makanan</h3>
              <ol id="restaurantMenuFoods">

              </ol>
            </section>
            <section class="container-menu-drinks">
              <h3 tabindex="0">Menu Minuman</h3>
              <ol id="restaurantMenuDrinks">

              </ol>
            </section>         
          </div>
          <section class="container-description">
            <h3 tabindex="0">Description</h3>
            <p tabindex="0" class="restaurant-description">
              ${restaurant.description}
            </p>
          </section>
          <section class="container-customer-reviews">
            <h3 tabindex="0">Reviews</h3>
            <details>
              <ol id="restaurantCustomerReviews">

              </ol>
            </details>
          </section>
        </div>
      </article>
    `;
  }
}

export default Detail;
