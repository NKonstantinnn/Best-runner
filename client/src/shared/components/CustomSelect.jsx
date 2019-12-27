import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { OptionProp } from '../prop-types';
import StyledComponents from './styled/CustomSelect';

const CustomSelect = (props) => {
  const {
    options, isMulti, components, value, onChange, ...other
  } = props;

  const handleSelectChange = (selectedOption) => {
    if (isMulti) {
      const newValue = selectedOption.map(op => op.value);
      onChange(newValue);
    } else {
      onChange(selectedOption.value);
    }
  };

  const getCurrentValue = () => {
    if (isMulti) {
      return options.filter(op => value.includes(op.value));
    }
    return options.find(op => op.value === value);
  };

  return (
    <Select
      options={options}
      onChange={handleSelectChange}
      value={getCurrentValue()}
      isMulti={isMulti}
      components={{ ...StyledComponents, ...components }}
      {...other}
    />
  );
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(OptionProp).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  onChange: PropTypes.func.isRequired,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isClearable: PropTypes.bool,
  components: PropTypes.objectOf(PropTypes.func),
};

CustomSelect.defaultProps = {
  isSearchable: false,
  isClearable: false,
  components: {},
  isMulti: false,
};

export default CustomSelect;
