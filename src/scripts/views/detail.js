/* eslint-disable no-alert */
import { Mame as $ } from '../lib/Mame';
import DicodingRestaurantSource from '../data/dicoding-restaurant-source';
import FavoriteButton from '../utils/favorite-button';
import CreateTemplate from '../templates/template-creator';

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
    try {
      const restaurant = await DicodingRestaurantSource.detail(id);
      const containerRestaurant = $('#containerDetailRestaurant');

      containerRestaurant.innerHTML = CreateTemplate.RestaurantItemDetail(restaurant);
      this.#menuFoods(restaurant);
      this.#menuDrinks(restaurant);
      this.#customerReviews(restaurant);

      await FavoriteButton.init({
        buttons: $('.add-favorite'),
        data: restaurant,
      });
    } catch (error) {
      alert(`${error}, try to refresh page again or check your internet connection`);
      throw new Error(error);
    }
  }

  static #menuFoods(restaurant) {
    const restaurantMenuFoods = $('#restaurantMenuFoods');
    restaurant.menus.foods.forEach((food) => {
      restaurantMenuFoods.innerHTML += `<li tabindex="0">${food.name}</li>`;
    });
  }

  static #menuDrinks(restaurant) {
    const restaurantMenuDrinks = $('#restaurantMenuDrinks');
    restaurant.menus.drinks.forEach((drink) => {
      restaurantMenuDrinks.innerHTML += `<li tabindex="0">${drink.name}</li>`;
    });
  }

  static #customerReviews(restaurant) {
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
}

export default Detail;
