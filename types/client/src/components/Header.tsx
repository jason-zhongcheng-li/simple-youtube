import React, { Fragment } from 'react';
import Link from './Link'
import NavBar from './NavBar';


const Header = () => {
  return (
    <Fragment>
      <NavBar>
        <Link name="home" path="/" />
        <Link name="upload" path="/upload" />
      </NavBar>
    </Fragment>
  )
}
export default Header;