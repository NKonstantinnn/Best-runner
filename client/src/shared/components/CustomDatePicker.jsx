import React from 'react';
import PropTypes from 'prop-types';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { Moment } from 'moment';

import InputWrapper from './styled/CustomDatePicker';
import { CalendarMonthIcon } from '../styled/icons';
import { RangeDatePickerValue } from '../prop-types';

const renderInput = value => (
  <InputWrapper>
    <CalendarMonthIcon />
    {value}
  </InputWrapper>
);

const CustomDatePicker = (props) => {
  const {
    minDate, maxDate, singleDatePicker, format, onApply, value, ...other
  } = props;

  const handleApply = (event, picker) => {
    const { startDate, endDate } = picker;
    if (singleDatePicker) {
      onApply(startDate);
    } else {
      onApply({ startDate, endDate });
    }
  };

  const formatValue = (pickerValue) => {
    if (!pickerValue) return 'Invalid Date';

    if (singleDatePicker) {
      return pickerValue.format(format);
    }

    const formatedStart = pickerValue.startDate.format(format);
    const formatedEnd = pickerValue.endDate.format(format);
    return `${formatedStart} - ${formatedEnd}`;
  };

  return (
    <DateRangePicker
      minDate={minDate}
      maxDate={maxDate}
      startDate={singleDatePicker ? value : value.startDate}
      endDate={singleDatePicker ? value : value.endDate}
      singleDatePicker={singleDatePicker}
      onApply={handleApply}
      locale={{ format }}
      {...other}
    >
      { renderInput(formatValue(value)) }
    </DateRangePicker>
  );
};

CustomDatePicker.propTypes = {
  minDate: PropTypes.instanceOf(Moment),
  maxDate: PropTypes.instanceOf(Moment),
  singleDatePicker: PropTypes.bool,
  format: PropTypes.string,
  onApply: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([RangeDatePickerValue, PropTypes.instanceOf(Moment)]).isRequired,
};

CustomDatePicker.defaultProps = {
  maxDate: null,
  minDate: null,
  singleDatePicker: false,
  format: 'DD-MM-YYYY',
};

export default CustomDatePicker;
