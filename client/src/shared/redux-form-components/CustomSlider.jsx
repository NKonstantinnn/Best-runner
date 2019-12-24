import React, { useEffect } from 'react';
import { FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import StyledSlider, { StyledTrack, StyledThumb, SliderWrapper, SliderInput } from './styled/CustomSlider';

const Thumb = props => <StyledThumb {...props} />;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const CustomSlider = (props) => {
  const {
    label, input: { onChange, value },
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
    <FormGroup>
      { label && <Label>{label}</Label> }
      <SliderWrapper>
        <StyledSlider
          renderTrack={Track}
          renderThumb={Thumb}
          onChange={handleChangeValue}
          value={value}
          min={min}
          max={max}
          step={step}
          {...other}
        />
        <SliderInput type="number" onChange={handleChangeValue} min={min} max={max} step={step} value={value} />
      </SliderWrapper>
    </FormGroup>
  );
};

CustomSlider.propTypes = {
  input: PropTypes.shape({ onChange: PropTypes.func }).isRequired,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

CustomSlider.defaultProps = {
  label: null,
  min: 0,
  max: 100,
  step: 1,
};

export default CustomSlider;
