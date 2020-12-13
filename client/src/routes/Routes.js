import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { VideoList, VideoPlayer, VideoUpload } from '../app/video/containers';
import Header from '../components/Header';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={VideoList} />
        <Route exact path="/upload" component={VideoUpload} />
        <Route path="/video/player" component={VideoPlayer} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;