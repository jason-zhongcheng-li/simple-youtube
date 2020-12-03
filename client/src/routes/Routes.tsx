import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import VideoCards from "../components/VideoCards";



const Routes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={VideoCards} />
        </Switch>
      </header>
    </BrowserRouter>
  );
}

export default Routes;