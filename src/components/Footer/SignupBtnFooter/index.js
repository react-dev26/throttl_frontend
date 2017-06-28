import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import colors from 'styles/colors';
import styles from './styles';

function SignupBtnFooter({ action }) {
  return (
    <RaisedButton label="Login / SignUp" onTouchTap={action} backgroundColor={colors.secondary} labelStyle={styles.colors} style={styles.login} />
  );
}

SignupBtnFooter.propTypes = {
  action: PropTypes.func,
};
SignupBtnFooter.defaultProps = {
  action: null,
};
export default SignupBtnFooter;
