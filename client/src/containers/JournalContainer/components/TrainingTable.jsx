import React from 'react';
import { Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Training } from '../../../shared/prop-types';
import {
  TrainingTableWrapper,
  ButtonWrapper,
  NoTrainingsMsg,
} from './styled/TrainingTable';
import { TrashCanIcon, PencilOutlineIcon } from '../../../shared/styled/icons';

const TrainingTable = (props) => {
  const { trainings, handleEdit, handleDelete } = props;
  const trainingRows = trainings
    .map(training => (
      <tr key={/* eslint-disable no-underscore-dangle */training._id /* eslint-enable */}>
        <td>{training.activity}</td>
        <td>{moment(training.date).format('DD-MM-YYYY')}</td>
        <td>{`${training.distance} km`}</td>
        <td>
          <ButtonWrapper>
            <Button type="button" outline color="primary" size="sm" onClick={() => handleEdit(training)}>
              <PencilOutlineIcon />Edit
            </Button>
            <Button
              type="button"
              outline
              color="danger"
              size="sm"
              onClick={() => handleDelete(/* eslint-disable no-underscore-dangle */training._id/* eslint-enable */)}
            >
              <TrashCanIcon />Delete
            </Button>
          </ButtonWrapper>
        </td>
      </tr>));

  const isEmpty = trainings.length === 0;

  return (
    <TrainingTableWrapper>
      { isEmpty && <NoTrainingsMsg>You have no trainings yet</NoTrainingsMsg> }
      {
        !isEmpty &&
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
      }
    </TrainingTableWrapper>
  );
};

TrainingTable.propTypes = {
  trainings: PropTypes.arrayOf(Training),
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

TrainingTable.defaultProps = {
  trainings: [],
};

export default TrainingTable;
