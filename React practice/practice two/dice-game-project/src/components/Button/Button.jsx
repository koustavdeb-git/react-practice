import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <>
      <ButtonProp>
        <button onClick={props.click} className={props.className}>{props.text}</button>
      </ButtonProp>
    </>
  )
}

export default Button

const ButtonProp = styled.div`
  button {
    border-radius: 5px;
    border: 1px solid black;
    background-color: black;
    color: white;
    padding: 5px;

    &:hover {
      border: 1px solid black;
      background-color: white;
      color: black;
    }
  }
`