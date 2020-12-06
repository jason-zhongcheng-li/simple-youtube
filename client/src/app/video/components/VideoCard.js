import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "10px"
  },
  media: {
    height: 140,
  },
});

const VideoCard = props => {

  const { video } = props;

  return (
    <div className="gallery">
      <Link to={`/player/${video.id}`}>
        <img src={`http://localhost:4000/video/${video.id}/poster`} alt="Cinque Terre" width="600" height="400" />
      </Link>
      <div className="desc">{video.name}</div>
      <div className="desc">{video.size}</div>
      <div className="desc">{video.lastModified}</div>
    </div>



  );
};

export default VideoCard;