import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Logo from 'components/Logo';
import Responsive from 'components/Responsive';
import NavMenu from './ActionList/NavigationMenu';
import ActionList from './ActionList';
import styles from './styles';

function TopBar() {
  const logo = (
    <div style={styles.logo}>
      <Logo />
    </div>
  );

  const rightIcon = (
    <div style={styles.menuStyle}>
      <Responsive size="desktop">
        <ActionList />
      </Responsive>
    </div>
  );
  return (
    <AppBar
      title={logo}
      iconElementLeft={<NavMenu />}
      iconElementRight={rightIcon}
      iconStyleRight={styles.rightIcon}
      titleStyle={styles.titleStyle}
    />
  );
}

TopBar.propTypes = {
  backUrl: PropTypes.string,
};
TopBar.defaultProps = {
  backUrl: null,
};
export default TopBar;
