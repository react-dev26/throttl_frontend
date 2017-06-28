import React from 'react';

import ImgLogo from './logo.png';
import styles from './styles';

function Logo() {
  return (
    <img style={styles.property} src={ImgLogo} alt="Throttl" />
  );
}
export default Logo;
