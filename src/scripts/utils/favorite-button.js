import { Mame as $ } from '../lib/Mame';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import CreateTemplate from '../views/templates/template-creator';

class FavoriteButton {
  static async init({ buttons, data }) {
    if (buttons.length > 1 || data.length >= 1) {
      await this._getAllButton(buttons, data);
    }

    if (buttons.length === 1) {
      await this._getButton(buttons[0], data);
    }
  }

  static async _getButton(button, data) {
    $(button).onClick(async () => {
      if (this._isFavorite(button)) {
        await FavoriteRestaurantIdb.destroy(data.id);
        this._renderNotFavorite(button);
      } else {
        await FavoriteRestaurantIdb.update(data);
        this._renderFavorite(button);
      }
    });

    const restaurantExist = await FavoriteRestaurantIdb.get(data.id);
    if (restaurantExist) {
      this._renderFavorite(button);
    }
  }

  static async _getAllButton(buttons, data) {
    buttons.forEach(async (button, index) => {
      $(button).onClick(async () => {
        if (this._isFavorite(button)) {
          await FavoriteRestaurantIdb.destroy(data[index].id);
          this._renderNotFavorite(button);
        } else {
          await FavoriteRestaurantIdb.update(data[index]);
          this._renderFavorite(button);
        }
      });

      const restaurantExist = await FavoriteRestaurantIdb.get(data[index].id);
      if (restaurantExist) {
        this._renderFavorite(button);
      }
    });
  }

  static _isFavorite(button) {
    return button.textContent.includes('Added to Favorite');
  }

  static _renderNotFavorite(button) {
    button.setAttribute('aria-label', 'Add to favorite');
    button.innerHTML = CreateTemplate.buttonNotFavorite();
  }

  static _renderFavorite(button) {
    button.setAttribute('aria-label', 'Added to Favorite');
    button.innerHTML = CreateTemplate.buttonFavorite();
  }
}

export default FavoriteButton;
