import React from "react";
import styled from "styled-components"


export const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 400px 2.5fr;
  grid-template-rows: 140px 1fr;
  gap: 4px 4px;
  grid-template-areas: 
    "pesquisa chat"
    "contatos chat";
`

export const Search = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1.5fr 1fr;
  gap: 0px 0px;
  grid-template-areas: 
    ". ."
    ". .";
  grid-area: pesquisa;
`

export const Contacts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas: 
    "."
    "."
    "."
    ".";
  grid-area: contatos;
`

export const Chat = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 200px;
  gap: 0px 0px;
  grid-template-areas: 
    "mensagens mensagens"
    "addmensagem addmensagem";
  grid-area: chat;
`

export const Message = styled.div`
  grid-area: mensagens;
`

export const AddMessage = styled.div`
  grid-area: addmensagem;
`