import React, { Fragment } from "react";
import logo from '../assets/img/logo.svg';


const Loading: React.FunctionComponent = () => {
  return (
    <Fragment>
      <img src={logo} className="App-logo" alt="logo" />
    </Fragment>
  );
}

export default Loading;