import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';

import ActivityOptions from '../../../shared/select-options/Activity';
import SortTrainingOptions from '../../../shared/select-options/SortTraining';
import { CalendarMonthIcon } from '../../../shared/styled/icons';
import SlyledFilterPanel, {
  Option,
  SingleValue,
  Menu,
  IndicatorSeparator,
  DatePickerInput,
} from './styled/FilterPanel';

const FilterPanel = (props) => {
  const {
    minDate, dateRange, handleActivitiesSelect, handleDateRangeApply, handleSortBySelect,
  } = props;

  return (
    <SlyledFilterPanel>
      <Select
        options={ActivityOptions}
        defaultValue={ActivityOptions}
        isMulti
        isSearchable={false}
        isClearable={false}
        onChange={handleActivitiesSelect}
        components={{ Menu, IndicatorSeparator }}
      />
      <DateRangePicker
        minDate={moment(minDate)}
        maxDate={moment(new Date())}
        startDate={moment(dateRange.start)}
        endDate={moment(dateRange.end)}
        locale={{ format: 'DD-MM-YYYY' }}
        cancelClass="btn btn-outline-primary"
        applyClass="btn btn-primary"
        onApply={handleDateRangeApply}
      >
        <DatePickerInput>
          <CalendarMonthIcon />
          {`${moment(dateRange.start).format('DD-MM-YYYY')} - ${moment(dateRange.end).format('DD-MM-YYYY')}`}
        </DatePickerInput>
      </DateRangePicker>
      <Select
        options={SortTrainingOptions}
        defaultValue={SortTrainingOptions[0]}
        isSearchable={false}
        isClearable={false}
        onChange={handleSortBySelect}
        components={{
          Menu, IndicatorSeparator, Option, SingleValue,
        }}
      />
    </SlyledFilterPanel>
  );
};

FilterPanel.propTypes = {
  minDate: PropTypes.instanceOf(Date),
  handleActivitiesSelect: PropTypes.func.isRequired,
  handleDateRangeApply: PropTypes.func.isRequired,
  handleSortBySelect: PropTypes.func.isRequired,
  dateRange: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  }).isRequired,
};

FilterPanel.defaultProps = {
  minDate: null,
};

export default FilterPanel;
