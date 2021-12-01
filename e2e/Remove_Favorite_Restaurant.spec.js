/* eslint-disable no-undef */
Feature('Favorite Restaurants');
const restaurantContainer = '.restaurant';
const buttonIsFavorite = '[aria-label="Added to Favorite"]';
const buttonIsNotYetFavorite = '[aria-label="Add to Favorite"]';

Before(({ I }) => {
  I.amOnPage('/');

  I.seeElement(restaurantContainer);
  I.seeElement(buttonIsNotYetFavorite);
  I.click(buttonIsNotYetFavorite);

  I.seeElement(buttonIsFavorite);
});

Scenario('test remove favorite restaurant from list', ({ I }) => {
  I.amOnPage('/#favorite');

  I.seeElement(restaurantContainer);
  I.seeElement(buttonIsFavorite);
  I.click(buttonIsFavorite);

  I.amOnPage('/#favorite');
  I.see('No Favorite Restaurant', 'h2');
});
