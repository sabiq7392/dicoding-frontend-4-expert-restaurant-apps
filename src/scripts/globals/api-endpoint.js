import CONFIG from './config';

const API_ENDPOINT = {
  ALL: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH: `${CONFIG.BASE_URL}/search?q=query`,
};

export default API_ENDPOINT;
