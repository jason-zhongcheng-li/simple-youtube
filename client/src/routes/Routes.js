import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import VideoUpload from '../app/video/containers/video-upload';
import Header from '../components/Header';
import Loading from '../components/Loading';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route exact path="/upload" component={VideoUpload} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;