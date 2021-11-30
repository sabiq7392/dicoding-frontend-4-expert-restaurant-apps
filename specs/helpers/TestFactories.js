/* eslint-disable import/prefer-default-export */
import { Mame as $ } from '../../src/scripts/lib/Mame';
import DicodingRestaurantSource from '../../src/scripts/data/dicoding-restaurant-source';
import FavoriteButton from '../../src/scripts/utils/favorite-button';
import CreateTemplate from '../../src/scripts/views/templates/template-creator';

const createFavoriteButtonPresenterWithRestaurant = async ({ id }) => {
  const restaurant = await DicodingRestaurantSource.detail(id);
  const containerRestaurants = $('#containerFavoriteRestaurants');

  containerRestaurants.innerHTML = CreateTemplate.RestaurantItemDetail(restaurant);

  await FavoriteButton.init({
    buttons: $('.add-favorite'),
    data: restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
