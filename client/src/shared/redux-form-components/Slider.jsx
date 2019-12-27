import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Slider from '../components/CustomSlider';
import { SliderWrapper, SliderInput } from './styled/Slider';


const CustomSlider = (props) => {
  const {
    input: { onChange, value },
    min, max, step, ...other
  } = props;

  useEffect(
    () => { if (!value) onChange(min); },
    [],
  );

  const handleChangeValue = (e) => {
    if (typeof e === 'number') {
      onChange(e);
    } else if (e.target && !Number.isNaN(parseFloat(e.target.value))) {
      const numValue = parseFloat(e.target.value);
      onChange(numValue > max ? max : numValue);
    } else {
      onChange(0);
    }
  };

  return (
    <SliderWrapper>
      <Slider
        onChange={handleChangeValue}
        value={value}
        min={min}
        max={max}
        step={step}
        {...other}
      />
      <SliderInput type="number" onChange={handleChangeValue} min={min} max={max} step={step} value={value} />
    </SliderWrapper>
  );
};

CustomSlider.propTypes = {
  input: PropTypes.shape({ onChange: PropTypes.func }).isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

CustomSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
};

export default CustomSlider;
