/* eslint-disable no-undef */
Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#favorite');
});

Scenario('test something', ({ I }) => {
  const restaurantContainer = '.restaurant';
  const isFavorite = '[aria-label="Added to Favorite"]';
  const isNotYetFavorite = '[aria-label="Add to Favorite"]';

  I.see('No Favorite Restaurant', 'h2');

  I.amOnPage('/');
  I.seeElement(restaurantContainer);

  I.seeElement(isNotYetFavorite);
  I.click(isNotYetFavorite);

  I.seeElement(isFavorite);
  I.click(isFavorite);

  I.amOnPage('/#favorite');

  I.seeElement(restaurantContainer);
});