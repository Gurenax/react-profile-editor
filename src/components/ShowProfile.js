import React from 'react'

const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

const ShowProfile = ({
  user
}) => {
  return (
    <div>
      <img src={user.profileImageURL} />
      <p>Name: {getFullName(user.firstName, user.lastName)}</p>
    </div>
  )
}

export default ShowProfile