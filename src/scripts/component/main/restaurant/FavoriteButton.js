import { STORAGE } from "../../../storage/storage.js";
import { HandleData } from "../../../storage/HandleData.js";
import { $ } from "../../../lib/Mame.js";
'use strict';

export class FavoriteButton {
  constructor() {
    this.buttons = $('.add-favorite');
  }

  run() {
    this.#addFavorite();
  }

  static iconText(index) {
    if (!HandleData.get('restaurant')) {
      return `
        <i class="icon-favorite bi bi-heart"></i> 
        <span class="text-favorite">Add to Favorite</span>
      `;
    } else {
      return STORAGE[index];
    }
  }

  #addFavorite() {
    this.buttons.forEach((button) => {
      $(button).onClick(() => {
        if (isFavorite(button)) {
          cancel(button);
        } else {
          add(button);
        }
        this.#handleData().update();
      });
    });

    function isFavorite(button) {
      return button.textContent.includes('Added to Favorite');
    }

    function add(button) {
      button.innerHTML = `
        <i class="icon-favorite bi bi-heart-fill"></i> 
        <span class="text-favorite">Added to Favorite</span>
      `;
    }

    function cancel(button) {
      button.innerHTML = `
        <i class="icon-favorite bi bi-heart"></i> 
        <span class="text-favorite">Add to Favorite</span>
      `;
    }
  }

  #handleData() {
    const buttons = this.buttons;
    return {
      store() {
        buttons.forEach((button) => {
          const dataRestaurant = button.innerHTML;
          HandleData.store({ 
            item: 'restaurant' ,
            data: dataRestaurant, 
            to: STORAGE, 
          });
        });
      },

      update() {
        HandleData.removeOld(STORAGE);
        this.store();
      }
    }
  }
}