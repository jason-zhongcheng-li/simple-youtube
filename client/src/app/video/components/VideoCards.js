import React from "react";
import VideoCard from "./VideoCard";
// import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";


const VideoCards = props => {
  const { videos } = props;
  return (
    // <Fragment>
    //   <Loading />
    // </Fragment>
    <div className="album">
      {videos && videos.map(video => <VideoCard key={video.id} video={video} />)}
    </div>
  );
}

export default VideoCards;