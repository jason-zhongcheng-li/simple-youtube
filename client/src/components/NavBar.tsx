import React, { FunctionComponent } from "react";

const NavBar: FunctionComponent = (props: any) => {
  const { children } = props;

  return (
    <div className="nav-bar">
      <ul>
        {children}
      </ul>
    </div>
  );

}

export default NavBar;