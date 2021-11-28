/* eslint-disable no-alert */
import { Mame as $ } from '../lib/Mame';
import DicodingRestaurantSource from '../data/dicoding-restaurant-source';
import FavoriteButton from '../utils/favorite-button';
import CreateTemplate from './templates/template-creator';

class Default {
  static async render() {
    return `
      <hero-element id="hero"></hero-element>
      
      <div id="mainContents">
        <div class="skeleton">
          <h1 tabindex="0">Explore Restaurants</h1>
        </div>
        <div id="containerRestaurants">

        </div>
      </div>
    `;
  }

  static async afterRender() {
    try {
      const restaurants = await DicodingRestaurantSource.getAll();
      const containerRestaurants = $('#containerRestaurants');

      await restaurants.forEach((restaurant) => {
        containerRestaurants.innerHTML += CreateTemplate.RestaurantItems(restaurant);
      });

      await FavoriteButton.init({
        buttons: $('.add-favorite'),
        data: restaurants,
      });
    } catch (error) {
      alert('try to refresh page or check your internet connection');
      throw new Error(error);
    }
  }
}

export default Default;
