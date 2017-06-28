import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Responsive from 'components/Responsive';
import colors from 'styles/colors';
import { getStyle } from 'utils';
import styles from './styles';

function UserRole({ getEditState, id, action, onClick }) {
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
  let getBtnStyle;
  if (id === null) {
    getBtnStyle = isTablet =>
      <div style={styles.wrapper}>
        <RaisedButton
          label={userRole[id].label1} labelStyle={styles.colors}
          backgroundColor={colors.secondary}
          style={getStyle(styles.messageSellerBtn, isTablet)} onTouchTap={action}
        />
        <RaisedButton
          label={userRole[id].label2} labelStyle={styles.colors}
          backgroundColor={colors.secondary}
          style={getStyle(styles.makeOfferBtn, isTablet)} onTouchTap={action}
        />
      </div>;
  }
  if (id === 'realUserRole') {
    getBtnStyle = isTablet =>
      <div>
        {getEditState ?
          <div style={styles.upgradeWrapper}>
            <RaisedButton
              label={userRole[id].label1} labelStyle={styles.colors}
              backgroundColor={colors.secondary} primary
              style={getStyle(styles.changeMainPhoto, isTablet)} onTouchTap={onClick}
            />
            <RaisedButton
              label={userRole[id].label2} labelStyle={styles.colors}
              backgroundColor={colors.secondary} primary
              style={getStyle(styles.listingBtn, isTablet)} onTouchTap={onClick}
            />
            <RaisedButton
              label={userRole[id].label3} labelStyle={styles.colors}
              backgroundColor={colors.secondary}
              style={getStyle(styles.listingBtn, isTablet)} onTouchTap={onClick}
            />
          </div> :
          <RaisedButton
            label={userRole[id].label} labelStyle={styles.colors}
            backgroundColor={colors.secondary}
            style={getStyle(styles.editListingBtn, isTablet)} onTouchTap={onClick}
          />
        }
      </div>;
  }
  const getBtn = (
    <div>
      <Responsive size="desktop">
        {getBtnStyle(false)}
      </Responsive>
      <Responsive size="tablet">
        {getBtnStyle(true)}
      </Responsive>
    </div>
  );
  return getBtn;
}
UserRole.propTypes = {
  id: PropTypes.string,
  action: PropTypes.func,
  onClick: PropTypes.func,
  getEditState: PropTypes.bool,
};
UserRole.defaultProps = {
  id: null,
  action: null,
  onClick: () => {},
  getEditState: null,
};
export default UserRole;
