import { LitElement, html, css } from 'lit';
import '../components/game-plays.js';
import {ChangesInGame} from '../../indexeddb.js'; 

class Game extends LitElement{

    static styles = [
        css`
            .cabecera{
                color:white;
                background: #079992;
                display:flex;
                justify-content: space-around;
                align-items: center;
            }

            .backToHome{
                display: flex
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: transparent; 
                border: none;
                cursor: pointer;
            }

            img{
                width: 50px;
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
        gameMessage: { type: String},
        gameText: {type: String}
    }

    constructor(){
        super();
        const urlParams = new URLSearchParams(window.location.search);
        this.userName = urlParams.get('userName');
        this.score = urlParams.get('score');
        this.botCard = null;
        this.gameText = "Choose your card!";

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
                <button class="backToHome" @click=${this.backToHome}><img src="../../assets/images/backButton.png"></button>
            </header>
            <div class="container">
                <h3>${this.gameText}</h3>
                <h2 class="score">Score: ${this.score}</h2>
                <div class="cards">
                    ${this.plays.map(item => html`<game-plays .enableButton=${this.clickDisabled} .item=${item} @click="${()=>this.selection(item)}"></game-plays>`)}
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
        this.botCard = "...";
        this.gameText = "...";
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
            ChangesInGame(this.userName,this.score);
        }else{
            if (this.userCard == this.botCard) {
                this.gameMessage = "It's a tie!!"
            }else{
                this.gameMessage = "You Loseeeee!!"
            }
        }
        this.gameText = "Choose your card!";
    }
}

customElements.define('game-view', Game);
