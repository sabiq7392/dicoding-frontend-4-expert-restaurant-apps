import HandleDataLocalStorage from './handle-data-local-storage.js';
import STORAGE from '../storage/local-storage';

const DataFavoriteRestaurant = {
  update(favoriteButtons) {
    HandleDataLocalStorage.removeOld({
      storage: STORAGE,
      lengthStoredData: STORAGE.length,
    });
    this._store(favoriteButtons);
  },

  _store(buttons) {
    buttons.forEach((button) => {
      const dataRestaurant = button.innerHTML;
      HandleDataLocalStorage.store({
        item: 'restaurant',
        data: dataRestaurant,
        to: STORAGE,
      });
    });
  },
};

export default DataFavoriteRestaurant;
