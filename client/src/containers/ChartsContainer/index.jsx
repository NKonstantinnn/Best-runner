import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import ChartsWrapper from './styled';
import changeActiveTab from '../App/Redux/appActions';
import Tab from '../../shared/types/Tab';
import FilterPanel from './components/FilterPanel';
import ActivityOptions from '../../shared/select-options/Activity';
import { StructuredTrainings } from '../../shared/prop-types';
import Chart from './components/Chart';
import { fetchStructuredTrainings } from './redux/actions';
import withSpinner from '../../shared/hocs/withSpinner';

const ChartWithSpinner = withSpinner(Chart);

const ChartsContainer = (props) => {
  // set an active tab
  useEffect(
    () => {
      props.changeActiveTab(Tab.CHARTS);
    },
    [],
  );
  // fetch trainings
  useEffect(
    () => {
      props.fetchStructuredTrainings();
    },
    [],
  );

  const { structuredTrainings, isFetching } = props;

  const [selectedActivities, setSelectedActivities] = useState(ActivityOptions.map(op => op.value));
  const [dateRange, setDateRange] = useState({
    startDate: moment().subtract(1, 'month').startOf('day'),
    endDate: moment(),
  });

  const handleActivitiesSelect = selectedOptions => setSelectedActivities(selectedOptions);

  const handleDateRangeApply = datePicker => setDateRange(datePicker);

  const splitDateRange = () => {
    const dates = [];
    let currentDate = moment(dateRange.startDate);
    let nextDate = currentDate.add(7, 'days').startOf('day');
    while (dateRange.endDate.diff(nextDate, 'days') > 7) {
      dates.push(nextDate.toDate());
      currentDate = nextDate;
      nextDate = currentDate.add(7, 'days').startOf('day');
    }
    dates.push(dateRange.endDate.toDate());
    return dates;
  };

  const generateDatasets = (dates) => {
    if (Object.keys(structuredTrainings).length === 0) return [];

    const datasets = selectedActivities.map((activity) => {
      const data = Array.from({ length: dates.length }, () => 0);
      structuredTrainings[activity].forEach((training) => {
        const trainingDate = new Date(training.date).getTime();
        // for first weak
        if (trainingDate >= dateRange.startDate.toDate().getTime() && trainingDate < dates[0].getTime()) {
          data[0] += training.distance;
        }
        // for next weaks
        for (let i = 1; i < dates.length; i += 1) {
          if (trainingDate >= dates[i - 1].getTime() && trainingDate < dates[i].getTime()) {
            data[i] += training.distance;
          }
        }
      });
      return {
        label: activity,
        backgroundColor: ActivityOptions.find(option => option.value === activity).color,
        borderColor: ActivityOptions.find(option => option.value === activity).color,
        fill: false,
        data,
      };
    });
    return datasets;
  };

  const dateLabels = splitDateRange();

  return (
    <ChartsWrapper>
      <FilterPanel
        selectedActivities={selectedActivities}
        dateRange={dateRange}
        handleActivitiesSelect={handleActivitiesSelect}
        handleDateRangeApply={handleDateRangeApply}
      />
      <ChartWithSpinner isFetching={isFetching} dateLabels={dateLabels} datasets={generateDatasets(dateLabels)} />
    </ChartsWrapper>
  );
};

ChartsContainer.propTypes = {
  changeActiveTab: PropTypes.func.isRequired,
  structuredTrainings: StructuredTrainings,
  fetchStructuredTrainings: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

ChartsContainer.defaultProps = {
  structuredTrainings: {},
};

const mapStateToProps = ({ charts }) => {
  const { structuredTrainings, isFetching } = charts;
  return {
    structuredTrainings,
    isFetching,
  };
};

const mapDispatchToProps = {
  changeActiveTab,
  fetchStructuredTrainings,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);

