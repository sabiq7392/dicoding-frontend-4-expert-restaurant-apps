/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
export function Media({ element }) {
  return {
    media(screen) {
      switch (screen) {
        case 'phone': {
          screen = 'max-width: 767px';
          break;
        }
        case 'tablet': {
          screen = 'max-width: 1023px';
          break;
        }
        case 'desktop': {
          screen = 'min-width: 1023px';
          break;
        }
      }

      return element.matchMedia(`(${screen})`);
    },
  };
}
