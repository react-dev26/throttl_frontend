import React, { PropTypes } from 'react';

import styles from './styles';

function Content({ label }) {
  return (
    <div style={styles.wrapper} >
      {label}
    </div>
  );
}
Content.propTypes = {
  label: PropTypes.node,
};
Content.defaultProps = {
  label: null,
  action: null,
};

export default Content;
