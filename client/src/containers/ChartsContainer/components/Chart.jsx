import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import { DatasetProp } from '../../../shared/prop-types';

const Chart = (props) => {
  const { dateLabels, datasets } = props;
  const data = {
    labels: dateLabels,
    datasets,
  };
  const options = {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          parser: 'DD-MM-YYYY HH:mm',
          tooltipFormat: 'll HH:mm',
        },
        scaleLabel: {
          display: true,
          labelString: 'Date',
        },
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Distance',
        },
      }],
    },
  };
  return (
    <Line data={data} options={options} />
  );
};

Chart.propTypes = {
  dateLabels: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  datasets: PropTypes.arrayOf(DatasetProp).isRequired,
};

export default Chart;
