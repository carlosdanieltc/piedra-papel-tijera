import { LitElement, html, css } from 'lit';
import '../components/game-plays.js';

class Game extends LitElement{

    static styles = [
        css`
            .cabecera{
                color:white;
                background: #0a3d62;
                display:flex;
                justify-content: space-around;
            }

            .score{
                text-align: center;
            }

            .container{
                background: #079992;
                height: 100vh;
                overflow: hidden;
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
                <button @click=${this.volverAHome}>Back</button>
            </header>
            <div class="container">
                <h2 class="score">Score:</h2>
                <game-plays></game-plays>
            </div>
        `;
    }

    volverAHome(){
        location.href = `/home`;
    }
}

customElements.define('game-view', Game);
