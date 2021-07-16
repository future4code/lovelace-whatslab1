import React from "react";
import * as All from "./App.styles" 
import Search from "./components/Search/Search"; 
import Message from "./components/Message/Message"; 
import User from "./components/User/User";

class App extends React.Component {
   state = {
       message: [{
            user: "", 
            message: ""
       }],
   } 
   



    render() {
        return (
            <All.Container>
                <All.Search>
                    <Search 
                    
                    />
                </All.Search>

                <All.Contacts>
                    <User 
                    
                    />
                </All.Contacts>

                <All.Chat>
                    <All.Message>

                    </All.Message>

                    <All.AddMessage>
                        <Message 
                        
                        />
                    </All.AddMessage>
                </All.Chat>
            </All.Container>
        )
    }
}

export default App;
