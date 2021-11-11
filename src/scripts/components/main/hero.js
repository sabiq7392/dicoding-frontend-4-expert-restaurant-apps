import heroImage from '../../../public/images/heros/hero-image_4.jpg';

class Hero extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div>
        <img src="${heroImage}" alt="sweet peanut cookies">
      </div>
    `;
  }
}

customElements.define('hero-element', Hero);
