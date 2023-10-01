import { LitElement, html } from 'lit-element';
import 'lit-route';
import './src/views/home-view.js';
import './src/views/game-view.js';

class MyApp extends LitElement {
  render() {
    return html`
        <lit-route>
            <home-view path="/"></home-view>
            <game-view path="/game"></game-view>
        </lit-route>
    `;
  }
}

customElements.define('my-app', MyApp);