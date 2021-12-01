/* eslint-disable no-undef */
Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#favorite');
});

Scenario('test add favorite restaurant in list', ({ I }) => {
  const restaurantContainer = '.restaurant';
  const buttonIsFavorite = '[aria-label="Added to Favorite"]';
  const buttonIsNotYetFavorite = '[aria-label="Add to Favorite"]';

  I.see('No Favorite Restaurant', 'h2');

  I.amOnPage('/');

  I.seeElement(restaurantContainer);
  I.seeElement(buttonIsNotYetFavorite);
  I.click(buttonIsNotYetFavorite);

  I.seeElement(buttonIsFavorite);

  I.amOnPage('/#favorite');

  I.seeElement(restaurantContainer);
});
