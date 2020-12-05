import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Link = props => {
  const { name, path } = props;
  return (
    <Fragment>
      <li><NavLink to={path} exact activeClassName="link-active">{name}</NavLink> </li>
    </Fragment>
  )
}
export default Link;