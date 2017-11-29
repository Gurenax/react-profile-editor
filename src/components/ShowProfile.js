import React from 'react'

const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

const ShowProfile = ({ user, visible }) => {
  let className = ''
  if (!visible) className = 'invisible'

  return (
    <div className={className}>
      <img src={user.profileImageURL} />
      <p>Name: {getFullName(user.firstName, user.lastName)}</p>
    </div>
  )
}

export default ShowProfile
