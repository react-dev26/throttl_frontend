import React, { PropTypes } from 'react';

import styles from './styles';

function Content({ title, label }) {
  return (
    <div style={styles.container}>
      <div style={styles.titleProperty}>
        {title}
      </div>
      <div style={styles.contentProperty}>
        {label}
      </div>
    </div>
  );
}
Content.propTypes = {
  title: PropTypes.node,
  label: PropTypes.node,
};
Content.defaultProps = {
  title: null,
  label: null,
};

export default Content;
