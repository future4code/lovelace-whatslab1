import React from "react";
import styled from "styled-components"


export const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 0.7fr 1.6fr;
  grid-template-rows: 1.7fr;
  gap: 4px 30px;
  grid-template-areas: 
    ". .";
  justify-content: stretch;
  justify-items: stretch;
  align-items: center;

`

export const I1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1.4fr 0.6fr;
  gap: 0px 0px;
  grid-template-areas: 
    "contato"
    "contato"
    "nomeusuario";
`

export const I2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.8fr 0.2fr;
  gap: 0px 0px;
  grid-template-areas: 
    "messages"
    "message";
`

export const Contacts = styled.div`
  grid-area: contato;

  
`

export const User = styled.div`
  align-self: end;
  grid-area: nomeusuario
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  
`

export const Messages = styled.div`
  grid-area: messages;
  border: 1px solid #000;
  border-radius: 7px;
  margin: 20px;
  height: 400px;
  width: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: block;
  
`

export const AddMessage = styled.div`
  grid-area: message;
  margin: 10px auto;
`