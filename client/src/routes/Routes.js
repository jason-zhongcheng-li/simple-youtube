import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import VideoList from '../app/video/containers/video-list';
import VideoUpload from '../app/video/containers/video-upload';
import Header from '../components/Header';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={VideoList} />
        <Route exact path="/upload" component={VideoUpload} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;