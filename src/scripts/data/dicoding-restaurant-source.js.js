import API_ENDPOINT from '../globals/api-endpoint';

class DicodingRestaurantSource {
  static async getAll() {
    const response = await fetch(API_ENDPOINT.ALL);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default DicodingRestaurantSource;
