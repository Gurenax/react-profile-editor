import React from 'react'

const TextField = ({
  value,
  onTextChange
}) => {
  return (
    <input
      type='text'
      value={ value }
      onChange={ (event) => {
        console.log('Typed..', event.target.value)
        onTextChange(event.target.value)
      }}
    />
  )
}

export default TextField