import 'regenerator-runtime'; /* for async await transpile */
import Web from './routes/web';
import swRegister from './utils/sw-register';
import './components/header/app-bar';
import './components/main/hero';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import './components/footer/author';
import '../styles/sass/index.scss';

window.addEventListener('hashchange', () => {
  Web.renderPage();
});

window.addEventListener('load', () => {
  Web.renderPage();
  swRegister();
});
