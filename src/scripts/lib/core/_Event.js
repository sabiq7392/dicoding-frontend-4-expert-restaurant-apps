/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { EventShortcut } from './_EventShortcut.js';

export function Event({ element }) {
  const add = (event, listener, options) => {
    element.addEventListener(event, listener, options);
  };

  return {
    ...EventShortcut({ element }),

    onBlur(listener, options) {
      add('blur', listener, options);
      return this;
    },
    onChange(listener, options) {
      add('change', listener, options);
      return this;
    },
    onClick(listener, options) {
      add('click', listener, options);
      return this;
    },
    onFocus(listener, options) {
      add('focus', listener, options);
      return this;
    },
    onHashChange(listener, options) {
      add('hashchange', listener, options);
    },
    onKeyUp(listener, options) {
      add('keyup', listener, options);
      return this;
    },
    onMouseOver(listener, options) {
      add('mouseover', listener, options);
      return this;
    },
    onMouseOut(listener, options) {
      add('mouseout', listener, options);
      return this;
    },
    onResize(listener, options) {
      add('resize', listener, options);
      return this;
    },
    onScroll(listener, options) {
      add('scroll', listener, options);
      return this;
    },
    onSubmit(listener, options) {
      add('submit', listener, options);
      return this;
    },
  };
}
