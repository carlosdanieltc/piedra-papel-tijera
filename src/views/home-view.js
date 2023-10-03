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
    }

    constructor(){
        super();
        let score= 0;
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
    
    valUser(){
        this.myUser = this.shadowRoot.getElementById('userName');
        const userName = this.myUser.value;
        if (userName != "") {
            location.href = `/game?value=${encodeURIComponent(userName)}`;
            ValidateUser(userName);
        }else{
            console.log("campo vacio");
        }
    }
}

customElements.define('home-view', Home);
