import React from "react"
import * as All from "./Contacts.styles"

function Contacts(props) {

    let userPhoto
    if (props.photo){
        userPhoto =  <All.UserPhoto src={props.photo} alt="foto perfil"/>
    }

    return (
        <All.Container>

            {userPhoto}

            <div>
                <h4>{props.userName}</h4>
                <p>{props.message}</p>
            </div>
        </All.Container>
    )
}

export default Contacts