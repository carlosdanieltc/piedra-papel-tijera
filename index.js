import { LitElement, html } from 'lit-element';
import { Router } from '@vaadin/router';
import './src/views/home-view.js';
import './src/views/game-view.js';

class MyApp extends LitElement {

  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/game', component: 'game-view' },
      { path: '(.*)', redirect: '/' },
    ]);
  }

// ... 

  render() {
    return html`
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}

customElements.define('my-app', MyApp);