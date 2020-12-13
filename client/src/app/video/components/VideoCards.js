import React from "react";
import VideoCard from "./VideoCard";

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