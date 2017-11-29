import React from 'react'

const Button = ({ title, onButtonClick }) => (
  // Short hand for event => onButtonClick()
  <button onClick={onButtonClick}>{title}</button>
)

export default Button
