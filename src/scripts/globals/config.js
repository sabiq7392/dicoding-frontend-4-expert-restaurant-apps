const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  IMG_URL: {
    SMALL: 'https://restaurant-api.dicoding.dev/images/small',
    MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium',
    LARGE: 'https://restaurant-api.dicoding.dev/images/large',
  },
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurants-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
