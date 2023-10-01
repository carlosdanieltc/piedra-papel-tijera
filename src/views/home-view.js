import { LitElement, html, css} from 'lit';

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

    render(){
        return html`
            <div class="container">
                <img src="../../assets/icons/icon-72x72.png"> 
                <h1>Create new player</h1>
                <input type="text" id="user">
                <button class="boton" @click=${this.validaUsuario}>Join</button>
            </div>
        `;
    }
    
    validaUsuario(){
        const myUser = this.shadowRoot.getElementById('user');
        const userName = myUser.value;
        if (userName != "") {
            location.href = `/game?value=${encodeURIComponent(userName)}`;
        }else{
            console.log("campo vacio");
        }
    }
}

customElements.define('home-view', Home);
