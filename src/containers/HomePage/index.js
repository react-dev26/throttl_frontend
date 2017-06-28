import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { loadListings } from 'reducers/listings/actions';
import { listingsInfoSelector } from 'reducers/listings/selectors';
import { loadSpecifications } from 'reducers/specifications/actions';
import { specificationsInfoSelector } from 'reducers/specifications/selectors';
import { getStyle } from 'utils';
import Responsive from 'components/Responsive';
import SimpleHelmet from 'components/SimpleHelmet';
import styles from './styles';

const mapStateToProps = state => ({
  listings: listingsInfoSelector(state),
  specifications: specificationsInfoSelector(state),
});

const mapDispatchToProps = dispatch => ({
  loadListings: () => dispatch(loadListings()),
  loadSpecifications: () => dispatch(loadSpecifications()),
});

export class HomePage extends Component {
  static propTypes = {
    listings: ImmutablePropTypes.list,
    specifications: ImmutablePropTypes.list,
    loadListings: PropTypes.func,
    loadSpecifications: PropTypes.func,
  };
  static defaultProps = {
    listings: Map(),
    specifications: Map(),
    loadListings: () => {},
    loadSpecifications: () => {},
  };

  componentDidMount() {
    this.props.loadListings();
    this.props.loadSpecifications();
  }

  render() {
    const { listings, specifications } = this.props;
    console.log('specifications', specifications);
    const getImageStyle = (isTablet, isMobile) =>
      <div>
        {
          listings.map(listing =>
            <div style={isMobile ? styles.mobileContainer : getStyle(styles.container, isTablet)} key={listing.get('id')}>
              <Link to={`/motorcycles-for-sale/${listing.get('id')}`}><img src={listing.get('hero_image_url')} style={styles.img} alt="" /></Link>
            </div>,
          )
        }
      </div>;
    const getListings = (
      <div>
        <Responsive size="tablet">
          {getImageStyle(true, false)}
        </Responsive>
        <Responsive size="desktop">
          {getImageStyle(false, false)}
        </Responsive>
        <Responsive size="mobile">
          {getImageStyle(false, true)}
        </Responsive>
      </div>
    );
    return (
      <div style={styles.wrapper}>
        <SimpleHelmet id="homePage" />
        {getListings}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
