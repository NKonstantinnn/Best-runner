import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';

import { OptionProp } from '../prop-types';
import { Menu, IndicatorSeparator } from './styled/CustomSelect';

const CustomSelect = (props) => {
  const {
    label, options, input: { onChange, value }, ...other
  } = props;

  const handleSelectChange = (option) => {
    onChange(option.value);
  };
  const currentValue = options.find(option => option.value === value);

  return (
    <FormGroup>
      { label && <Label>{label}</Label> }
      <Select
        options={options}
        onChange={handleSelectChange}
        value={currentValue}
        components={{ Menu, IndicatorSeparator }}
        {...other}
      />
    </FormGroup>
  );
};

CustomSelect.propTypes = {
  input: PropTypes.shape({ onChange: PropTypes.func }).isRequired,
  options: PropTypes.arrayOf(OptionProp).isRequired,
  label: PropTypes.string,
  isSearchable: PropTypes.bool,
  isClearable: PropTypes.bool,
};

CustomSelect.defaultProps = {
  label: null,
  isSearchable: false,
  isClearable: false,
};

export default CustomSelect;
