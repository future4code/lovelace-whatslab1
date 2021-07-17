import React from "react";
import * as All from "./App.styles";
import avatar from "./img/avatar.jpg";

import UserMessages from "./components/UserMessages/UserMessages";
import Contacts from "./components/Contacts/Contacts";

class App extends React.Component {
    state = {
        message: [
            {
                user: "",
                message: "",
                photo: ""
            }
        ],
        valueInputUser: "",
        valueInputMessage: ""
    }

    onSend = () => {
        if (this.state.valueInputUser === "") {
            this.setState({
                valueInputUser: "",
                valueInputMessage: ""
            })

            return alert("Digite o nome do Usuário!")
        }

        if (this.state.valueInputMessage === "") {
            this.setState({
                valueInputUser: "",
                valueInputMessage: ""
            })

            return alert("Insira uma mensagem antes de enviar!")
        }

        const message = {
            user: this.state.valueInputUser + ": ",
            message: this.state.valueInputMessage,
            photo: avatar
        }

        const newMessage = [...this.state.message, message]


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
                <UserMessages key={index}
                    userName={messages.user}
                    userMessage={messages.message}
                />
            )
        })

        const users = this.state.message.map((messages, index) =>{
            return (
                <Contacts key={index}
                    userName={messages.user}
                    message={messages.message}
                    photo={messages.photo}
                />
            )
        })

        return (
            <All.Container>

                <All.I1>
                    <All.Contacts>
                        {users}
                    </All.Contacts>

                    <All.User>
                        <div>
                            <input
                                value={this.state.valueInputUser}
                                onChange={this.onChangeUser}
                                placeholder={"Usuário"}
                            />
                        </div>
                    </All.User>
                </All.I1>

                <All.I2>
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
                </All.I2>
            </All.Container>
        )
    }
}

export default App;
