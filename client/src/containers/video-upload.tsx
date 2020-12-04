import React, { useState } from 'react';
// import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateFileType, ValidationResult } from '../validations';



const VideoUpload = () => {
  // const { user } = props;
  const [file, setFile] = useState({ selectedFile: {}, loaded: 0 })
  // const history = useHistory();

  // const [updateUser] = useMutation(
  //   UPDATE_USER_BY_ID,
  //   {
  //     onCompleted() {
  //       history.goBack();
  //     }
  //   }
  // );

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //get file object
    const file = event.target.files ? event.target.files[0] : null;

    console.log('file = ', file);

    const validType = validateFileType(event, file) as ValidationResult;

    if (!validType.valid) {
      toast.error(validType.err);
    } else if (!!file) {
      setFile({
        selectedFile: file,
        loaded: 0
      })
    }

  }


  const onClickHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log('submit');
    toast.success('test success');
    toast.error('test success');
    // await updateUser({
    //   variables: {
    //     id: +user.id,
    //     input: {
    //       firstName: values.firstName,
    //       lastName: values.lastName,
    //       email: values.email
    //     }
    //   }
    // }).catch(err => console.log(err));
  }

  return (
    <div className="container-form">
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <div className="form-group files">
            <label>Upload Your File </label>
            <input type="file" className="form-control" onChange={onChangeHandler} />
          </div>
          <div className="form-group">
            <ToastContainer />
          </div>
          <button type="button" name="upload-file" onClick={onClickHandler}>Upload</button>
        </div>
      </div>
    </div>
  )
}

export default VideoUpload;