import data from '../../../DATA.json';
import { $ } from '../../lib/Mame.js';
'use strict';

class Restaurants extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #render() {
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
                    <i class="icon-favorite bi bi-heart"></i> 
                    <span class="text-favorite">Add to Favorite</span>
                  </button>
                </div>
                <address class="restaurant-city">${city}</address>
              </div>
            </header>
            <p class="restaurant-description">${description}</p>
          </section>
        </article>
      `;
      this.#button();
    });
  }

  #button() {
    const buttons = $('.add-favorite');
    const addedToFavorite = (button) => {
      button.textContent.includes('Add to Favorite');
    };

    buttons.forEach((button) => {
      $(button).onClick(() => {
        !addedToFavorite ? cancel() : add();
      });

      function add() {
        button.innerHTML = `
          <i class="icon-favorite bi bi-heart-fill"></i> 
          <span class="text-favorite">Added to Favorite</span>
        `;
        $(button).css({ color: '#fd79a8' });
      };

      function cancel() {
        button.innerHTML = `
          <i class="icon-favorite bi bi-heart"></i> 
          <span class="text-favorite">Add to Favorite</span>
        `;
        $(button).css({ color: '' });
      };
    });
  }
}

customElements.define('container-restaurants', Restaurants);