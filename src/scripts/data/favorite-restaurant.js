import HandleDataLocalStorage from '../utils/handle-local-storage.js';
import STORAGE from '../storage/local-storage';

class DataFavoriteRestaurant {
  static update(favoriteButtons) {
    HandleDataLocalStorage.removeOld({
      storage: STORAGE,
      lengthStoredData: STORAGE.length,
    });
    this.#store(favoriteButtons);
  }

  static #store(buttons) {
    buttons.forEach((button) => {
      const dataRestaurant = button.innerHTML;
      HandleDataLocalStorage.store({
        item: 'restaurant',
        data: dataRestaurant,
        to: STORAGE,
      });
    });
  }
}

export default DataFavoriteRestaurant;
