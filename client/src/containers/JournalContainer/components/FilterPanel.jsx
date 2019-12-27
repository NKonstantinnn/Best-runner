import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import moment, { Moment } from 'moment';

import DatePicker from '../../../shared/components/CustomDatePicker';
import ActivityOptions from '../../../shared/select-options/Activity';
import SortTrainingOptions from '../../../shared/select-options/SortTraining';
import { RangeDatePickerValue } from '../../../shared/prop-types';
import SlyledFilterPanel, {
  Option,
  SingleValue,
  Menu,
  IndicatorSeparator,
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
  minDate: PropTypes.instanceOf(Moment),
  handleActivitiesSelect: PropTypes.func.isRequired,
  handleDateRangeApply: PropTypes.func.isRequired,
  handleSortBySelect: PropTypes.func.isRequired,
  dateRange: RangeDatePickerValue.isRequired,
};

FilterPanel.defaultProps = {
  minDate: null,
};

export default FilterPanel;
