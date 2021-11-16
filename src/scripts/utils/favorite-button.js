import { Mame as $ } from '../lib/Mame';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import CreateTemplate from '../templates/template-creator';

class FavoriteButton {
  static async init({ buttons, data }) {
    if (buttons.length > 1 || data.length >= 1) {
      await this.#getAllButton(buttons, data);
    }

    if (buttons.length === 1) {
      await this.#getButton(buttons[0], data);
    }
  }

  static async #getButton(button, data) {
    $(button).onClick(async () => {
      if (this.#isFavorited(button)) {
        await FavoriteRestaurantIdb.destroy(data.id);
        this.#renderFavorite(button);
      } else {
        await FavoriteRestaurantIdb.update(data);
        this.#renderFavorited(button);
      }
    });

    const restaurantExist = await FavoriteRestaurantIdb.get(data.id);
    if (restaurantExist) {
      this.#renderFavorited(button);
    }
  }

  static async #getAllButton(buttons, data) {
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

  static #isFavorited(button) {
    return button.textContent.includes('Added to Favorite');
  }

  static #renderFavorite(button) {
    button.setAttribute('aria-label', 'Add to Favorite');
    button.innerHTML = CreateTemplate.buttonFavorite();
  }

  static #renderFavorited(button) {
    button.setAttribute('aria-label', 'Added to Favorite');
    button.innerHTML = CreateTemplate.buttonFavorited();
  }
}

export default FavoriteButton;
