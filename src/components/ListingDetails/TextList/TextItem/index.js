import React, { PropTypes } from 'react';

import styles from './styles';

function TextItem({ label }) {
  return (
    <div style={styles.wrapper} >
      {label}
    </div>
  );
}
TextItem.propTypes = {
  label: PropTypes.node,
};
TextItem.defaultProps = {
  label: null,
  action: null,
};

export default TextItem;
