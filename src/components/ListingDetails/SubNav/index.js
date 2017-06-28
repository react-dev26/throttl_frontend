import React, { PropTypes, Component } from 'react';
import Waypoint from 'react-waypoint';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSave from 'material-ui/svg-icons/content/save';
import Responsive from 'components/Responsive';

import SubNavItem from './SubNavItem';
import { mobileDescriptionList, desktopDescriptionList } from './DescriptionList';
import styles from './styles';

const title = '2016 FZ-09';
const name = 'yamaha';
const price = '$6,500 USED';

class SubNav extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  };
  static defaultProps = {
    onClick: () => {},
  };
  constructor() {
    super();
    this.state = {
      addStyle: 0,
    };
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this);
  }
  handleWaypointEnter() {
    this.setState({
      addStyle: 0,
    });
  }
  handleWaypointLeave() {
    this.setState({
      addStyle: 1,
    });
  }

  render() {
    const getSubMenuD = (
      <div style={styles.container}>
        {
          desktopDescriptionList.map(item =>
            <SubNavItem key={item.id} label={item.label} action={item.action} />,

          )
        }
      </div>
    );
    const getSubMenuM = (
      <div>
        <div style={styles.container}>
          {
            mobileDescriptionList.map(item =>
              <SubNavItem key={item.id} label={item.label} action={item.action} />,

            )
          }
        </div>
        <div style={styles.wrapper}>
          <div style={styles.title}>
            <span>{title}</span>
          </div>
          <div style={styles.colors}>
            <span>{name}</span>
            <span style={styles.widget}>{price}</span>
          </div>
        </div>
      </div>
    );
    const galleryMenuList = (
      <div style={this.state.addStyle === 1 ? styles.addStyle : {}}>
        <Responsive size="mobile">
          {getSubMenuM}
        </Responsive>
        <Responsive size="tablet+desktop">
          {getSubMenuD}
        </Responsive>
        <FloatingActionButton
          style={this.state.addStyle === 1 ? styles.lowerRightBtn : styles.hiddenBtn}
          onTouchTap={this.props.onClick}
        >
          <ContentSave />
        </FloatingActionButton>
      </div>
    );
    return (
      <div>
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        />
        {galleryMenuList}
      </div>
    );
  }
}
export default SubNav;
