/* eslint-disable no-undef */
import DicodingRestaurantSource from '../src/scripts/data/dicoding-restaurant-source';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/TestFactories';

describe('add a favorite restaurant', () => {
  const firstRestaurantId = 'rqdv5juczeskfw1e867';
  const addContainerFavoriteRestaurant = async () => {
    document.body.innerHTML = `
      <div id="mainContents">
        <div id="containerFavoriteRestaurants">

        </div>
      </div>
    `;
  };

  beforeEach(async () => {
    await addContainerFavoriteRestaurant();
  });

  it('should add favorite button when the restaurant has not been favorite before', async () => {
    await TestFactories
      .createFavoriteButtonPresenterWithRestaurant({ id: firstRestaurantId });

    expect(document.querySelector('[aria-label="Add to Favorite"]'))
      .toBeTruthy();
  });

  it('should not show added to favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories
      .createFavoriteButtonPresenterWithRestaurant({ id: firstRestaurantId });

    expect(document.querySelector('[aria-label="Added to Favorite"]'))
      .toBeFalsy();
  });

  it('should be able to add favorite the restaurant', async () => {
    await TestFactories
      .createFavoriteButtonPresenterWithRestaurant({ id: firstRestaurantId });

    document.querySelector('.add-favorite')
      .dispatchEvent(new Event('click'));

    const restaurant = await DicodingRestaurantSource.detail(firstRestaurantId);

    expect(restaurant.id)
      .toEqual(firstRestaurantId);

    await FavoriteRestaurantIdb
      .destroy(restaurant.id);
  });
});
