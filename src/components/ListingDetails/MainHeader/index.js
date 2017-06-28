import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Responsive from 'components/Responsive';
import colors from 'styles/colors';
import { getStyle } from 'utils';
import styles from './styles';

const CLOUDINARY_UPLOAD_PRESET = 'esu2odq3';
const CLOUDINARY_UPLOAD_URL = ' https://api.cloudinary.com/v1_1/hvvy4ktte/image/upload';
const userRole = {
  defaultUserRole: {
    label1: 'Message Seller',
    label2: 'Make Offer',
  },
  realUserRole: {
    label: 'Edit Listing',
    label1: 'Change Main Photo',
    label2: 'Publish Listing',
    label3: 'Take Down Listing',
  },
};
class MainHeader extends Component {
  static propTypes = {
    action: PropTypes.func,
    getSrc: PropTypes.string,
    getEditState: PropTypes.bool,
    onClick: PropTypes.func,
    getId: PropTypes.string,
  }
  static defaultProps = {
    action: () => {},
    getSrc: null,
    getEditState: null,
    onClick: () => {},
    getId: PropTypes.id,
  }
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
    console.log('children', `${this.state.uploadedFileCloudinaryUrl}`);
    const { getId, getEditState, onClick, getSrc, action } = this.props;
    const getMainHeaderStyle = isTablet =>
      <div style={{ ...getStyle(styles.image, isTablet), backgroundImage: this.state.uploadedFileCloudinaryUrl ? `url(${this.state.uploadedFileCloudinaryUrl})` : `url(${getSrc})` }}>
        <div style={styles.wrapper}>
          {
            getId ?
              <div>
                {getEditState ?
                  <div style={styles.upgradeWrapper}>
                    <Dropzone
                      multiple={false}
                      accept="image/*"
                      onDrop={this.onImageDrop}
                      style={styles.container}
                    >
                      <RaisedButton
                        label={userRole[getId].label1} labelStyle={styles.colors}
                        backgroundColor={colors.secondary} primary
                        style={getStyle(styles.changeMainPhoto, isTablet)}
                      />
                    </Dropzone>
                    <RaisedButton
                      label={userRole[getId].label2} labelStyle={styles.colors}
                      backgroundColor={colors.secondary} primary
                      style={getStyle(styles.listingBtn, isTablet)} onTouchTap={onClick}
                    />
                    <RaisedButton
                      label={userRole[getId].label3} labelStyle={styles.colors}
                      backgroundColor={colors.secondary}
                      style={getStyle(styles.listingBtn, isTablet)} onTouchTap={onClick}
                    />
                  </div> :
                  <RaisedButton
                    label={userRole[getId].label} labelStyle={styles.colors}
                    backgroundColor={colors.secondary}
                    style={getStyle(styles.editListingBtn, isTablet)} onTouchTap={onClick}
                  />
                }
              </div> :
              <div style={styles.defaultUserRoleStyle}>
                <RaisedButton
                  label={userRole[getId].label1} labelStyle={styles.colors}
                  backgroundColor={colors.secondary}
                  style={getStyle(styles.messageSellerBtn, isTablet)} onTouchTap={action}
                />
                <RaisedButton
                  label={userRole[getId].label2} labelStyle={styles.colors}
                  backgroundColor={colors.secondary}
                  style={getStyle(styles.makeOfferBtn, isTablet)} onTouchTap={action}
                />
              </div>
          }
        </div>
      </div>;
    const getMobileHeaderImg = (
      <img style={styles.property} src={getSrc} alt="" />
    );
    const getMainHeader = (
      <div>
        <Responsive size="desktop">
          {getMainHeaderStyle(false)}
        </Responsive>
        <Responsive size="tablet">
          {getMainHeaderStyle(true)}
        </Responsive>
        <Responsive size="mobile">
          {getMobileHeaderImg}
        </Responsive>
      </div>
    );
    return (
      <div>
        {getMainHeader}
      </div>
    );
  }
}
export default MainHeader;
