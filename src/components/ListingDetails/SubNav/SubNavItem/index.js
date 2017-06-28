import React, { PropTypes, Component } from 'react';
import Radium from 'radium';

import styles from './styles';

@Radium
class SubNavItem extends Component {
  static propTypes = {
    label: PropTypes.node,
  };
  static defaultProps = {
    label: null,
  };

  render() {
    const { label } = this.props;
    return (
      <div style={styles.wrapper} >
        {label}
      </div>
    );
  }
}

export default SubNavItem;
