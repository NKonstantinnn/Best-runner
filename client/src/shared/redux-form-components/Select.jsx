import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Select from '../components/CustomSelect';
import { OptionProp } from '../prop-types';

const CustomSelect = (props) => {
  const {
    options, input: { onChange, value }, isMulti, ...other
  } = props;

  // set initial value
  useEffect(
    () => { if (!value) onChange(isMulti ? options.map(op => op.value) : options[0].value); },
    [],
  );

  return (
    <Select
      options={options}
      onChange={onChange}
      value={value}
      isMulti={isMulti}
      {...other}
    />
  );
};

CustomSelect.propTypes = {
  input: PropTypes.shape({ onChange: PropTypes.func }).isRequired,
  options: PropTypes.arrayOf(OptionProp).isRequired,
  isMulti: PropTypes.bool,
};

CustomSelect.defaultProps = {
  isMulti: false,
};

export default CustomSelect;
