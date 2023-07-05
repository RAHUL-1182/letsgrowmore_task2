import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="brand">LetsGrowMore-TASK-2</div>
        <button className="get-users-button" onClick={getUsers}>
          Get Users
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
