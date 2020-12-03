import React, { Fragment } from "react";
import Loading from "./Loading";
import VideoCard from "./VideoCard";
// import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";


const VideoCards: React.FunctionComponent = () => {
  return (
    // <Fragment>
    //   <Loading />
    // </Fragment>
    <div className="album">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}

export default VideoCards;