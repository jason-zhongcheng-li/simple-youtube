import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Loading from '../components/Loading';
import VideoUpload from '../containers/video-upload';

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