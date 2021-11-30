/* eslint-disable no-undef */
import DicodingRestaurantSource from '../src/scripts/data/dicoding-restaurant-source';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/TestFactories';

describe('remove a favorite restaurant', () => {
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
    await FavoriteRestaurantIdb
      .update(await DicodingRestaurantSource.detail(firstRestaurantId));
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.destroy(firstRestaurantId);
  });

  it('should show added to favorite button when the restaurant has been added before', async () => {
    await TestFactories
      .createFavoriteButtonPresenterWithRestaurant({ id: firstRestaurantId });

    expect(document.querySelector('[aria-label="Added to Favorite"]'))
      .toBeTruthy();
  });

  it('should not show add to favorite button when restaurant has been favorited', async () => {
    await TestFactories
      .createFavoriteButtonPresenterWithRestaurant({ id: firstRestaurantId });

    expect(document.querySelector('[aria-label="Add to Favorite"]'))
      .toBeFalsy();
  });

  it('should be able to remove favorited restaurant from list', async () => {
    await TestFactories
      .createFavoriteButtonPresenterWithRestaurant({ id: firstRestaurantId });

    document.querySelector('[aria-label="Added to Favorite"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });

  it('should not throw error if the not favorite restaurant is not in the list', async () => {
    await TestFactories
      .createFavoriteButtonPresenterWithRestaurant({ id: firstRestaurantId });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantIdb
      .destroy(firstRestaurantId);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="Added to Favorite"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAll())
      .toEqual([]);
  });
});
