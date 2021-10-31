import { HandleData } from './HandleData';
import { $ } from '../../scripts/lib/Mame.js';

export let STORAGE = [];


// const restaurants = {
//   is:  $('.restaurant'),
//   name: $('.restaurant-name'),
//   description: $('.restaurant-description'),
//   picture: $('.restaurant-picture'),
//   city: $('.restaurant-city'),
//   rating: $('.restaurant-rating'),
//   favorite: {
//     icon: $('.icon-favorite'),
//     text: $('.text-favorite')
//   }
// };

// const { is, name, description, picture, city, rating, favorite } = restaurants;

// for (let i = 0; i < is.length; i++) {
//   const dataRestaurant = {
//     id: is[i].id,
//     name: name[i].textContent,
//     description: description[i].textContent,
//     pictureId: picture[i].getAttribute('src'),
//     city: city[i].textContent,
//     rating: rating[i].textContent,
//     favorite: {
//       icon: favorite.icon[i].className,
//       text: favorite.text[i].textContent,
//     },
//   };

//   HandleData.storeDataToStorage(dataRestaurant);
// }

// console.log(STORAGE)