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
                margin-bottom: 100px;
            }

            .container{
                background: #f5f6fa;
                height: 100vh;
                overflow: hidden;
                padding: 100px 20px 0px 20px ;
            }
        `
    ];    

    static properties = {
        score: { type: Number, value: 0 },
        userSelection: { type: String, value: "" },
        //plays: {type: Array}
    }

    constructor(){
        super();
        this.score = 0;
        const urlParams = new URLSearchParams(window.location.search);
        this.userName = urlParams.get('value');

        this.plays= [
            {name: 'Piedra', image: '../../assets/images/rock.jpg'},
            {name: 'Papel', image: '../../assets/images/paper.jpg'},
            {name: 'Tijera', image: '../../assets/images/scissors.jpg'}
        ]
    }

    render(){
        return html`
            <header class="cabecera">
                <h2>Hi ${this.userName}</h2>
                <button @click=${this.backToHome}>Back</button>
            </header>
            <div class="container">
                <h2 class="score">Score: ${this.score}</h2>
                <game-plays .plays="${this.plays}" @selected-option=${this.handleUserSelection}></game-plays>
                <p>You: ${this.userSelection} - Bot: ${0}</p>
            </div>
        `;
    }

    backToHome(){
        location.href = `/home`;
    }

    handleUserSelection(event) {
        this.userSelection = event.detail; // Actualiza la propiedad userSelection con el valor emitido por game-plays
    }

    botSelection(){

    }
}

customElements.define('game-view', Game);
