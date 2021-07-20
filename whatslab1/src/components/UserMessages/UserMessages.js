import React from 'react';
import * as All from "./UserMessages.styles"

export default function UserMessages(props) {
    return (
        <All.Flex>
            <h4>{props.userName}</h4>
            <p>{props.userMessage}</p>
        </All.Flex>
    )
}
