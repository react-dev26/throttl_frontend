import React, { PropTypes } from 'react';
import Responsive from 'components/Responsive';
import { print, getStyle } from 'utils';
import { login } from 'components/Authentication';
import SignUp from './SignupBtnFooter';
import ActionItem from './ActionItem';
import styles from './styles';

const items = [
  { id: 1, label: <span>Browse<br /><center> Bikes</center></span>, action: () => { print('Browse Bikes Clicked'); } },
  { id: 2, label: <span>Sell Your<br /><center> Bike</center></span>, action: () => { print('Sell Your Bike Clicked'); } },
  { id: 3, label: <span>become a<br /><center> shipper</center></span>, action: () => { print('How IT Works Clicked'); } },
];
function auth() {
  return (
    login()
  );
}
function Footer({ action }) {
  const getFooter = isMobile =>
    <div style={styles.wrapper}>
      <div style={getStyle(styles.container, isMobile)}>
        <div>
          <span style={getStyle(styles.formTitle, isMobile)}>
            Can’t find what you’re looking for?
          </span>
          <div>
            <p style={getStyle(styles.formContent, isMobile)}>
              Let us know what you need, and we’ll help you find it.
            </p>
            <form style={getStyle(styles.formCustomize, isMobile)}>
              <input type="text" placeholder="Describe the bike you’d like" style={getStyle(styles.typeText, isMobile)} />
              <input type="email" placeholder="What’s your email?" style={getStyle(styles.typeEmail, isMobile)} />
              <div style={getStyle(styles.btn, isMobile)} onTouchTap={action}>
                Let us help
              </div>
            </form>
          </div>
        </div>
      </div>
      <div style={styles.bottomStyle}>
        <div style={styles.itemStyle}>
          {
            items.map(item =>
              <ActionItem key={item.id} label={item.label} action={item.action} />,
            )
          }
        </div>
        <div style={getStyle(styles.borderline, isMobile)} />
        <div style={getStyle(styles.textline, isMobile)}>
          Throttl was conceived to solve the frustration of researching, buying,
           and selling motorcycles.
        </div>
        <SignUp style={styles.customSingUp} action={() => { auth(); }} />
        <div style={styles.emailbox}>
          <center><p>hello@throttl.com<br />Copyright © 2016  Throttl, Inc.</p></center>
        </div>
      </div>
    </div>;
  const footer = (
    <div>
      <Responsive size="mobile">
        {getFooter(true)}
      </Responsive>
      <Responsive size="tablet+desktop">
        {getFooter(false)}
      </Responsive>
    </div>
  );
  return (
    <div>
      {footer}
    </div>
  );
}
Footer.propTypes = {
  action: PropTypes.func,
};
Footer.defaultProps = {
  action: null,
};
export default Footer;
