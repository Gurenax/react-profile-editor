import React from 'react'

const Button = ({
  title,
  onButtonClick
}) => {
  return (
    <button onClick={ (event) => onButtonClick() } >
      { title }
    </button>
  )
}

export default Button;