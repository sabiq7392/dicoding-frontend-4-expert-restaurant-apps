import { Mame as $ } from '../lib/Mame';
import DicodingRestaurantSource from '../data/dicoding-restaurant';
import FavoriteButton from '../utils/favorite-button';
import CreateTemplate from '../templates/template-creator';

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

    restaurants.forEach((restaurant) => {
      containerRestaurants.innerHTML += CreateTemplate.pageDefault(restaurant);
    });

    await FavoriteButton.init({
      buttons: $('.add-favorite'),
      data: restaurants,
    });
  }
}

export default Default;
