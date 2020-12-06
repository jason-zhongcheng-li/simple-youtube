import React, { Fragment } from 'react';

const PlayVideo = props => {
  const { video } = props;

  return (
    <Fragment>
      <video controls muted autoPlay>
        <source src={`http://localhost:4000/video/${video.id}/play`} type="video/mp4"></source>
      </video>
      <h1 style={{ color: 'white' }}>{video && video.name.split('.')[0]}</h1>
    </Fragment>
  )
}

export default PlayVideo;