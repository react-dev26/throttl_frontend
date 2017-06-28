import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import colors from 'styles/colors';
import styles from './styles';

function SignupBtnHeader({ action }) {
  return (
    <RaisedButton label="Login / SignUp" onTouchTap={action} backgroundColor={colors.secondary} labelStyle={styles.colors} style={styles.login} />
  );
}

SignupBtnHeader.propTypes = {
  action: PropTypes.func,
};
SignupBtnHeader.defaultProps = {
  action: null,
};
export default SignupBtnHeader;
