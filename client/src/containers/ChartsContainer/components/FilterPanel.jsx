import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import ActivitySelectComponents from './styled/ActivitySelect';
import ActivityOptions from '../../../shared/select-options/Activity';
import Select from '../../../shared/components/CustomSelect';
import DatePicker from '../../../shared/components/CustomDatePicker';
import SlyledFilterPanel from './styled/FilterPanel';
import { RangeDatePickerValue } from '../../../shared/prop-types';

const FilterPanel = (props) => {
  const ranges = {
    'Last Month': [moment().subtract(1, 'month').startOf('day'), moment()],
    'Last 3 Months': [moment().subtract(3, 'month').startOf('day'), moment()],
    'Last 6 Months': [moment().subtract(6, 'month').startOf('day'), moment()],
    'Last 9 Months': [moment().subtract(9, 'month').startOf('day'), moment()],
    'Last Year': [moment().subtract(1, 'year').startOf('day'), moment()],
  };

  const {
    selectedActivities, dateRange,
    handleActivitiesSelect, handleDateRangeApply,
  } = props;

  return (
    <SlyledFilterPanel>
      <Select
        options={ActivityOptions}
        value={selectedActivities}
        maxDate={moment()}
        isMulti
        onChange={handleActivitiesSelect}
        components={ActivitySelectComponents}
      />
      <DatePicker
        maxDate={moment()}
        value={dateRange}
        cancelClass="btn btn-outline-primary"
        applyClass="btn btn-primary"
        onApply={handleDateRangeApply}
        ranges={ranges}
        showCustomRangeLabel={false}
      />
    </SlyledFilterPanel>
  );
};

FilterPanel.propTypes = {
  selectedActivities: PropTypes.arrayOf(PropTypes.string).isRequired,
  dateRange: RangeDatePickerValue.isRequired,
  handleActivitiesSelect: PropTypes.func.isRequired,
  handleDateRangeApply: PropTypes.func.isRequired,
};

export default FilterPanel;
