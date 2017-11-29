import React from 'react'

const Button = ({ title, onButtonClick }) => (
  <button
    onClick={onButtonClick} // Short hand for event => onButtonClick()
  >
    {title}
  </button>
)

export default Button
