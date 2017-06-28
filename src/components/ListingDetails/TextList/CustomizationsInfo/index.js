import React, { PropTypes } from 'react';
import Select from 'react-select';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { getStyle } from 'utils';
import Responsive from 'components/Responsive';
import Content from './Content';
import styles from './styles';

function CustomizationsInfo({ getEditState, getCustomizations }) {
  const items = [
    { id: 1, label: <p>-{getCustomizations.getIn(['customizations', (0)])}<br /></p> },
    { id: 2, label: <p>-{getCustomizations.getIn(['customizations', (1)])}<br /></p> },
  ];
  const getTextInfo = isMobile =>
    <div style={getStyle(styles.container, isMobile)}>
      <div style={styles.titleText}>
        Customizations
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
CustomizationsInfo.propTypes = {
  getEditState: PropTypes.bool,
  getCustomizations: ImmutablePropTypes.map,
};
CustomizationsInfo.defaultProps = {
  getEditState: null,
  getCustomizations: null,
};
export default CustomizationsInfo;
