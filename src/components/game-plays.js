import { LitElement, html, css} from 'lit';

class Plays extends LitElement{

    static styles = [
        css`
            .container{
                background: green;
                display: flex;
                align-items: center;
                color: white
            }
        `
    ];

    constructor(){
        super();
        this.plays = [
            {name: 'Piedra', image: ''},
            {name: 'Papel', image: ''},
            {name: 'Tijera', image: ''}
        ]
    }

    render(){
        return html`
            <div class="container">
                ${this.plays.map(item => html`<div>${item.name}</div>`)}
            </div>
        `;
    }
    
}

customElements.define('game-plays', Plays);
