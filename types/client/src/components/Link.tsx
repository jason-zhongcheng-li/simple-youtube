import React, { Fragment } from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';

type LinkProps = { name: string, path: string };

const Link = (props: LinkProps) => {
  const { name, path } = props;
  return (
    <Fragment>
      <li><NavLink to={path} exact activeClassName="link-active">{name}</NavLink> </li>
    </Fragment>
  )
}
export default Link;