import React from 'react';
import { Link } from 'react-router-dom';


const VideoCard = props => {

  const { video } = props;
  return (
    <div className="gallery">
      <Link to={`/player/${video.id}`}>
        <img src={`http://localhost:4000/video/${video.id}/poster`} alt="Cinque Terre" width="600" height="400" />
      </Link>
      <div className="desc">{video.name}</div>
      <div className="desc" style={{ textAlign: "left" }}>Size: {video.size}mb</div>
      <div className="desc" style={{ textAlign: "left" }}>Last Modified: {video.lastModified}</div>
    </div>



  );
};

export default VideoCard;