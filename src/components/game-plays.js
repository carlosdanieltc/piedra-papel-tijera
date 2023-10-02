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
        userSelection: { type: String, value: "" },
        //plays: {type: Array, value: []}
    }

    constructor(){
        super();
        this.clickDisabled = false;
    }

    render(){
        return html`
            <div class="container">
                ${this.plays.map(item => html`<button class="playButton" @click="${() => this.election(item.name)}" ?disabled="${this.clickDisabled}"><img src="${item.image}"></button>`)}
            </div>
        `;
    }

    // Función que actualiza la carta elegida y emite el evento
    election(option){
        //if (!this.clickDisabled) {
            this.userSelection = option;
            this.dispatchEvent(new CustomEvent('selected-option', { detail: this.userSelection }));
        //}   
        //this.clickDisabled = !this.clickDisabled;
    }
}

customElements.define('game-plays', Plays);
