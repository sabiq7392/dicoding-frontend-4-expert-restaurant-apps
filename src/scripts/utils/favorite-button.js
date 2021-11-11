import { Mame as $ } from '../lib/Mame';
import STORAGE from '../storage/local-storage';
import HandleDataLocalStorage from '../data/handle-data-local-storage.js';
import DataFavoriteRestaurant from '../data/data-favorite-restaurant';
import {
  createButtonLikedFavoriteTemplate,
  createButtonLikeFavoriteTemplate,
} from '../templates/template-creator';

const FavoriteButton = {
  init() {
    this.buttons = $('.add-favorite');
    this._renderButton();
  },

  _renderButton() {
    this.buttons.forEach((button) => {
      $(button).onClick(() => {
        if (this._isFavorite(button)) {
          this._renderFavorite(button);
        } else {
          this._renderFavorited(button);
        }
        DataFavoriteRestaurant.update(this.buttons);
      });
    });
  },

  renderDefaultOrUpdate(index) {
    if (!HandleDataLocalStorage.get('restaurant')) {
      return createButtonLikeFavoriteTemplate();
    }
    return STORAGE[index];
  },

  _isFavorite(button) {
    return button.textContent.includes('Added to Favorite');
  },

  _renderFavorite(button) {
    button.setAttribute('aria-label', 'Add to Favorite');
    button.innerHTML = createButtonLikeFavoriteTemplate();
  },

  _renderFavorited(button) {
    button.setAttribute('aria-label', 'Added to Favorite');
    button.innerHTML = createButtonLikedFavoriteTemplate();
  },
};

export default FavoriteButton;
