import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import VideoCards from '../components/VideoCards';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../../../components/Loading';

const GET_ALL_VIDEOS = gql`
  query {
    videos{
      id,
      name,
      lastModified,
      size
  }
}
`;


const VideoList = () => {

  const { data, loading } = useQuery(GET_ALL_VIDEOS)

  if (loading) return (<Loading />);

  return (
    <Fragment>
      <VideoCards videos={data.videos} />
    </Fragment>
  )
}

export default VideoList;