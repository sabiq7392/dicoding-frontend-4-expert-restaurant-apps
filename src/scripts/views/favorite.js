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
    const restaurants = await FavoriteRestaurantIdb.getAll();
    const containerRestaurants = $('#containerFavoriteRestaurants');

    restaurants.forEach((restaurant) => {
      containerRestaurants.innerHTML += CreateTemplate.RestaurantItems(restaurant);
    });
  }
}

export default Favorite;
