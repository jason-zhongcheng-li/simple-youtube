import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import VideoUpload from '../containers/video-upload';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={VideoUpload} />
        {/* <Route exact path="/upload" component={ } /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;