class Author extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #render() {
    this.innerHTML = `
      <ul>
        <li>
          <a 
            href="https://github.com/sabiq7392" 
            title="github author"
          >
            <i class="bi bi-github"></i>  
            sabiq7392
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/sabiq-muhammad-6b314a210/" 
            title="linkedin author"
          >
            <i class="bi bi-linkedin"></i>
            Sabiq Muhammad
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ssabiqmame/"
            title="instagram author"
          >
            <i class="bi bi-instagram"></i>
            @ssabiqmame
          </a>
        </li>
      </ul>
    `;
  }
}

customElements.define('author-element', Author);