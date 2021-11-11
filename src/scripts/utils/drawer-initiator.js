import { Mame as $ } from '../lib/Mame';

const DrawerInitiator = {
  init(container, button) {
    this._buttonDrawer(container, button);
    this._forceCloseDrawer(container);
  },

  _buttonDrawer(container, button) {
    $(button).onClick(() => {
      const isActive = $(container).containClass(['active']);
      if (!isActive) {
        this._openDrawer(container);
        this._changeIconLabelButtonDrawer({
          button,
          label: 'menu close',
          icon: '<i class="bi bi-x"></i>',
        });
      } else {
        this._closeDrawer(container);
        this._changeIconLabelButtonDrawer({
          button,
          label: 'menu open',
          icon: '<i class="bi bi-list"></i>',
        });
      }
    });
  },

  _changeIconLabelButtonDrawer({ button, label, icon }) {
    button.innerHTML = icon;
    button.setAttribute('aria-label', label);
  },

  _openDrawer(container) {
    $(container)
      .removeClass(['hide-animation'])
      .addClass(['active', 'show-animation'])
      .animation().end(() => {
        $(container).addClass(['active']).removeClass(['show-animation']);
      });
  },

  _closeDrawer(container) {
    $(container)
      .removeClass(['show-animation'])
      .addClass(['hide-animation'])
      .animation().end(() => {
        $(container).removeClass(['active', 'hide-animation']);
      });
  },

  _forceCloseDrawer(container) {
    $(window).onResize(() => {
      const phoneScreen = $(window).media('phone');
      const isActive = $(container).containClass(['active']);

      if (!phoneScreen.matches && isActive) {
        $(container).removeClass(['active', 'show-animation']);
      }
    });
  },
};

export default DrawerInitiator;
