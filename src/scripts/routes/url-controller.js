import { Mame as $ } from '../lib/Mame';
import Routes from './routes';
import Views from '../views/views';

const UrlController = {
  getId() {
    const url = window.location.hash;
    const urlSplit = url.split('/');
    return urlSplit[1];
  },

  url() {
    this.mainContent = $('#main');
    const isRunning = () => {
      const isUrl = window.location.hash;
      if (isUrl === Routes.default) {
        this.default();
      }

      if (isUrl.includes(Routes.detail)) {
        this.detail(this.getId());
      }
    };

    isRunning();
    $(window).onHashChange(isRunning);
  },

  async default() {
    this.mainContent.innerHTML = await Views.default.render();
    await Views.default.afterRender();
  },

  async detail(id) {
    this.mainContent.innerHTML = await Views.detail.render();
    await Views.detail.afterRender(id);
  },
};

UrlController.url();
