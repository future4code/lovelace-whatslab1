import React from 'react';  

class Search extends React.Component {
    state = {
        valueInputSearch: ""
    }
    
    onChangeSearch = (event) => {
        this.setState({
            valueInputSearch: event.target.value
        })
    }
    
    render() {
        return(
            <div>
                <input 
                value={this.state.valueInputSearch} 
                onChange={this.onChangeSearch} 
                placeholder={"Pesquisa"}
                />
            </div>
        )
    }
}  
export default Search