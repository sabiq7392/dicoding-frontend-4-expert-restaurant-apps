import { Mame as $ } from '../lib/Mame';

class DrawerInitiator {
  constructor(container, button) {
    this.#buttonDrawer(container, button);
    this.#forceCloseDrawer(container);
  }

  #buttonDrawer(container, button) {
    $(button).onClick(() => {
      const isActive = $(container).containClass(['active']);
      if (!isActive) {
        this.#openDrawer(container);
        this.#changeIconLabelButtonDrawer({
          button,
          label: 'menu close',
          icon: '<i class="bi bi-x"></i>',
        });
      } else {
        this.#closeDrawer(container);
        this.#changeIconLabelButtonDrawer({
          button,
          label: 'menu open',
          icon: '<i class="bi bi-list"></i>',
        });
      }
    });
  }

  #changeIconLabelButtonDrawer({ button, label, icon }) {
    button.innerHTML = icon;
    button.setAttribute('aria-label', label);
  }

  #openDrawer(container) {
    $(container)
      .removeClass(['hide-animation'])
      .addClass(['active', 'show-animation'])
      .animation().end(() => {
        $(container).addClass(['active']).removeClass(['show-animation']);
      });
  }

  #closeDrawer(container) {
    $(container)
      .removeClass(['show-animation'])
      .addClass(['hide-animation'])
      .animation().end(() => {
        $(container).removeClass(['active', 'hide-animation']);
      });
  }

  #forceCloseDrawer(container) {
    $(window).onResize(() => {
      const phoneScreen = $(window).media('phone');
      const isActive = $(container).containClass(['active']);

      if (!phoneScreen.matches && isActive) {
        $(container).removeClass(['active', 'show-animation']);
      }
    });
  }
}

export default DrawerInitiator;
