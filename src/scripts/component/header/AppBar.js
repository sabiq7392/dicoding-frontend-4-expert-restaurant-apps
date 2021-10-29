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

    const menu = new Menu().run();

    // const menuButton = $('#menuButton');
    // const menuContainer = $('#menuContainer');
    // const isActive = $(menuContainer).containClass(['active']);

    // $(menuButton).onClick(() => {
    //   if (isActive) {
    //     menu.hide();
    //     console.log('not')
    //   } else if(!isActive) {
    //     menu.show();
    //     console.log('hai')
    //   }
    // });
    
    // menu.run();
    // this.#menu();  
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
        });
      } else {
        $(appBar).css({
          backgroundColor: ''
        });
      }
    });
  }
}

customElements.define('app-bar', AppBar);