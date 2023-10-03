import { LitElement, html, css} from 'lit';
import {ValidateUser} from '../../indexeddb.js'; 

class Home extends LitElement{

    static styles = [
        css`
            .container{
                background: #079992;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: white;
                height: 100vh
            }
        `
    ];

    static properties = {
        myUser: { type: HTMLElement, value: null },
        score: { type: HTMLElement, value: null },
    }

    constructor(){
        super();
    }

    render(){
        return html`
            <div class="container">
                <img src="../../assets/icons/icon-72x72.png"> 
                <h1>Create new player</h1>
                <input type="text" id="userName">
                <button class="boton" @click=${this.valUser}>Join</button>
            </div>
        `;
    }
    
    async valUser(){
        this.myUser = this.shadowRoot.getElementById('userName');
        const userName = this.myUser.value;
        if (userName != "") {
            try {
                this.score = await ValidateUser(userName);
                location.href = `/game?userName=${encodeURIComponent(userName)}&score=${encodeURIComponent(this.score)}`;
            } catch (error) {
                console.log("Error al validar usuario");
            }
        }else{
            console.log("campo vacio");
        }
    }
}

customElements.define('home-view', Home);
