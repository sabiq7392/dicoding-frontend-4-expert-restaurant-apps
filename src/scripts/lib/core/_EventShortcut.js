/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
export function EventShortcut({ element }) {
  const add = (event, listener, options) => {
    element.addEventListener(event, listener, options);
  };

  return {
    hover() {
      return {
        on(listener, options) {
          add('mouseover', listener, options);
          return this;
        },
        off(listener, options) {
          add('mouseout', listener, options);
          return this;
        },
      };
    },
    focus() {
      return {
        on(listener, options) {
          add('focus', listener, options);
          return this;
        },
        off(listener, options) {
          add('blur', listener, options);
          return this;
        },
      };
    },
    animation() {
      return {
        start(listener, options) {
          add('animationstart', listener, options);
          return this;
        },
        end(listener, options) {
          add('animationend', listener, options);
          return this;
        },
      };
    },
  };
}
