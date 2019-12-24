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
  const activityOptions = Object.keys(ActivityTypes).map(type => ({
    value: type, label: ActivityTypes[type],
  }));

  return (
    <TrainingModalContent>
      <TrainingModalTitle>Add training</TrainingModalTitle>
      <TrainingModalForm>
        <Field name="activity" component={Select} label="Activity" options={activityOptions} />
        <Field name="date" component={DatePicker} label="Date" minDate="12/21/2019" singleDatePicker opens="right" />
        <Field name="distance" component={Slider} label="Distance" min={0} max={100} step={0.01} />
        <CustomField name="comment" id="comment" component={Input} label="Comment" type="textarea" />
        <TrainingModalFooter>
          <Button outline color="primary" onClick={props.handleCancel}>Cancel</Button>
          <Button color="primary">Add</Button>
        </TrainingModalFooter>
      </TrainingModalForm>
    </TrainingModalContent>
  );
};

TrainingModal.propTypes = {
  handleCancel: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'TrainingForm',
})(TrainingModal);
