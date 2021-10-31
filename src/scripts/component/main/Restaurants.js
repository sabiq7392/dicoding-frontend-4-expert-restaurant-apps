import data from '../../../DATA.json';
import { $ } from '../../lib/Mame.js';
import { STORAGE } from '../../storage/STORAGE';
import { HandleData } from '../../storage/HandleData.js';
'use strict';

class Restaurants extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #render() {
    data.restaurants.forEach((restaurant) => {
      const { id, name, description, pictureId, city, rating } = restaurant;
      this.innerHTML += this.#template(id, name, description, pictureId, city, rating);
      this.#button();
    });

    this.#storeData();

    // STORAGE.forEach((storage) => {
    //   this.innerHTML += this.#template(
    //     storage.id,
    //     storage.name, 
    //     storage.description, 
    //     storage.pictureId,
    //     storage.city,
    //     storage.rating,
    //     storage.favorite
    //   );
    // });
  }

  #template(id, name, description, pictureId, city, rating, favorite) {
    return `
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

  #storeData() {
    const restaurants = {
      is:  $('.restaurant'),
      name: $('.restaurant-name'),
      description: $('.restaurant-description'),
      picture: $('.restaurant-picture'),
      city: $('.restaurant-city'),
      rating: $('.restaurant-rating'),
      favorite: {
        icon: $('.icon-favorite'),
        text: $('.text-favorite')
      }
    };

    const { is, name, description, picture, city, rating, favorite } = restaurants;

    for (let i = 0; i < is.length; i++) {
      const dataRestaurant = {
        id: is[i].id,
        name: name[i].textContent,
        description: description[i].textContent,
        pictureId: picture[i].getAttribute('src'),
        city: city[i].textContent,
        rating: rating[i].textContent,
        favorite: {
          icon: favorite.icon[i].className,
          text: favorite.text[i].textContent,
        },
      };

      HandleData.storeDataToStorage(dataRestaurant);
    }
  }
}

customElements.define('container-restaurants', Restaurants);