import logo from '../../../public/images/logo/ristorante-logo.svg';
import { $ } from '../../lib/Mame.js';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #render() {
    this.innerHTML = `
      <nav>
        <a class="navbar-brand" href="index.html">
          <img src="${logo}" alt="mame food">
        </a>
        <button id="menuButton" aria-label="menu"  type="button">
          <i class="bi bi-list"></i>
        </button>
        <ul>
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

    this.#button();
  }

  #button() {
    const button = $('#menuButton');

    $(button).onClick(() => {
      
    });
  }

}

customElements.define('app-bar', AppBar);