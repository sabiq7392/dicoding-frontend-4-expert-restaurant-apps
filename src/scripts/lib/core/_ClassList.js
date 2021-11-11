/* eslint-disable import/prefer-default-export */
export function ClassList({ element }) {
  return {
    addClass(classlist) {
      element.classList.add(...classlist);
      return this;
    },
    removeClass(classlist) {
      element.classList.remove(...classlist);
      return this;
    },
    toggleClass(classlist) {
      element.classList.toggle(...classlist);
      return this;
    },
    containClass(classlist) {
      return element.classList.contains(...classlist);
    },
  };
}
