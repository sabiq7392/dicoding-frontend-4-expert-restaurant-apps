import logo from '../../../public/images/logo/ristorante-logo.svg';
import { $ } from '../../lib/Mame.js';
import Menu from '../header/Menu.js';
'use strict';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #render() {
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
            <a href="#">Favorite</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sabiq-muhammad-6b314a210/">
              About Us
            </a>
          </li>
        </ul>
      </nav>
    `;

    const menu = new Menu();
    menu.run();

    this.#changeColor();

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
}

customElements.define('app-bar', AppBar);