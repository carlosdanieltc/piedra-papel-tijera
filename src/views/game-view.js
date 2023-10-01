import { LitElement, html, css } from 'lit';

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

    static properties= {
        user : String,
    }

    constructor(){
        super();
        const urlParams = new URLSearchParams(window.location.search);
        const valueReceived = urlParams.get('value');
        console.log('Valor recibido en ViewB:', valueReceived);
    }

    render(){
        return html`
            <header class="cabecera">
                <h2>Hi user</h2>
                <button>Back</button>
            </header>
            <div class="container">
                <h2>Score</h2>
            </div>
        `;
    }
}

customElements.define('game-view', Game);
