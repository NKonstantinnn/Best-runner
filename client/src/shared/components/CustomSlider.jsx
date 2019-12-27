import React from 'react';
import PropTypes from 'prop-types';

import StyledSlider, { StyledTrack, StyledThumb } from './styled/CustomSlider';

const Thumb = props => <StyledThumb {...props} />;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const CustomSlider = (props) => {
  const {
    value, min, max, step, onChange, ...other
  } = props;


  return (
    <StyledSlider
      renderTrack={Track}
      renderThumb={Thumb}
      onChange={onChange}
      value={value}
      min={min}
      max={max}
      step={step}
      {...other}
    />
  );
};

CustomSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

CustomSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
};

export default CustomSlider;
