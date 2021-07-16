import React from "react";
import * as All from "./App.styles"
// import UserMessages from "./components/UserMessages/UserMessages";

class App extends React.Component {
    state = {
        message: [
            {
                user: "",
                message: ""
            }
        ],
        valueInputUser: "",
        valueInputMessage: ""
    }

    onSend = () => {
        if (this.state.valueInputUser === ""){
            const warning = alert("Digite o nome do Usuário!")
            this.setState({
                valueInputUser: "",
                valueInputMessage: ""
            })

            return warning
        }

        if (this.state.valueInputMessage === ""){
            const warning = alert("Insira uma mensagem antes de enviar!")
            this.setState({
                valueInputUser: "",
                valueInputMessage: ""
            })

            return warning
        }

        const message = {
            user: this.state.valueInputUser,
            message: this.state.valueInputMessage
        }

        const newMessage = [ ...this.state.message, message]



        this.setState({
            message: newMessage,
            valueInputUser: "",
            valueInputMessage: ""
        })
    }


    onChangeUser = (event) => {
        this.setState({
            valueInputUser: event.target.value
        })
    }

    onChangeMessage = (event) => {
        this.setState({
            valueInputMessage: event.target.value
        })
    }


    render() {
        const messages = this.state.message.map((messages, index) => {
            return (
                <div key={index}>
                    <h4><strong>{messages.user}  </strong>: {messages.message}</h4>
                </div>
            )
        })


        return (
            <All.Container>

                <All.Chat>
                    <All.Messages>
                        {messages}
                    </All.Messages>

                    <All.AddMessage>
                        <div>
                            <input
                                value={this.state.valueInputMessage}
                                onChange={this.onChangeMessage}
                                placeholder={"Mensagem"}
                            />

                            <span>
                                <button onClick={this.onSend}>Enviar</button>
                            </span>
                        </div>
                    </All.AddMessage>
                </All.Chat>

                
                <All.Contacts>
                    <All.User>
                        <div>
                            <input
                                value={this.state.valueInputUser}
                                onChange={this.onChangeUser}
                                placeholder={"Usuário"}
                            />
                        </div>
                    </All.User>
                </All.Contacts>

            </All.Container>
        )
    }
}

export default App;
