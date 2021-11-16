import Default from './default';
import Detail from './detail';
import Favorite from './favorite';
import { Mame as $ } from '../lib/Mame';

const Views = {
  async default() {
    const mainContent = $('#main');

    mainContent.innerHTML = await Default.render();
    await Default.afterRender();
  },

  async detail(id) {
    const mainContent = $('#main');

    mainContent.innerHTML = await Detail.render();
    await Detail.afterRender(id);
  },

  async favorite() {
    const mainContent = $('#main');

    mainContent.innerHTML = await Favorite.render();
    await Favorite.afterRender();
  },
};

export default Views;
