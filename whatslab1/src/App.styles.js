import React from "react";
import styled from "styled-components"


export const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 0.7fr 1.6fr 0.7fr;
  grid-template-rows: 0.6fr 1.7fr 0.7fr;
  gap: 4px 20px;
  grid-template-areas: 
    ". . ."
    "contato chat ."
    ". . .";
`

export const Contacts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas: 
    "usuario"
    "usuario"
    "usuario";
  grid-area: contato;

  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
`

export const User = styled.div`
  justify-self: start;
  align-self: end;
  grid-area: usuario;
  
  
`

export const Chat = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.6fr 0.4fr;
  gap: 0px 0px;
  grid-template-areas: 
    "messages"
    "addmessage";
  grid-area: chat;

  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
`

export const Messages = styled.div`
  justify-self: stretch;
  align-self: end;
  grid-area: messages;
  margin-top: 2px;
`

export const AddMessage = styled.div`
  justify-self: stretch;
  align-self: end;
  grid-area: addmessage;
`