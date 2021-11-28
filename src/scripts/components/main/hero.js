class Hero extends HTMLElement {
  connectedCallback() {
    this.imgdesktop = this.getAttribute('imgdesktop') || null;
    this.#render();
  }

  #render() {
    this.innerHTML = `
      <div class="skeleton-hero">
        <picture>
          <source 
            type="image/webp" 
            media="(max-width: 767px)"
            srcset="images/heros/hero-image_4-small.webp">
          </source>
          <source 
            type="image/jpeg" 
            media="(max-width: 767px)" 
            srcset="images/heros/hero-image_4-small.jpg">
          </source>
          <source 
            type="image/webp" 
            srcset="images/heros/hero-image_4-large.webp">
          </source>
          <source 
            type="image/jpeg" 
            srcset="images/heros/hero-image_4-large.jpg">
          </source>
          <img 
            src="images/heros/hero-image_4-large.jpg" 
            alt="sweet peanut cookies">
          </img>
        </picture>
      </div>
    `;
  }
}

customElements.define('hero-element', Hero);
