import React from 'react'

const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

const ShowProfile = ({ user, visible }) => {
  if (!visible) return null
  else {
    return (
      <div>
        <img src={user.profileImageURL} alt="" />
        <p>Name: {getFullName(user.firstName, user.lastName)}</p>
      </div>
    )
  }
}

export default ShowProfile
