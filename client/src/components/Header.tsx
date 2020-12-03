import React, { FunctionComponent } from "react"
import { Fragment } from "react"
import Link from "./Link";
import NavBar from "../components/NavBar";

const Header: FunctionComponent = () => {
  return (
    <Fragment>
      <NavBar>
        <Link name="videos" path="/" />
        <Link name="upload" path="/upload" />
      </NavBar>
    </Fragment>
  )
}

export default Header;