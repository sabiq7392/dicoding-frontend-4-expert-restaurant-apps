import 'regenerator-runtime'; /* for async await transpile */
import Web from './routes/web';
import swRegister from './utils/sw-register';

import('./components/header/app-bar');
import('./components/main/hero');
import('./components/footer/author');
import('../styles/sass/index.scss');
import('bootstrap-icons/font/bootstrap-icons.scss');
import('./routes/web');

window.addEventListener('hashchange', () => {
  Web.renderPage();
});

window.addEventListener('load', () => {
  Web.renderPage();
  swRegister();
});
