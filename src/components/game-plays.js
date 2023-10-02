import { LitElement, html, css} from 'lit';

class Plays extends LitElement{

    static styles = [
        css`
            .container{            
                display: flex;
                align-items: center;
                color: white;
                justify-content: center
            }

            .playButton{
                display: flex;
                align-items: center;
                border: 1px solid black;
                cursor:pointer;
                padding: 0;
                margin: 0 10px 0 10px;
            }

            img{
                width: 100%;
                height: 100px;
            }
        `
    ];

    properties = {
        userSelection: { type: String, value: "" }
    }

    constructor(){
        super();
        this.plays = [
            {name: 'Piedra', image: '../assets/images/rock.jpg'},
            {name: 'Papel', image: '../../assets/images/paper.jpg'},
            {name: 'Tijera', image: '../../assets/images/scissors.jpg'}
        ]
    }

    render(){
        return html`
            <div class="container">
                ${this.plays.map(item => html`<button class="playButton" @click="${() => this.election(item.name)}"><img src="${item.image}"></button>`)}
            </div>
        `;
    }

    // Función que actualiza el puntaje y emite el evento
    election(option){
        this.userSelection = option;
        this.dispatchEvent(new CustomEvent('selected-option', { detail: this.userSelection }));
    }
}

customElements.define('game-plays', Plays);
