import { Mame as $ } from '../lib/Mame';

class DrawerInitiator {
  static init(container, button) {
    this.#buttonDrawer(container, button);
    this.#forceCloseDrawer(container);
  }

  static #buttonDrawer(container, button) {
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

  static #changeIconLabelButtonDrawer({ button, label, icon }) {
    button.innerHTML = icon;
    button.setAttribute('aria-label', label);
  }

  static #openDrawer(container) {
    $(container)
      .removeClass(['hide-animation'])
      .addClass(['active', 'show-animation'])
      .animation().end(() => {
        $(container).addClass(['active']).removeClass(['show-animation']);
      });
  }

  static #closeDrawer(container) {
    $(container)
      .removeClass(['show-animation'])
      .addClass(['hide-animation'])
      .animation().end(() => {
        $(container).removeClass(['active', 'hide-animation']);
      });
  }

  static #forceCloseDrawer(container) {
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
