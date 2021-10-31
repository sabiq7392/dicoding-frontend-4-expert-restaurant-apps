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
        <article id="${id}">
          <img src="${pictureId}" alt="${name}">
          <section>
            <header>
              <div>
                <h2 tabindex="0">${name}</h2>
                <div class="d-flex">
                  <span aria-label="rating" tabindex="0">
                    <i class="bi bi-star-fill"></i> 
                    ${rating} 
                  </span>
                  <button class="add-favorite" aria-label="add to favorite" type="button">
                    <i class="bi bi-heart"></i> 
                    Add to Favorite
                  </button>
                </div>
                <address tabindex="0">${city}</address>
              </div>
            </header>
            <p tabindex="0">${description}</p>
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
          <i class="bi bi-heart-fill"></i> 
          Added to Favorite
        `;
        $(button).css({ color: '#fd79a8' });
      };

      function cancel() {
        button.innerHTML = `
          <i class="bi bi-heart"></i> 
          Add to Favorite
        `;
        $(button).css({ color: '' });
      };
    })
  }
}

customElements.define('container-restaurants', Restaurants);