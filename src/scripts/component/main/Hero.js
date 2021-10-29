import heroImage from '../../../public/images/heros/hero-image_4.jpg';
'use strict';

class Hero extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #render() {
    this.innerHTML = `
      <div>
        <img src="${heroImage}" alt="sweet peanut cookies">
      </div>
    `;
  }
}

customElements.define('hero-element', Hero);