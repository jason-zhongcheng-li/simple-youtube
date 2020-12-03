import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import VideoCards from "../components/VideoCards";



const Routes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={VideoCards} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;