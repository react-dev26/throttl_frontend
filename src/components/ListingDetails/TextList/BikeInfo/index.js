import React, { PropTypes } from 'react';
import Select from 'react-select';
import ImmutablePropTypes from 'react-immutable-proptypes';

// import fetch from 'isomorphic-fetch';
import { getStyle } from 'utils';
import Responsive from 'components/Responsive';
import Property from './Property';
import Content from './Content';
import styles from './styles';

function BikeInfo({ getEditState, getStartingSystem, getSeller, getOdometer,
  getPrice, getModelName, getName, getYear, getArrays,
  getSeatHeight, getRideRangeStart, getRideRangeEnd }) {
  const items = [
    { id: 1,
      label: <p>{getYear}&nbsp;{getName}&nbsp;{getModelName}</p> },
    { id: 2,
      label: <p>${getPrice}</p> },
    { id: 3,
      label: <p>{getOdometer} Miles</p> },
    { id: 4, label: <p>{getArrays.getIn(['motorcycle_types', (0)])}, {getArrays.getIn(['motorcycle_types', (1)])}, {getArrays.getIn(['motorcycle_types', (2)])}</p> },
  ];
  const content = [
    { id: 1, title: <p>Condition:</p>, label: <p>{getArrays.getIn(['conditions', (0)])}, {getArrays.getIn(['conditions', (1)])}, {getArrays.getIn(['conditions', (2)])}</p> },
    { id: 2, title: <p>Seller:</p>, label: <p>{getSeller}</p> },
    { id: 3, title: <p>Great for:</p>, label: <p>missing</p> },
    { id: 4, title: <p>Good for beginners?</p>, label: <p>missing</p> },
    { id: 5,
      title: <p>Ideal rider height</p>,
      label: <p>With a seat height of {getSeatHeight} inches, this bike will most likely fit riders
       above {getRideRangeEnd} foot {getRideRangeStart} inches tall</p> },
    { id: 6, title: <p>Is this bike heavy</p>, label: <p>missing</p> },
    { id: 7, title: <p>How does it start?</p>, label: <p>{getStartingSystem}</p> },
  ];
  const getInfo = isMobile =>
    <div style={getStyle(styles.container, isMobile)}>
      <div style={styles.titleText}>
        About this bike
      </div>
      <div style={getStyle(styles.textInfoStyle, isMobile)}>
        {
          getEditState ?
            <Select /> :
            <div>
              {
                items.map(item =>
                  <Property key={item.id} label={item.label} />,
                )
              }
            </div>
        }
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
        {getInfo(true)}
      </Responsive>
      <Responsive size="tablet+desktop">
        {getInfo(false)}
      </Responsive>
    </div>
  );
  return (
    <div style={styles.containers}>
      {textInfo}
    </div>
  );
}
BikeInfo.propTypes = {
  getEditState: PropTypes.bool,
  getYear: PropTypes.number,
  getName: PropTypes.string,
  getModelName: PropTypes.string,
  getPrice: PropTypes.number,
  getOdometer: PropTypes.number,
  getArrays: ImmutablePropTypes.map,
  getSeller: PropTypes.string,
  getStartingSystem: PropTypes.string,
  getSeatHeight: PropTypes.number,
  getRideRangeEnd: PropTypes.number,
  getRideRangeStart: PropTypes.number,
};
BikeInfo.defaultProps = {
  getEditState: null,
  getRideRangeStart: null,
  getRideRangeEnd: null,
  getSeatHeight: null,
  getYear: null,
  getName: null,
  getModelName: null,
  getPrice: null,
  getOdometer: null,
  getArrays: null,
  getSeller: null,
  getStartingSystem: null,
};
export default BikeInfo;
