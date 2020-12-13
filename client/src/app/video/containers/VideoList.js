import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { VideoCards } from '../components';
import { Loading } from '../../../components';

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
      {data && <VideoCards videos={data.videos} />}
    </Fragment>
  )
}

export default VideoList;