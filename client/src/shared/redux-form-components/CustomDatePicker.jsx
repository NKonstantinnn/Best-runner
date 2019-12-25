import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { FormGroup, Label } from 'reactstrap';
import moment from 'moment';

import InputWrapper from './styled/CustomDatePicker';
import { CalendarMonthIcon } from '../styled/icons';

const renderInput = value => (
  <InputWrapper>
    <CalendarMonthIcon />
    {value}
  </InputWrapper>
);

const CustomDatePicker = (props) => {
  const {
    label, minDate, maxDate, singleDatePicker, format, input: { onChange, value }, ...other
  } = props;

  const setValue = (start, end) => {
    if (singleDatePicker) {
      onChange(start);
    } else {
      onChange({ start, end });
    }
  };

  useEffect(
    () => { if (!value) setValue(new Date(), new Date()); },
    [],
  );

  const normDate = (date, formatDate = 'MM-DD-YYYY') => moment(date).format(formatDate);

  const handleApply = (event, picker) => {
    const {
      startDate: { _d: start },
      endDate: { _d: end },
    } = picker;
    setValue(start, end);
  };

  const formatValue = (pickerValue) => {
    if (singleDatePicker) {
      return normDate(pickerValue, format);
    }

    const formatedStart = normDate(pickerValue.start, format);
    const formatedEnd = normDate(pickerValue.end, format);
    return `${formatedStart} - ${formatedEnd}`;
  };

  return (
    <FormGroup>
      { label && <Label>{label}</Label> }
      <DateRangePicker
        minDate={minDate && normDate(minDate)}
        maxDate={maxDate && normDate(maxDate)}
        startDate={singleDatePicker ? normDate(value) : normDate(value.start)}
        endDate={singleDatePicker ? normDate(value.start) : normDate(value.end)}
        singleDatePicker={singleDatePicker}
        onApply={handleApply}
        containerStyles={{ width: '100%', display: 'block' }}
        {...other}
      >
        { renderInput(formatValue(value)) }
      </DateRangePicker>
    </FormGroup>
  );
};

CustomDatePicker.propTypes = {
  input: PropTypes.shape({ onChange: PropTypes.func }).isRequired,
  label: PropTypes.string,
  minDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  maxDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  singleDatePicker: PropTypes.bool,
  format: PropTypes.string,
};

CustomDatePicker.defaultProps = {
  label: null,
  maxDate: null,
  minDate: null,
  singleDatePicker: false,
  format: 'DD-MM-YYYY',
};

export default CustomDatePicker;
