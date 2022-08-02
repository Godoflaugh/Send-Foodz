import React from 'react';

const UserPage = ({ users, title }) => {
  console.log(users)
  if (!users.length) {
    return <h3> No Users Yet!</h3>
  }

  return (
    <div>
      <h3>{title}</h3>
      {users && users.map((user) => (
        <div>
          <p>{user._id}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default UserPage