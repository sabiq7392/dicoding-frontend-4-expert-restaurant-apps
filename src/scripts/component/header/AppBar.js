import logo from '../../../public/images/logo/ristorante-logo.svg';
import { $ } from '../../lib/Mame.js';
'use strict';

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
        <button id="menuButton" aria-label="menu" type="button">
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

    this.#menu();
    this.#changeColor();
  }

  #menu() {
    const button = $('#menuButton');
    const container = $('#menuContainer');

    const showHide = () => {
      const isActive = $(container).containClass(['active']);
      if (!isActive) {
        $(container)
          .removeClass(['hide-animation'])
          .addClass(['active', 'show-animation'])
          .animation().end(function() {
            $(this).addClass(['active']).removeClass(['show-animation']);
          });

      } else {
        $(container)
          .removeClass(['show-animation'])
          .addClass(['hide-animation'])
          .animation().end(function() {
            $(this).removeClass(['active', 'hide-animation']);
          });
      }
    };
    
    $(button).onClick(function() {
      showHide();
      $(this).css({ 
        transform: 'rotate(180deg)'
      })
    });

    const hideWhenNotPhoneScreen = () => {
      const phoneScreen = $(window).media('phone');
      const isActive = $(container).containClass(['active']);

      if (!phoneScreen.matches && isActive) {
        $(container).removeClass(['active', 'show-animation']);
      }
    };

    $(window).onResize(hideWhenNotPhoneScreen);
  }

  #changeColor() {
    $(window).onScroll(() => {
      const appBar = $('#appBar');
      const height = appBar.offsetHeight;

      if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        $(appBar).css({
          backgroundColor: '#222'
        })
      } else {
        $(appBar).css({
          backgroundColor: 'rgba($theme-color-dark, 0.5)'
        })
      }

      if (document.body.scrollTop) {
        $(appBar).css({
          backgroundColor: '#222'
        })
      }
    })
  }
}

customElements.define('app-bar', AppBar);