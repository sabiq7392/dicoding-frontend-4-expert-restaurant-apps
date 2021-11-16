/* eslint-disable no-alert */
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { Mame as $ } from '../lib/Mame';
import CreateTemplate from '../templates/template-creator';

class Favorite {
  static async render() {
    return `
      <div id="mainContents">
        <div id="containerFavoriteRestaurants">

        </div>
      </div>
    `;
  }

  static async afterRender() {
    try {
      const restaurants = await FavoriteRestaurantIdb.getAll();
      const containerRestaurants = $('#containerFavoriteRestaurants');

      restaurants.forEach((restaurant) => {
        containerRestaurants.innerHTML += CreateTemplate.RestaurantItems(restaurant);
      });
    } catch (error) {
      alert(`${error}, try to refresh page again or check your internet connection`);
      throw new Error(error);
    }
  }
}

export default Favorite;
