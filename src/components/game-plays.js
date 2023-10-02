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
            }

            img{
                width: 100%;
                height: 100px;
            }
        `
    ];

    render(){
        return html`
            <button class="playButton"><img src="${this.item.image}"></button>
        `;
    }
}

customElements.define('game-plays', Plays);
