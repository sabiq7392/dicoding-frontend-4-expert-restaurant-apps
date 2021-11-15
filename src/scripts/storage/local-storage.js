/* eslint-disable import/no-mutable-exports */
import HandleDataLocalStorage from '../utils/handle-local-storage.js.js';

let STORAGE = [];

const keepDataExistEvenRefresh = () => {
  if (HandleDataLocalStorage.get('restaurant') !== null) {
    STORAGE = HandleDataLocalStorage.get('restaurant');
  }
};

keepDataExistEvenRefresh();

export default STORAGE;
