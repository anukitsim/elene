import { Button } from "react-bootstrap";
import styled from "styled-components";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;
    

`

export const PaymentButton = styled(Button)`
    margin-top: 2rem;
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: white;
    color: black;
    text-transform: uppercase;
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    justify-content: center;
`



