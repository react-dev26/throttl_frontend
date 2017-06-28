import React, { PropTypes } from 'react';
import Select from 'react-select';
import { getStyle } from 'utils';
import Responsive from 'components/Responsive';
import Content from './Content';
import styles from './styles';

function MaintenanceInfo({ getEditState }) {
  const items = [
    { id: 1, label: <p>-New Tires<br /></p> },
    { id: 2, label: <p>-Oil change<br /></p> },
    { id: 3, label: <p>-New brake fluid<br /></p> },
    { id: 4, label: <p>-New fairings<br /></p> },
  ];
  const getTextInfo = isMobile =>
    <div style={getStyle(styles.container, isMobile)}>
      <div style={styles.titleText}>
        Recent Maintenance
      </div>
      <div style={getStyle(styles.textInfoStyle, isMobile)}>
        {
          getEditState ?
            <Select /> :
            <div>
              {
                items.map(item =>
                  <Content key={item.id} label={item.label} />,
                )
              }
            </div>
        }
      </div>
    </div>;
  const textInfo = (
    <div>
      <Responsive size="mobile">
        {getTextInfo(true)}
      </Responsive>
      <Responsive size="tablet+desktop">
        {getTextInfo(false)}
      </Responsive>
    </div>
  );
  return (
    <div>
      {textInfo}
    </div>
  );
}
MaintenanceInfo.propTypes = {
  getEditState: PropTypes.bool,
};
MaintenanceInfo.defaultProps = {
  getEditState: null,
};
export default MaintenanceInfo;
