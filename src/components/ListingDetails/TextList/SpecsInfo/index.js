import React, { PropTypes } from 'react';
import Select from 'react-select';
import Responsive from 'components/Responsive';
import { getStyle } from 'utils';
import Content from './Content';
import styles from './styles';

function SpecsInfo({ getEditState, getHorsePower, getWidth, getWheelbaseLength, getCoolingSystem,
  getFinalDrive, getEstimatedRange, getTankCapacity, getPowerNm, getPowerRpm, getStandingTime,
  getTopSpeed, getEngineSize, getEngineType }) {
  const content = [
    { id: 1, title: <p>Engine size:</p>, label: <p>{getEngineSize} cubic centimeters (cc)</p> },
    { id: 2, title: <p>Engine type:</p>, label: <p>{getEngineType}</p> },
    { id: 3, title: <p>Top speed:</p>, label: <p>{getTopSpeed} miles per hour</p> },
    { id: 4, title: <p>0-60 standing time:</p>, label: <p>{getStandingTime} seconds</p> },
    { id: 5,
      title: <p>Torque sweet spot:</p>,
      label: <p>Midrange at 6,500 rotations per minute (rpm)</p> },
    { id: 6,
      title: <p>Maximum torque:</p>,
      label: <p>{getPowerNm} Newton-Meters @ {getPowerRpm} rotations per minute (rpm)</p> },
    { id: 7, title: <p>Tank capacity:</p>, label: <p>{getTankCapacity}</p> },
    { id: 8, title: <p>Estimated range:</p>, label: <p>{getEstimatedRange} miles</p> },
    { id: 9, title: <p>Final drive:</p>, label: <p>{getFinalDrive}</p> },
    { id: 10, title: <p>Cooling system</p>, label: <p>{getCoolingSystem}</p> },
    { id: 11, title: <p>Wheelbase length</p>, label: <p>{getWheelbaseLength}</p> },
    { id: 12, title: <p>Width</p>, label: <p>{getWidth}</p> },
    { id: 13, title: <p>Horsepower</p>, label: <p>{getHorsePower}</p> },

  ];
  const getTextInfo = isMobile =>
    <div style={getStyle(styles.container, isMobile)}>
      <div style={styles.titleText}>
        Detailed specs
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
SpecsInfo.propTypes = {
  getEditState: PropTypes.bool,
  getEngineSize: PropTypes.number,
  getEngineType: PropTypes.string,
  getTopSpeed: PropTypes.number,
  getStandingTime: PropTypes.number,
  getPowerNm: PropTypes.number,
  getPowerRpm: PropTypes.number,
  getTankCapacity: PropTypes.number,
  getEstimatedRange: PropTypes.number,
  getFinalDrive: PropTypes.string,
  getCoolingSystem: PropTypes.string,
  getWheelbaseLength: PropTypes.number,
  getWidth: PropTypes.number,
  getHorsePower: PropTypes.number,
};
SpecsInfo.defaultProps = {
  getEditState: null,
  getEngineSize: null,
  getEngineType: null,
  getTopSpeed: null,
  getStandingTime: null,
  getPowerNm: null,
  getPowerRpm: null,
  getTankCapacity: null,
  getEstimatedRange: null,
  getFinalDrive: null,
  getCoolingSystem: null,
  getWheelbaseLength: null,
  getWidth: null,
  getHorsePower: null,
};
export default SpecsInfo;
