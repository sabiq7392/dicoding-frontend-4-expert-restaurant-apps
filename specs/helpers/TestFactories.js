/* eslint-disable import/prefer-default-export */
import DicodingRestaurantSource from '../../src/scripts/data/dicoding-restaurant-source';
import FavoriteButton from '../../src/scripts/utils/favorite-button';

const createFavoriteButtonPresenterWithRestaurant = async ({ id }) => {
  const restaurant = DicodingRestaurantSource.detail(id);
  await FavoriteButton.init({
    buttons: document.querySelector('.add-favorite'),
    data: restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
