import { LitElement, html, css} from 'lit';

class Plays extends LitElement{

    static styles = [
        css`
            .container{
                background: #0a3d62;
                display: flex;
                align-items: center;
                color: white;
                justify-content: center
            }

            .play{
                height: 200px;
                width: 200px;
                display: flex;
                align-items: center;
                border: 1px solid black;
            }

            img{
                width: 100%;
            }
        `
    ];

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
                ${this.plays.map(item => html`<button class="play"><img src="${item.image}"></button>`)}
            </div>
        `;
    }
    
}

customElements.define('game-plays', Plays);
