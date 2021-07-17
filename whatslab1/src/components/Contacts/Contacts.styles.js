import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  margin: 20px;
  
  img {
    border-radius: 50%;
    border: 2px solid #E3E3E3;
    max-width: 15%;
  }
  
  div{
    display: flex;
    flex-direction: column;
    margin: auto 10px;
    
    h4{
      font-weight: 700;
      margin: 0 auto;
      max-width: 50px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    p{
      max-width: 50px; 
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis;
      margin: 0 auto;
    }
  }
`

export const UserPhoto = styled.img`
    border-radius: 50%;
    border: 2px solid #E3E3E3;
    max-width: 15%;
 
`