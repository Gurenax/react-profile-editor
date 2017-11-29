import React from 'react'
import TextField from './TextField'

const EditProfile = ({
  user,
  onChangeFirstName,
  onChangeLastName,
  onChangeImageUrl,
  visible
}) => {
  let className = ''
  if (visible) className = 'visible'
  else className = 'invisible'

  return (
    <div className={className}>
      <label>
        First name:{' '}
        <TextField
          value={user.firstName}
          onTextChange={value => onChangeFirstName(value)}
        />
      </label>
      <br />
      <label>
        Last name:{' '}
        <TextField
          value={user.lastName}
          onTextChange={value => onChangeLastName(value)}
        />
      </label>
      <br />
      <label>
        Image URL:{' '}
        <TextField
          value={user.profileImageURL}
          onTextChange={value => onChangeImageUrl(value)}
        />
      </label>
    </div>
  )
}

export default EditProfile
