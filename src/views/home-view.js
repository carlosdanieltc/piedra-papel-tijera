import { LitElement, html, css} from 'lit';

class Home extends LitElement{

    static styles = [
        css`
            .container{
                background: green;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: white
            }
        `
    ];

    render(){
        return html`
            <div class="container">
                <img src="../../assets/icons/icon-72x72.png"> 
                <h1>Create new player</h1>
                <input type="text">
                <button class="boton">Join</button>
            </div>
        `;
    }
}

customElements.define('home-view', Home);
