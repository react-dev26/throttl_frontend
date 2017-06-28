import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Dropzone from 'react-dropzone';
import RaisedButton from 'material-ui/RaisedButton';
import request from 'superagent';
import { loadListing, handleEditState, handleSaveState } from 'reducers/listings/actions';
import { currentListingSelector, currentEditStateSelector } from 'reducers/listings/selectors';
import { loadSpecification } from 'reducers/specifications/actions';
import { currentSpecificationSelector } from 'reducers/specifications/selectors';
// import { loadUsers } from 'reducers/users/actions';
// import { usersInfoSelector } from 'reducers/users/selectors';
import MainHeader from 'components/ListingDetails/MainHeader';
import Gallery from 'components/ListingDetails/Gallery';
import SubNav from 'components/ListingDetails/SubNav';
import TextList from 'components/ListingDetails/TextList';
import colors from 'styles/colors';
import styles from './styles';

const CLOUDINARY_UPLOAD_PRESET = 'esu2odq3';
const CLOUDINARY_UPLOAD_URL = ' https://api.cloudinary.com/v1_1/hvvy4ktte/image/upload';
const mapStateToProps = state => ({
  currentListing: currentListingSelector(state),
  currentSpecification: currentSpecificationSelector(state),
  currentEditState: currentEditStateSelector(state),
  // users: usersInfoSelector(state),
});

const mapDispatchToProps = dispatch => ({
  loadListing: listingId => dispatch(loadListing(listingId)),
  loadSpecification: specificationId => dispatch(loadSpecification(specificationId)),
  handleEditState: () => dispatch(handleEditState()),
  handleSaveState: () => dispatch(handleSaveState()),

  // loadSpecification: () => dispatch(loadSpecification()),
  // loadUsers: () => dispatch(loadUsers()),
});
class DetailPage extends Component {

  static propTypes = {
    currentListing: ImmutablePropTypes.map,
    currentSpecification: ImmutablePropTypes.map,
    loadListing: PropTypes.func,
    match: PropTypes.shape({
      params: PropTypes.shape({
        listingId: PropTypes.string,
      }),
    }),
    loadSpecification: PropTypes.func,
    currentEditState: PropTypes.bool,
    handleEditState: PropTypes.func,
    handleSaveState: PropTypes.func,
    // loadUsers: PropTypes.func,
  };

  static defaultProps = {
    currentListing: null,
    currentSpecification: null,
    loadListing: () => {},
    loadSpecification: () => {},
    // loadUsers: () => {},
    match: {
      params: {
        listingId: null,
      },
    },
    currentEditState: null,
    handleEditState: () => {},
    handleSaveState: () => {},
  };
  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: '',
    };
    this.onImageDrop = this.onImageDrop.bind(this);
  }
  componentDidMount() {
    this.props.loadListing(this.props.match.params.listingId);
    this.props.loadSpecification(this.props.match.params.listingId);
    // this.props.loadUsers();
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
    const { currentListing, currentSpecification, currentEditState } = this.props;
    const length = currentListing.get('gallery_image_urls') && currentListing.get('gallery_image_urls').count();
    const getGalleryUrl = [];
    for (let i = 0; i < length; i += 1) {
      getGalleryUrl[i] = `${currentListing.getIn(['gallery_image_urls', (i)])}`;
    }
    return (
      <div>
        <MainHeader getId="realUserRole" getSrc={currentListing.get('hero_image_url')} getEditState={currentEditState} onClick={this.props.handleEditState} />
        <SubNav onClick={this.props.handleSaveState} />
        <Gallery getGalleryUrl={getGalleryUrl} />
        {
          currentEditState ?
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
            </Dropzone> : null
        }
        <TextList
          getEditState={currentEditState}
          getCurrentListing={currentListing}
          getCurrentSpecification={currentSpecification}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
