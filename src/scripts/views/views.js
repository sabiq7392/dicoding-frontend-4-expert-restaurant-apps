import Default from './default';
import Detail from './detail';
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
};

export default Views;
