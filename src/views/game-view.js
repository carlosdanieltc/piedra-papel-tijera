import { LitElement, html, css } from 'lit';
import '../components/game-plays.js';

class Game extends LitElement{

    static styles = [
        css`
            .cabecera{
                background: green;
                display:flex;
                justify-content: space-around;
            }

            .container{
                background: blue;
            }
        `
    ];

    constructor(){
        super();
        const urlParams = new URLSearchParams(window.location.search);
        this.userName = urlParams.get('value');
    }

    render(){
        return html`
            <header class="cabecera">
                <h2>Hi ${this.userName}</h2>
                <button>Back</button>
            </header>
            <div class="container">
                <h2>Score</h2>
                <game-plays></game-plays>
            </div>
        `;
    }
}

customElements.define('game-view', Game);
