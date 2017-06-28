import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import RaisedButton from 'material-ui/RaisedButton';
import request from 'superagent';
import colors from 'styles/colors';
import styles from './styles';

const CLOUDINARY_UPLOAD_PRESET = 'esu2odq3';
const CLOUDINARY_UPLOAD_URL = ' https://api.cloudinary.com/v1_1/hvvy4ktte/image/upload';

class UploadWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: '',
    };
    this.onImageDrop = this.onImageDrop.bind(this);
  }
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0],
    });

    this.handleImageUpload(files[0]);
  }
  handleImageUpload(file) {
    const upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
        });
      }
    });
  }
  render() {
    console.log('uploadedFIle', this.state.uploadedFileCloudinaryUrl);
    return (
      <Dropzone
        multiple={false}
        accept="image/*"
        onDrop={this.onImageDrop}
        style={styles.container}
      >
        <p>Drag and drop photos here to add them to the listing gallery.<br />or</p>
        <RaisedButton
          label={'select files'} labelStyle={styles.colors}
          backgroundColor={colors.secondary} primary
          style={styles.selectBtn}
        />
      </Dropzone>
    );
  }
}
export default UploadWidget;
