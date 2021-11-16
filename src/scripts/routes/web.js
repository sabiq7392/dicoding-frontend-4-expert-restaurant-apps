import Routes from './routes';
import Views from '../views/views';

class Web {
  static renderPage() {
    const isUrl = window.location.hash;
    if (isUrl === Routes.default) {
      Views.default();
    }

    if (isUrl.includes(Routes.detail)) {
      Views.detail(this.#getId());
    }

    if (isUrl.includes(Routes.favorite)) {
      Views.favorite();
    }
  }

  static #getId() {
    const url = window.location.hash;
    const urlSplit = url.split('/');
    return urlSplit[1];
  }
}

export default Web;
