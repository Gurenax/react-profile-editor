import React from 'react'
import TextField from './TextField'

const EditProfile = ({
  user,
  onChangeFirstName,
  onChangeLastName,
  onChangeImageUrl,
  visible
}) => {
  if (!visible) return null
  else {
    return (
      <div>
        <label>
          First name:{' '}
          <TextField
            value={user.firstName}
            onTextChange={onChangeFirstName} // Short hand for (value) => onChangeFirstName(value)
          />
        </label>
        <br />
        <label>
          Last name:{' '}
          <TextField
            value={user.lastName}
            onTextChange={onChangeLastName} // Short hand for (value) => onChangeLastName(value)
          />
        </label>
        <br />
        <label>
          Image URL:{' '}
          <TextField
            value={user.profileImageURL}
            onTextChange={onChangeImageUrl} // Short hand for (value) => onChangeImageUrl(value)
          />
        </label>
      </div>
    )
  }
}

export default EditProfile
