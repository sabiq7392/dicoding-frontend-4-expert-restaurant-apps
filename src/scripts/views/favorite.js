/* eslint-disable no-alert */
import { Mame as $ } from '../lib/Mame';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import CreateTemplate from './templates/template-creator';
import FavoriteButton from '../utils/favorite-button';

class Favorite {
  static async render() {
    return `
      <div id="mainContents">
        <h1 tabindex="0">Favorite Restaurants</h1>
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

      await FavoriteButton.init({
        buttons: $('.add-favorite'),
        data: restaurants,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Favorite;
