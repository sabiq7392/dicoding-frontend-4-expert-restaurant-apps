import { $ } from '../../lib/Mame.js';
import data from '../../../DATA.json';
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
                <h2>${name}</h2>
                <span aria-label="rating">
                  <i class="bi bi-star-fill"></i> 
                  ${rating} 
                </span>
                <address>${city}</address>
              </div>
            </header>
            <p>${description}</p>
          </section>
        </article>
      `;
    });

  }

  #getRestaurants() {

  }
}

customElements.define('container-restaurants', Restaurants);