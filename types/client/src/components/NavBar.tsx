import React from 'react';

const NavBar = props => {
  const { children } = props;

  return (
    <div className="nav-bar">
      <ul>
        {children}
      </ul>
    </div>
  )
}
export default NavBar;