import { $ } from '../../lib/Mame.js';
'use strict';

class Menu {
  constructor() {
    this.button = $('#menuButton');
    this.container = $('#menuContainer');
  }

  run() {
    this.#button();
    $(window).onResize(() => this.#forceHide());
  }

  #button() {
    $(this.button).onClick(() => {
      const isActive = $(this.container).containClass(['active']);
      if (!isActive) {
        this.#show();
        changeIcon({ 
          icon: '<i class="bi bi-x"></i>',
          label: 'menu close'
        });
      } else {
        this.#hide();
        changeIcon({
          icon: '<i class="bi bi-list"></i>',
          label: 'menu open'
        });
      }
    });

    function changeIcon({ icon, label }) {
      const button = $('#menuButton');
      button.innerHTML = icon;
      button.setAttribute('aria-label', label)
    }
  }

  #show() {
    $(this.container)
      .removeClass(['hide-animation'])
      .addClass(['active', 'show-animation'])
      .animation().end(function() {
        $(this).addClass(['active']).removeClass(['show-animation']);
      });
  }

  #hide() {
    $(this.container)
      .removeClass(['show-animation'])
      .addClass(['hide-animation'])
      .animation().end(function() {
        $(this).removeClass(['active', 'hide-animation']);
      });
  }

  #forceHide() {
    const phoneScreen = $(window).media('phone');
    const isActive = $(this.container).containClass(['active']);

    if (!phoneScreen.matches && isActive) {
      $(this.container).removeClass(['active', 'show-animation']);
    }
  }
}

export default Menu;