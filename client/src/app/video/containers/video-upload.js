import React, { useCallback } from 'react';
import gql from 'graphql-tag';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/react-hooks';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../../../components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@material-ui/core/Typography';

const UPLOAD_VIDEO = gql`
  mutation UploadVido($video: Upload!, $size: Float!, $timestamp: Float!) {
    uploadVideo(video: $video, size: $size, timestamp: $timestamp){
      success,
      message
    }
  }
`;

const VideoUpload = () => {

  const [uploadVideo, { loading, data, error }] = useMutation(UPLOAD_VIDEO, {
    onCompleted(data) {
      if (data.uploadVideo.success) {
        toast.success(data.uploadVideo.message);
      } else {
        toast.error(data.uploadVideo.message);
      }
    }
  });

  const onDrop = useCallback(
    ([file]) => {
      uploadVideo({ variables: { video: file, size: file.size, timestamp: file.lastModified } });
    },
    [uploadVideo]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  if (loading) return <Loading />;

  return (

    <div className="container-form" style={{ width: "max 30%" }}>
      <div className="row">
        <div className="offset-md-6">
          <div className="form-group">
            <div {...getRootProps()} className="files">
              <input {...getInputProps()} className="files" />
            </div>
            <Typography variant="h4" gutterBottom>
              {isDragActive ? (
                <p style={{ color: 'initial' }}>Drop the files here ...</p>
              ) : (
                  <p style={{ color: 'initial' }}>Drag & drop video file here, or click to select file to upload</p>
                )}
            </Typography>

          </div>
          <div className="form-group">
            <ToastContainer />
          </div>
        </div>
      </div>
    </div >
  )
}

export default VideoUpload;
