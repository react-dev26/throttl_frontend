import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Logo from 'components/Logo';
import Responsive from 'components/Responsive';
import { login } from 'components/Authentication';
import colors from 'styles/colors';
import { getStyle } from 'utils';
import CustomScrollBar from './CustomScrollBar';
import styles from './styles';


class NavMenu extends Component {
  static propTypes = {
    width: PropTypes.string,
  };
  static defaultProps = {
    width: '1023px',
  };
  constructor(props) {
    super(props);
    this.state = { open: false, width: props.width };
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  handleLogin = () => login();
  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });
  render() {
    const { width, open } = this.state;
    const getDrawerStyle = isMobile =>
      <Drawer
        docked={false}
        width={isMobile ? width : 300}
        open={open}
        containerStyle={getStyle(styles.container, true)}
        onRequestChange={isOpen => this.setState({ open: isOpen })}
      >
        <CustomScrollBar style={{ height: '100%' }}>
          <div>
            {
              isMobile ? <NavigationClose onTouchTap={this.handleClose} style={styles.cancel} />
              : <AppBar
                title={<div style={styles.logo}><Logo /></div>}
                titleStyle={styles.titleStyle}
                onTouchTap={this.handleToggle}
              />
            }
          </div>
          <RaisedButton label="Login / SignUp" onTouchTap={this.handleLogin} backgroundColor={colors.secondary} labelStyle={styles.colors} style={styles.login} />
          <Link to="/motorcycles-for-sale" style={styles.link}><MenuItem
            onTouchTap={this.handleClose} style={styles.menuStyle}
          >
            Motorcycles for sale
          </MenuItem></Link>
          <Link to="/sell-motorcycle" style={styles.link}><MenuItem
            onTouchTap={this.handleClose} style={styles.menuStyle}
          >
           Sell your motorcycle
          </MenuItem></Link>
          <Link to="/my-profile" style={styles.link}><MenuItem onTouchTap={this.handleClose} style={getStyle(styles.text, true)}>
            My Profile
          </MenuItem></Link>
          <Link to="my-messages" style={styles.link}><MenuItem onTouchTap={this.handleClose} style={styles.text} >
            My Messages
          </MenuItem></Link>
          <Link to="/my-motorcycles" style={styles.link}><MenuItem onTouchTap={this.handleClose} style={styles.text} >
            My Motorcycles
          </MenuItem></Link>
          <Link to="faq.throttl.com" style={styles.link}><MenuItem onTouchTap={this.handleClose} style={styles.text}>
            FAQ
          </MenuItem></Link>
          <Link to="blog.throttl.com" style={styles.link}><MenuItem onTouchTap={this.handleClose} style={styles.text}>
            Blog
          </MenuItem></Link>
          <div style={getStyle(styles.simpleText, true)}>
            Questions?
          </div>
          <div style={styles.simpleText}>
            Try us at
            <Link to="support@throttle.com" style={styles.supportLink}>support@throttle.com</Link>
          </div>
          <div style={styles.simpleText}>
            © 2017  Throttl, Inc.
          </div>
        </CustomScrollBar>
      </Drawer>;
    const getDrawer = (
      <div>
        <Responsive size="mobile+tablet">
          {getDrawerStyle(true)}
        </Responsive>
        <Responsive size="desktop">
          {getDrawerStyle(false)}
        </Responsive>
      </div>
    );
    return (
      <div >
        <NavigationMenu
          onTouchTap={this.handleToggle}
          style={styles.navBar}
        />
        {getDrawer}
      </div>
    );
  }
}
export default NavMenu;
