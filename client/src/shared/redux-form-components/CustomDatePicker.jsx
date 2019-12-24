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
    () => {
      if (!value) setValue(new Date(), new Date());
    },
    [],
  );

  const handleApply = (event, picker) => {
    const {
      startDate: { _d: start },
      endDate: { _d: end },
    } = picker;
    setValue(start, end);
  };

  const formatValue = (pickerValue) => {
    if (singleDatePicker) {
      return moment(pickerValue).format(format);
    }

    const formatedStart = moment(pickerValue.start).format(format);
    const formatedEnd = moment(pickerValue.end).format(format);
    return `${formatedStart} - ${formatedEnd}`;
  };

  return (
    <FormGroup>
      { label && <Label>{label}</Label> }
      <DateRangePicker
        minDate={moment(minDate).format('MM-DD-YYY')}
        maxDate={moment(maxDate).format('MM-DD-YYY')}
        startDate={singleDatePicker ? value : value.start}
        endDate={singleDatePicker ? value.start : value.end}
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
  minDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
  maxDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  singleDatePicker: PropTypes.bool,
  format: PropTypes.string,
};

CustomDatePicker.defaultProps = {
  label: null,
  maxDate: new Date(),
  singleDatePicker: false,
  format: 'DD-MM-YYYY',
};

export default CustomDatePicker;
