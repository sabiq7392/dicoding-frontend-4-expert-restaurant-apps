import { Mame as $ } from '../lib/Mame';
import STORAGE from '../storage/local-storage';
import HandleDataLocalStorage from '../data/handle-data-local-storage.js';
import DataFavoriteRestaurant from '../data/data-favorite-restaurant';
import {
  createButtonLikedFavoriteTemplate,
  createButtonLikeFavoriteTemplate,
} from '../templates/template-creator';

class FavoriteButton {
  constructor(buttons) {
    this.buttons = buttons;
    this.#renderButton();
  }

  static renderDefaultOrUpdate(index) {
    if (!HandleDataLocalStorage.get('restaurant')) {
      return createButtonLikeFavoriteTemplate();
    }
    return STORAGE[index];
  }

  #renderButton() {
    this.buttons.forEach((button) => {
      $(button).onClick(() => {
        if (this.#isFavorite(button)) {
          this.#renderFavorite(button);
        } else {
          this.#renderFavorited(button);
        }
        DataFavoriteRestaurant.update(this.buttons);
      });
    });
  }

  #isFavorite(button) {
    return button.textContent.includes('Added to Favorite');
  }

  #renderFavorite(button) {
    button.setAttribute('aria-label', 'Add to Favorite');
    button.innerHTML = createButtonLikeFavoriteTemplate();
  }

  #renderFavorited(button) {
    button.setAttribute('aria-label', 'Added to Favorite');
    button.innerHTML = createButtonLikedFavoriteTemplate();
  }
}

export default FavoriteButton;
