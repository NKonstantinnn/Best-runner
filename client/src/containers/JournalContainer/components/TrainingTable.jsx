import React from 'react';
import { Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Training } from '../../../shared/prop-types';
import { TrainingTableWrapper, ButtonWrapper } from './styled/TrainingTable';
import { TrashCanIcon, PencilOutlineIcon } from '../../../shared/styled/icons';

const TrainingTable = (props) => {
  const { trainings } = props;
  const trainingRows = trainings
    .map(training => (
      <tr key={/* eslint-disable no-underscore-dangle */training._id /* eslint-enable */}>
        <td>{training.activity}</td>
        <td>{moment(training.date).format('DD-MM-YYYY')}</td>
        <td>{`${training.distance} km`}</td>
        <td>
          <ButtonWrapper>
            <Button outline color="primary" size="sm"><PencilOutlineIcon />Edit</Button>
            <Button outline color="danger" size="sm"><TrashCanIcon />Delete</Button>
          </ButtonWrapper>
        </td>
      </tr>));

  return (
    <TrainingTableWrapper>
      <Table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Date</th>
            <th>Distance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { trainingRows }
        </tbody>
      </Table>
    </TrainingTableWrapper>
  );
};

TrainingTable.propTypes = {
  trainings: PropTypes.arrayOf(Training),
};

TrainingTable.defaultProps = {
  trainings: [],
};

export default TrainingTable;
