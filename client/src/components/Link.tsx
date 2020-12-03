import React, { Fragment, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  path: string;
}

const Link: FunctionComponent<Props> = props => {
  const { name, path } = props;

  return (
    <Fragment>
      <li><NavLink to={path} exact activeClassName="link-active">{name}</NavLink> </li>
    </Fragment >
  )
}

export default Link;