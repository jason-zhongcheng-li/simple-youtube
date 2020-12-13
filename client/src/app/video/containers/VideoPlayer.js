import React from 'react';
import { PlayVideo } from '../components';

const VideoPlayer = props => {
  const video = { ...props.location.state };

  return (
    <div className="container">
      {video && <PlayVideo video={video} />}
    </div>
  )
}

export default VideoPlayer;