import React from 'react';

const UserCard = ({ users, loading }) => {
  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="user-card-grid">
      {users.map(user => (
        <div className="user-card" key={user.id}>
          <img src={user.avatar} alt="User Avatar" />
          <h3>{`${user.first_name} ${user.last_name}`}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
