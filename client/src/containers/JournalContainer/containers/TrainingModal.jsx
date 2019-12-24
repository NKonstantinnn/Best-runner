import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Button, Input } from 'reactstrap';
import Select from '../../../shared/redux-form-components/CustomSelect';
import DatePicker from '../../../shared/redux-form-components/CustomDatePicker';
import Slider from '../../../shared/redux-form-components/CustomSlider';
import CustomField from '../../../shared/redux-form-components/CustomField';
import {
  TrainingModalContent,
  TrainingModalTitle,
  TrainingModalForm,
  TrainingModalFooter,
} from './styled/TrainingModal';
import ActivityTypes from '../../../shared/types/Activity';

const TrainingModal = (props) => {
  const {
    minDate, isEdit, handleCancel, handleSubmit,
  } = props;

  const activityOptions = Object.keys(ActivityTypes).map(type => ({
    value: ActivityTypes[type], label: ActivityTypes[type],
  }));

  const actionName = isEdit ? 'Edit' : 'Add';

  return (
    <TrainingModalContent>
      <TrainingModalTitle>{actionName} training</TrainingModalTitle>
      <TrainingModalForm onSubmit={handleSubmit}>
        <Field name="activity" component={Select} label="Activity" options={activityOptions} />
        <Field name="date" component={DatePicker} label="Date" minDate={minDate} singleDatePicker opens="right" />
        <Field name="distance" component={Slider} label="Distance" min={0} max={100} step={0.01} />
        <CustomField name="comment" id="comment" component={Input} label="Comment" type="textarea" />
        <TrainingModalFooter>
          <Button outline color="primary" onClick={handleCancel}>Cancel</Button>
          <Button type="submit" color="primary">{actionName}</Button>
        </TrainingModalFooter>
      </TrainingModalForm>
    </TrainingModalContent>
  );
};

TrainingModal.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  minDate: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'TrainingForm',
})(TrainingModal);
