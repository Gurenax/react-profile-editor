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
        <h2>{getFullName(user.firstName, user.lastName)}</h2>
      </div>
    )
  }
}

export default ShowProfile
