/* eslint-disable no-undef */
Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('test something', ({ I }) => {
  const restaurantContainer = '.restaurant';
  const isFavorite = '[aria-label="Added to Favorite"]';
  const isNotYetFavorite = '[aria-label="Add to Favorite"]';

  I.seeElement(restaurantContainer);

  I.seeElement(isNotYetFavorite);
  I.click(isNotYetFavorite);

  I.seeElement(isFavorite);
  I.click(isFavorite);

  I.seeElement(isNotYetFavorite);
});
