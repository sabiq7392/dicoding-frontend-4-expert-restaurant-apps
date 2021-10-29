import { $ } from '../../lib/Mame.js';
'use strict';

class Menu {
  constructor() {
    this.button = $('#menuButton');
    this.container = $('#menuContainer');
  }

  // run() {
  //   const isActive = $(this.container).containClass(['active']);
    
  //   $(this.button).onClick(() => {
  //     if (isActive) {
  //       this.#hide();
  //       console.log('not')
  //     } else if(!isActive) {
  //       this.#show()
  //       console.log('hai')
  //     }
  //   })


  //   this.#forceHide();
  // }

  run() {
    $(this.button).onClick(() => {
      const isActive = $(this.container).containClass(['active']);
      if (!isActive) {
        this.#show();
        console.log('yes')
      } else {
        this.#hide();
        console.log('hai')
      }
    });
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

  forceHide() {

  }
}

export default Menu;