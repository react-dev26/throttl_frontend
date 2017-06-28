import React, { PropTypes, Component } from 'react';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import Gallery from 'react-photo-gallery';
import Dropzone from 'react-dropzone';
import RaisedButton from 'material-ui/RaisedButton';
import request from 'superagent';
import Lightbox from 'react-images';
import Measure from 'react-measure';
import colors from 'styles/colors';
import styles from './styles';

const CLOUDINARY_UPLOAD_PRESET = 'yc4byn2o';
const CLOUDINARY_UPLOAD_URL = ' https://api.cloudinary.com/v1_1/dnnl21x3h/image/upload';

class MotoGallery extends Component {
  static propTypes = {
    getGalleryUrl: PropTypes.arrayOf(PropTypes.string),
    getEditState: PropTypes.bool,
  }
  static defaultProps = {
    getGalleryUrl: null,
    getEditState: null,
  }
  constructor() {
    super();
    this.state = { loadedAll: false, currentImage: 0, uploadedFileCloudinaryUrl: '' };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
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
  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    const { getGalleryUrl, getEditState } = this.props;
    console.log('getGalleryUrl', getGalleryUrl);
    const length = getGalleryUrl.length;
    const photos = [];
    for (let i = 0; i < length; i += 1) {
      const pSet = {
        src: getGalleryUrl[i],
        sizes: [
          '(min-width: 480px) 50vw',
          '(min-width: 1024px) 33.3vw',
          '100vw',
        ],
        width: 480,
        height: 270,
        alt: 'image',
      };
      photos.push(pSet);
    }
    console.log('photos', photos);
    if (this.state.uploadedFileCloudinaryUrl) {
      const pSet = {
        src: `${this.state.uploadedFileCloudinaryUrl}`,
        sizes: [
          '(min-width: 480px) 50vw',
          '(min-width: 1024px) 33.3vw',
          '100vw',
        ],
        width: 480,
        height: 270,
        alt: 'image',
      };
      photos.push(pSet);
    }
    const RenderGallery = () =>
      <Measure whitelist={['width']}>
        {
          ({ width }) => {
            let cols = 1;
            if (width >= 480) {
              cols = 2;
            }
            if (width >= 1024) {
              cols = 3;
            }
            return (
              <Gallery photos={photos} cols={cols} onClickPhoto={this.openLightbox} />
            );
          }
        }
      </Measure>;
    return (
      getEditState ?
        <div>
          <div className="MotoGallery" style={styles.display}>
            <RenderGallery />
            <Lightbox
              images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
              width={1600}
            />
          </div>
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
        </div> :
        <div className="MotoGallery" style={styles.display}>
          <RenderGallery />
          <Lightbox
            images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            width={1600}
          />
        </div>
    );
  }
}
export default MotoGallery;
