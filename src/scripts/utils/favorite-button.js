import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { Mame as $ } from '../lib/Mame';
import {
  createButtonFavoriteTemplate,
  createButtonFavoritedTemplate,
} from '../templates/template-creator';

class FavoriteButton {
  // static init(buttons) {
  //   this.buttons = buttons;
  //   this.#renderButton();
  // }

  // static renderDefaultOrUpdate(index) {
  //   if (!HandleDataLocalStorage.get('restaurant')) {
  //     return createButtonLikeFavoriteTemplate();
  //   }
  //   return STORAGE[index];
  // }
  // static async init({ buttons, restaurant }) {
  static async init({ page, buttons, data }) {
    if (page === 'default') {
      buttons.forEach(async (button, index) => {
        $(button).onClick(async () => {
          if (this.#isFavorited(button)) {
            await FavoriteRestaurantIdb.destroy(data[index].id);
            this.#renderFavorite(button);
          } else {
            await FavoriteRestaurantIdb.update(data[index]);
            this.#renderFavorited(button);
          }
        });
        const restaurantExist = await FavoriteRestaurantIdb.get(data[index].id);
        if (restaurantExist) {
          this.#renderFavorited(button);
        }
      });
    }

    if (page === 'detail') {
      $(buttons).onClick(async () => {
        if (this.#isFavorited(buttons)) {
          await FavoriteRestaurantIdb.destroy(data.id);
          this.#renderFavorite(buttons);
        } else {
          await FavoriteRestaurantIdb.update(data);
          this.#renderFavorited(buttons);
        }
      });

      const restaurantExist = await FavoriteRestaurantIdb.get(data.id);
      if (restaurantExist) {
        this.#renderFavorited(document.querySelector('.add-favorite'));
      }
    }
  }

  static #isFavorited(button) {
    return button.textContent.includes('Added to Favorite');
  }

  static #renderFavorite(button) {
    button.setAttribute('aria-label', 'Add to Favorite');
    button.innerHTML = createButtonFavoriteTemplate();
  }

  static #renderFavorited(button) {
    button.setAttribute('aria-label', 'Added to Favorite');
    button.innerHTML = createButtonFavoritedTemplate();
  }
}

export default FavoriteButton;
