import React from 'react'; 
 
class User extends React.Component {
    state = {
        valueInputUser: "",  
    } 
    
    onChangeUser = (event) => {
        this.setState({
            valueInputUser: event.target.value
        })
    } 
 
    render() {
        return(
            <div>
                <input 
                value={this.state.valueInputUser} 
                onChange={this.onChangeUser} 
                placeholder={"Usuário"}
                /> 
            </div>
        )
    }
}  
export default User