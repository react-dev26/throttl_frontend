import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import BikeInfo from './BikeInfo';
import MaintenanceInfo from './MaintenanceInfo';
import SellerInfo from './SellerInfo';
import SpecsInfo from './SpecsInfo';
import TextItem from './TextItem';
import CustomizationsInfo from './CustomizationsInfo';
import styles from './styles';


function TextList({ getCurrentListing, getCurrentSpecification, getEditState }) {
  const title = [
    { id: 1,
      label: <BikeInfo
        getEditState={getEditState}
        getYear={getCurrentSpecification.getIn(['model', 'year'])}
        getName={getCurrentSpecification.getIn(['make', 'name'])}
        getModelName={getCurrentSpecification.getIn(['model', 'name'])}
        getPrice={getCurrentListing.get('price')}
        getOdometer={getCurrentListing.get('odometer_reading')}
        getArrays={getCurrentListing}
        getSeller={getCurrentListing.getIn(['seller', 'name'])}
        getSeatHeight={getCurrentSpecification.get('seat_height')}
        getRideRangeEnd={getCurrentSpecification.getIn(['ride_height_range', 'height_range_end'])}
        getRideRangeStart={getCurrentSpecification.getIn(['ride_height_range', 'height_range_start'])}
        getStartingSystem={getCurrentSpecification.getIn(['starting_system', 'name'])}
      /> },
    { id: 2,
      label: <MaintenanceInfo
        getEditState={getEditState}
      /> },
    { id: 3,
      label: <CustomizationsInfo
        getEditState={getEditState}
        getCustomizations={getCurrentListing}
      /> },
    { id: 4,
      label: <SellerInfo
        getEditState={getEditState}
      /> },
    { id: 5,
      label: <SpecsInfo
        getEditState={getEditState}
        getEngineSize={getCurrentSpecification.getIn(['engine', 'engine_size_cc'])}
        getEngineType={getCurrentSpecification.getIn(['engine', 'engine_type'])}
        getTopSpeed={getCurrentSpecification.get('top_speed')}
        getStandingTime={getCurrentSpecification.get('zero_to_sixty_time')}
        getPowerNm={getCurrentSpecification.getIn(['engine', 'max_power_nm'])}
        getPowerRpm={getCurrentSpecification.getIn(['engine', 'max_power_rpm'])}
        getTankCapacity={getCurrentSpecification.get('fuel_tank_capacity')}
        getEstimatedRange={getCurrentSpecification.get('estimated_range')}
        getFinalDrive={getCurrentSpecification.getIn(['final_drive', 'name'])}
        getCoolingSystem={getCurrentSpecification.getIn(['cooling_system', 'name'])}
        getWheelbaseLength={getCurrentSpecification.get('dimensions_wheelbase_length')}
        getWidth={getCurrentSpecification.get('dimensions_width')}
        getHorsePower={getCurrentSpecification.getIn(['engine', 'horsepower'])}
      /> },
  ];
  return (
    <div>
      {
        title.map(item =>
          <TextItem key={item.id} label={item.label} style={styles.container} />,
        )
      }
    </div>
  );
}
TextList.propTypes = {
  getCurrentListing: ImmutablePropTypes.map,
  getCurrentSpecification: ImmutablePropTypes.map,
  getEditState: PropTypes.bool,
};
TextList.defaultProps = {
  getCurrentListing: null,
  getCurrentSpecification: null,
  getEditState: null,
};
export default TextList;
