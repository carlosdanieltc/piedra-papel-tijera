import { LitElement, html, css } from 'lit';

class Game extends LitElement{

    render(){
        return html`
            <h1>Game</h1>
        `;
    }
}

customElements.define('game-view', Game);
