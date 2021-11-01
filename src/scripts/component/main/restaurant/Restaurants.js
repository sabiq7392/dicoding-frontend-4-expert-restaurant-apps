import STORAGE from '../../../storage/storage.js';
import data from '../../../../DATA.json';
import { HandleData } from '../../../storage/HandleData.js';
import { $ } from '../../../lib/Mame.js';
import { FavoriteButton } from './FavoriteButton.js';

'use strict';

class Restaurants extends HTMLElement {
  connectedCallback() {
    this.#render();
  }
  
  #render() {
    let indexStorage = 0;
    data.restaurants.forEach((restaurant) => {
      const { id, name, description, pictureId, city, rating } = restaurant;

      this.innerHTML += `
        <article id="${id}" class="restaurant">
          <img src="${pictureId}" alt="${name}" class="restaurant-picture">
          <section>
            <header>
              <div>
                <h2 class="restaurant-name">${name}</h2>
                <div class="d-flex">
                  <span aria-label="rating">
                    <i class="bi bi-star-fill"></i> 
                    <span class="restaurant-rating">${rating}</span>
                  </span>
                  <button class="add-favorite" aria-label="add to favorite" type="button">
                    ${FavoriteButton.iconText(indexStorage)}
                  </button>
                </div>
                <address class="restaurant-city">${city}</address>
              </div>
            </header>
            <p class="restaurant-description">${description}</p>
          </section>
        </article>
      `;
      
      const favoriteButton = new FavoriteButton();
      favoriteButton.run();

      indexStorage++;
    });
  }
}

customElements.define('container-restaurants', Restaurants);