import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';
import './src/views/home-view.js';
import './src/views/game-view.js';
import {StartDataBase} from './indexeddb.js'; 

class MyApp extends LitElement {
  
  static styles = css`

    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
    }

    main {
      flex-grow: 1;
    }
  `;

  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/game', component: 'game-view' },
      { path: '(.*)', redirect: '/' },
    ]);
    //document.addEventListener("load",StartDataBase();
    StartDataBase();
  }

  render() {
    return html`
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}

customElements.define('my-app', MyApp);