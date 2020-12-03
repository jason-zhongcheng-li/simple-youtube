import React, { Fragment } from "react";
import VideoCard from "./VideoCard";
// import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";


const VideoCards = () => {
  return (
    <Fragment>
      <div className="album">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </Fragment>
  );
}

export default VideoCards;