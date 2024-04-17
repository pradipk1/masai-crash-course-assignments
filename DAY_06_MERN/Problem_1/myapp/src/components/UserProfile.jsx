import React from 'react'

function UserProfile({user}) {
  return (
    <div>
        <h2>User Profile</h2>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.bio}</p>
    </div>
  )
}

export default UserProfile;