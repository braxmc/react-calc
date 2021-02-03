import React from 'react';
import {ButtonWrap} from '../styles/ButtonElements'

const Button = (props) => (
  <ButtonWrap className={`${isOperator(props.children) ? null : 'operator'}`}>
    {props.children}
  </ButtonWrap>
)

const isOperator = val => {
  return !isNaN(val) || val === '.' || val === '=';
}

export default Button;