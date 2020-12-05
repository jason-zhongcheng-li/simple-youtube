import React, { useCallback } from 'react';
import gql from 'graphql-tag';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/react-hooks';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../components/Loading';

const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

const VideoUpload = props => {

  const [uploadFile, { loading, data, error }] = useMutation(uploadFileMutation, {
    // refetchQueries: [{ query: filesQuery }]
  });

  const onDrop = useCallback(
    ([file]) => {
      uploadFile({ variables: { file } });
    },
    [uploadFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  if (loading) return <Loading />;

  return (

    <div className="container-form">
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <div className="form-group">
            <div {...getRootProps()} className="files">
              <input {...getInputProps()} className="files" />

            </div>
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
          </div>
          <div className="form-group">
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoUpload;