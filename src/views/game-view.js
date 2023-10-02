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

            .cards{
                display: flex;
                align-items: center;
                color: white;
                justify-content: center
            }
        `
    ];    

    static properties = {
        //score: { type: Number, value: 0 },
        userSelection: { type: String, value: "" },
        //plays: {type: Array}
    }

    constructor(){
        super();
        this.score = 0;
        const urlParams = new URLSearchParams(window.location.search);
        this.userName = urlParams.get('value');
        this.botCard = null;

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
                <div class="cards">
                    ${this.plays.map(item => html`<game-plays .item=${item} @click="${()=>this.selection(item)}"></game-plays>`)}
                </div>
                <p>You: ${this.userSelection} - Bot: ${this.botCard}</p>
            </div>
        `;
    }

    backToHome(){
        location.href = `/home`;
    }

    // Función que actualiza la carta elegida y emite el evento
    selection(item){
        if (!this.clickDisabled) {
            this.clickDisabled = true;
            this.userSelection = item.name;
            this.botSelection();
            console.log(this.userSelection);
        }   
    }

    botSelection(){
        setTimeout(() => {
            let numRandom = Math.floor(Math.random() * this.plays.length);
            this.botCard = this.plays[numRandom].name;
            console.log(this.botCard);
            this.clickDisabled = false;
          }, 1000);
    }

    validateGame(){

    }
}

customElements.define('game-view', Game);
