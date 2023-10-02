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
        userCard: { type: String, value: "" },
        botCard: { type: String},
        score: { type: Number},
        gameMessage: { type: String, value: "" },
    }

    constructor(){
        super();
        this.score = 0;
        const urlParams = new URLSearchParams(window.location.search);
        this.userName = urlParams.get('value');
        this.botCard = null;

        this.plays= [
            {name: 'Rock', image: '../../assets/images/rock.jpg'},
            {name: 'Paper', image: '../../assets/images/paper.jpg'},
            {name: 'Scissors', image: '../../assets/images/scissors.jpg'}
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
                <p>You: ${this.userCard} - Bot: ${this.botCard}</p>
                <p>${this.gameMessage}</p>
            </div>
        `;
    }

    backToHome(){
        location.href = `/home`;
    }

    selection(item){
        if (!this.clickDisabled) {
            this.clickDisabled = true;
            this.userCard = item.name;
            this.gameMessage = "";
            this.botSelection();
        }   
    }

    botSelection(){
        setTimeout(() => {
            let numRandom = Math.floor(Math.random() * this.plays.length);
            this.botCard = this.plays[numRandom].name;
            this.clickDisabled = false;
            this.validateGame();
          }, 1000);
    }

    validateGame(){
        if ((this.userCard == "Rock" && this.botCard == "Scissors") || (this.userCard == "Paper" && this.botCard == "Rock") || (this.userCard == "Scissors" && this.botCard == "Paper")) {
            this.gameMessage = "You Win!!";
            this.score++;
        }else{
            if (this.userCard == this.botCard) {
                this.gameMessage = "is a tie!!"
            }else{
                this.gameMessage = "You Loseeeee!!"
            }
        }
    }
}

customElements.define('game-view', Game);
