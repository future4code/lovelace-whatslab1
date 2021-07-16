import React from 'react'; 
 
class Message extends React.Component {
    state = {
        valueInputMessage: "",  
    } 

    onChangeMessage = (event) => {
        this.setState({
            valueInputMessage: event.target.value
        })
    }
    
    render() {
        return(
            <div>
                <input 
                value={this.state.valueInputMessage}
                onChange={this.onChangeMessage} 
                placeholder={"Mensagem"}
                />
            </div>
        )
    }
}  
export default Message