import React, { Fragment, FunctionComponent } from "react";
import logo from '../assets/img/logo.svg';


const Loading: FunctionComponent = () => {
  return (
    <Fragment>
      <img src={logo} className="App-logo" alt="logo" />
    </Fragment>
  );
}

export default Loading;