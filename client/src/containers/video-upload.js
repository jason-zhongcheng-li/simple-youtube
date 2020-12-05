import React from 'react';
import gql from 'graphql-tag';

const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

const VideoUpload = props => {
  return (
    <div></div>
  )
}

export default VideoUpload;
