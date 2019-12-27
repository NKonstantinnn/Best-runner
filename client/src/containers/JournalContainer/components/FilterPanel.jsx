import React from 'react';
import PropTypes from 'prop-types';
import moment, { Moment } from 'moment';

import DatePicker from '../../../shared/components/CustomDatePicker';
import Select from '../../../shared/components/CustomSelect';
import ActivityOptions from '../../../shared/select-options/Activity';
import SortTrainingOptions from '../../../shared/select-options/SortTraining';
import { RangeDatePickerValue } from '../../../shared/prop-types';
import SlyledFilterPanel, { Option, SingleValue } from './styled/FilterPanel';

const FilterPanel = (props) => {
  const {
    minDate, dateRange, filteredActivities, sortBy,
    handleActivitiesSelect, handleDateRangeApply, handleSortBySelect,
  } = props;

  return (
    <SlyledFilterPanel>
      <Select
        options={ActivityOptions}
        value={filteredActivities}
        isMulti
        onChange={handleActivitiesSelect}
      />
      <DatePicker
        minDate={minDate}
        maxDate={moment()}
        value={dateRange}
        cancelClass="btn btn-outline-primary"
        applyClass="btn btn-primary"
        onApply={handleDateRangeApply}
      />
      <Select
        options={SortTrainingOptions}
        value={sortBy}
        onChange={handleSortBySelect}
        components={{ Option, SingleValue }}
      />
    </SlyledFilterPanel>
  );
};

FilterPanel.propTypes = {
  minDate: PropTypes.instanceOf(Moment),
  filteredActivities: PropTypes.arrayOf(PropTypes.string).isRequired,
  dateRange: RangeDatePickerValue.isRequired,
  sortBy: PropTypes.string.isRequired,
  handleActivitiesSelect: PropTypes.func.isRequired,
  handleDateRangeApply: PropTypes.func.isRequired,
  handleSortBySelect: PropTypes.func.isRequired,
};

FilterPanel.defaultProps = {
  minDate: null,
};

export default FilterPanel;
