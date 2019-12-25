import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';

import { OptionProp } from '../prop-types';
import StyledComponents from './styled/CustomSelect';

const CustomSelect = (props) => {
  const {
    label, options, input, isMulti, components, ...other
  } = props;
  const { onChange, value } = input;

  const handleSelectChange = (selectedOption) => {
    if (isMulti) {
      const newValue = selectedOption.map(op => op.value);
      onChange(newValue);
    } else {
      onChange(selectedOption.value);
    }
  };

  // set initial value
  useEffect(
    () => { if (!value) handleSelectChange(isMulti ? [options[0]] : options[0]); },
    [],
  );

  const getCurrentValue = () => {
    if (isMulti) {
      return options.filter(op => value.includes(op.value));
    }
    return options.find(op => op.value === value);
  };

  return (
    <FormGroup>
      { label && <Label>{label}</Label> }
      <Select
        options={options}
        onChange={handleSelectChange}
        value={getCurrentValue()}
        isMulti={isMulti}
        components={{ ...StyledComponents, ...components }}
        {...other}
      />
    </FormGroup>
  );
};

CustomSelect.propTypes = {
  input: PropTypes.shape({ onChange: PropTypes.func }).isRequired,
  options: PropTypes.arrayOf(OptionProp).isRequired,
  isMulti: PropTypes.bool,
  label: PropTypes.string,
  isSearchable: PropTypes.bool,
  isClearable: PropTypes.bool,
  components: PropTypes.objectOf(PropTypes.func),
};

CustomSelect.defaultProps = {
  label: null,
  isSearchable: false,
  isClearable: false,
  components: {},
  isMulti: false,
};

export default CustomSelect;
