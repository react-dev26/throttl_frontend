import React, { PropTypes } from 'react';

// import styles from './styles';

function Info({ label }) {
  return (
    <div>
      {label}
    </div>
  );
}
Info.propTypes = {
  label: PropTypes.node,
};
Info.defaultProps = {
  label: null,
};

export default Info;
