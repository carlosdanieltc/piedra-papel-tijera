import { LitElement, html, css} from 'lit';

class Plays extends LitElement{

    static styles = [
        css`
            .playButton{
                display: flex;
                align-items: center;
                cursor:pointer;
                padding: 0;
                margin: 0 5px 0 5px;
                background:black;
            }

            img{
                width: 100%;
                height: 100px;
            }

            .playButton:disabled {
                background-color: black;
                color: white; 
                cursor: default; 
            }

            .playButton:disabled > img {
                opacity: 0.5; 
            }
        `
    ];

    static properties = {
        enableButton: { type: Boolean, attribute: 'enable-button', reflect: true },
    }

    render(){
        return html`
            <button class="playButton" ?disabled="${this.enableButton}"><img src="${this.item.image}"></button>
        `;
    }
}

customElements.define('game-plays', Plays);
