import heroImageLarge from '../../../public/images/heros/hero-image_4-large.jpg';
import heroImageSmall from '../../../public/images/heros/hero-image_4-small.jpg';

class Hero extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #render() {
    this.innerHTML = `
      <div>
        <picture>
          <source media="(max-width: 767px)" srcset="${heroImageSmall}">
          <img src="${heroImageLarge}" alt="sweet peanut cookies">
        </picture>
      </div>
    `;
  }
}

customElements.define('hero-element', Hero);
