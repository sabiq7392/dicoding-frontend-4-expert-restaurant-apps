import CONFIG from '../../globals/config';

class CreateTemplate {
  static RestaurantItems(restaurant) {
    return `
      <article id="${restaurant.id}" class="restaurant" tabindex="0">
        <div class="skeleton-img">
          <img 
            src="${CONFIG.IMG_URL.SMALL}/${restaurant.pictureId}" 
            alt="${restaurant.name}" 
            class="restaurant-picture">
          </img>
        </div>
        <div class="wrapper">
          <header>
            <div class="skeleton-title">
              <h2 class="restaurant-name" tabindex="0">${restaurant.name}</h2>
            </div>
            <div class="d-flex gap-md align-items-center">
              <span aria-label="rating" tabindex="0">
                <i class="bi bi-star-fill"></i> 
                <span class="restaurant-rating">${restaurant.rating}</span>
              </span>
              <button 
                class="add-favorite" 
                aria-label="Add to Favorite" 
                type="button">
                <i class="icon-favorite bi bi-heart"></i> 
                <span class="text-favorite">Add to Favorite</span>
              </button>
              <a class="detail" href="#detail/${restaurant.id}">
                <i class="bi bi-eye-fill"></i>
                Detail
              </a>
            </div>
            <p 
              class="restaurant-city" 
              tabindex="0" 
              title="city ${restaurant.city}">
              ${restaurant.city}
            </p>
          </header>
          <p class="restaurant-description">${restaurant.description}</p>
        </div>
      </article>
    `;
  }

  static RestaurantItemDetail(restaurant) {
    return `
      <article id="${restaurant.id}" class="restaurant" tabindex="0">
        <img 
          src="${CONFIG.IMG_URL.SMALL}/${restaurant.pictureId}" 
          alt="${restaurant.name}" 
          class="restaurant-picture">
        <div class="wrapper">
          <header>
            <h2 class="restaurant-name" tabindex="0">${restaurant.name}</h2>
            <div class="d-flex gap-md align-items-center">
              <span aria-label="rating" tabindex="0">
                <i class="bi bi-star-fill"></i> 
                <span class="restaurant-rating">${restaurant.rating}</span>
              </span>
              <button
                class="add-favorite" 
                aria-label="Add to Favorite" 
                type="button">
                <i class="icon-favorite bi bi-heart"></i> 
                <span class="text-favorite">Add to Favorite</span>
              </button>
            </div>
            <p 
              class="restaurant-city" 
              tabindex="0" 
              title="city ${restaurant.city}">
              ${restaurant.city}
            </p>
            <address 
              class="restaurant-address" 
              tabindex="0" 
              title="address ${restaurant.address}">
              ${restaurant.address}
            </address>
          </header>
          <div class="d-flex gap-md">
            <section class="container-menu-foods">
              <h3 tabindex="0">Menu Makanan</h3>
              <ol id="restaurantMenuFoods">

              </ol>
            </section>
            <section class="container-menu-drinks">
              <h3 tabindex="0">Menu Minuman</h3>
              <ol id="restaurantMenuDrinks">

              </ol>
            </section>         
          </div>
          <section class="container-description">
            <h3 tabindex="0">Description</h3>
            <p tabindex="0" class="restaurant-description">
              ${restaurant.description}
            </p>
          </section>
          <section class="container-customer-reviews">
            <h3 tabindex="0">Reviews</h3>
            <details>
              <ol id="restaurantCustomerReviews">

              </ol>
            </details>
          </section>
        </div>
      </article>
    `;
  }

  static buttonNotFavorite() {
    return `
      <i class="icon-favorite bi bi-heart"></i> 
      <span class="text-favorite">Add to Favorite</span>
    `;
  }

  static buttonFavorite() {
    return `
      <i class="icon-favorite bi bi-heart-fill"></i> 
      <span class="text-favorite">Added to Favorite</span>
    `;
  }
}

export default CreateTemplate;
