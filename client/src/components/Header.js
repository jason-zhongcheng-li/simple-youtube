import React, { Fragment } from 'react';
import NavBar from './NavBar';
import Link from './Link'


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