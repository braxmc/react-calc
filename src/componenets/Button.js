import React from 'react';
import {ButtonWrap} from '../styles/ButtonElements'

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
}

const Button = (props) => (
  <ButtonWrap className={`${isOperator(props.children) ? null : 'operator'}`}>
    {props.children}
  </ButtonWrap>
)

export default Button;