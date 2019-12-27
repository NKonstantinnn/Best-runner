import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment, { Moment } from 'moment';

import DatePicker from '../components/CustomDatePicker';

const CustomDatePicker = (props) => {
  const {
    minDate, maxDate, singleDatePicker, input: { onChange, value }, ...other
  } = props;

  useEffect(
    () => {
      if (!value) {
        if (singleDatePicker) {
          onChange(moment());
        } else {
          onChange({ startDate: moment(), endDate: moment() });
        }
      }
    },
    [],
  );

  return (
    <DatePicker
      minDate={minDate}
      maxDate={maxDate}
      value={value}
      singleDatePicker={singleDatePicker}
      onApply={onChange}
      {...other}
    />
  );
};

CustomDatePicker.propTypes = {
  input: PropTypes.shape({ onChange: PropTypes.func }).isRequired,
  minDate: PropTypes.instanceOf(Moment),
  maxDate: PropTypes.instanceOf(Moment),
  singleDatePicker: PropTypes.bool,
};

CustomDatePicker.defaultProps = {
  maxDate: null,
  minDate: null,
  singleDatePicker: false,
};

export default CustomDatePicker;
