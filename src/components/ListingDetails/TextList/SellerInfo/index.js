import React, { PropTypes } from 'react';
import Select from 'react-select';
import { getStyle } from 'utils';
import Responsive from 'components/Responsive';
import Content from './Content';
import styles from './styles';

function SellerInfo({ getEditState }) {
  const content = [
    { id: 1,
      title: <p>Bob</p>,
      label: <p>missing</p> },
    { id: 2, title: <p>Favorite road:</p>, label: <p>missing</p> },
    { id: 3,
      title: <p>Reason for selling</p>,
      label: <p>missing</p> },
  ];
  const getTextInfo = isMobile =>
    <div style={getStyle(styles.container, isMobile)}>
      <div style={styles.titleText}>
        About the seller
      </div>
      <div style={getStyle(styles.textInfoStyle, isMobile)}>
        {
          getEditState ?
            <Select /> :
            <div style={styles.wrapper}>
              {
                content.map(item =>
                  <Content key={item.id} title={item.title} label={item.label} />,
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
SellerInfo.propTypes = {
  getEditState: PropTypes.bool,
};
SellerInfo.defaultProps = {
  getEditState: null,
};
export default SellerInfo;
