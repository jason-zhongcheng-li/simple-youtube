import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import VideoList from '../app/video/containers/video-list';
// import VideoPlayer from '../app/video/containers/video-player';
// import VideoUpload from '../app/video/containers/video-upload';
// import Header from '../components/Header';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={VideoList} />
        {/* <Route exact path="/upload" component={VideoUpload} />
        <Route path="/video/player" component={VideoPlayer} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;