/* eslint-disable no-undef */
import DicodingRestaurantSource from '../src/scripts/data/dicoding-restaurant-source';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import CreateTemplate from '../src/scripts/views/templates/template-creator';
import * as TestFactories from './helpers/TestFactories';

describe('adding favorite restaurant', () => {
  const addFavoriteRestaurant = () => {
    document.body.innerHTML = CreateTemplate.RestaurantItemDetail('rqdv5juczeskfw1e867');
  };

  beforeEach(() => {
    addFavoriteRestaurant();
  });

  it('should show the add to favorite button when the restaurant has not been favorite before', async () => {
    await TestFactories
      .createFavoriteButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="Add to Favorite"]')).toBeTruthy();
  });

  it('should not show the added to favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories
      .createFavoriteButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="added to favorite"]')).toBeFalsy();
  });

  it('should be able to add favorite the restaurant', async () => {
    await TestFactories
      .createFavoriteButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    document.querySelector('.add-favorite').dispatchEvent(new Event('click'));
    const restaurant = await DicodingRestaurantSource.detail('rqdv5juczeskfw1e867');

    expect(restaurant.id).toEqual('rqdv5juczeskfw1e867');

    FavoriteRestaurantIdb.destroy('rqdv5juczeskfw1e867');
  });

  xit('should not add a restaurant it has no id', async () => {
    await TestFactories
      .createFavoriteButtonPresenterWithRestaurant({ });

    document.querySelector('#likeBUtton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });
});
