import { Mame as $ } from '../../lib/Mame';
import logo from '../../../public/images/logo/ristorante-logo.svg';
import DrawerInitiator from '../../utils/drawer-initiator';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #render() {
    this.#template();
    this.#changeColor();
    DrawerInitiator.init($('#menuContainer'), $('#menuButton'));
  }

  #template() {
    this.innerHTML = `
      <nav>
        <a class="navbar-brand" href="index.html">
          <img src="${logo}" alt="Ristorante">
        </a>
        <button id="menuButton" aria-label="menu open" type="button">
          <i class="bi bi-list"></i>
        </button>
        <ul id="menuContainer">
          <li>
            <a href="index.html" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="#favorite">Favorite</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sabiq-muhammad-6b314a210/">
              About Us
            </a>
          </li>
        </ul>
      </nav>
    `;
  }

  #changeColor() {
    $(window).onScroll(() => {
      const appBar = $('#appBar');
      const height = appBar.offsetHeight;

      if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        $(appBar).css({
          backgroundColor: '#222',
        });
      } else {
        $(appBar).css({
          backgroundColor: '',
        });
      }
    });
  }

  // #drawerInitiator(container, button) {
  //   const drawerInitiator = new DrawerInitiator(container, button);
  //   return drawerInitiator;
  // }
}

customElements.define('app-bar', AppBar);
