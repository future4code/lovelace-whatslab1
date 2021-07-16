import React from "react";
import * as All from "./App.styles"

class App extends React.Component {
    render() {
        return (
            <All.Container>
                <All.Search>

                </All.Search>

                <All.Contacts>

                </All.Contacts>

                <All.Chat>
                    <All.Message>

                    </All.Message>

                    <All.AddMessage>

                    </All.AddMessage>
                </All.Chat>
            </All.Container>
        )
    }
}

export default App;
