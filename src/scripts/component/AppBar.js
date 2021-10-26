import logo from '../../public/images/logo/mame-logo-food.svg';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
        <a class="navbar-brand" href="index.html">
          <img src="${logo}" alt="mame food">
        </a>
        <button class="d-none" type="button">
          <i class="bi bi-list"></i>
        </button>
        <ul>
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="#">Favorite</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sabiq-muhammad-6b314a210/">
              About Us
            </a>
          </li>
        </ul>

      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);