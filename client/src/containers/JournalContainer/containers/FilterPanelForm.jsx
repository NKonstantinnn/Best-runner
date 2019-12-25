import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { components } from 'react-select';

import SlyledFilterPanelForm from './styled/FilterPanelForm';
import Select from '../../../shared/redux-form-components/CustomSelect';
import ActivityOptions from '../../../shared/select-options/Activity';
import SortTrainingOptions from '../../../shared/select-options/SortTraining';
import DatePicker from '../../../shared/redux-form-components/CustomDatePicker';
import { ArrowUpThickIcon, ArrowDownThickIcon } from '../../../shared/styled/icons';
import { OptionProp } from '../../../shared/prop-types';

const Option = ({ children, data, ...other }) => {
  const icon = (data.value === 'DateUp' || data.value === 'DistanceUp') ?
    <ArrowUpThickIcon /> : <ArrowDownThickIcon />;
  return (
    <components.Option {...other}>
      {children} {icon}
    </components.Option>
  );
};

Option.propTypes = {
  children: PropTypes.string.isRequired,
  data: OptionProp.isRequired,
};

const SingleValue = ({ children, data, ...other }) => {
  const icon = (data.value === 'DateUp' || data.value === 'DistanceUp') ?
    <ArrowUpThickIcon /> : <ArrowDownThickIcon />;
  return (
    <components.SingleValue {...other}>
      {children} {icon}
    </components.SingleValue>
  );
};

SingleValue.propTypes = {
  children: PropTypes.string.isRequired,
  data: OptionProp.isRequired,
};

const FilterPanelForm = (props) => {
  const { minDate } = props;

  return (
    <SlyledFilterPanelForm>
      <Field name="activities" component={Select} options={ActivityOptions} isMulti />
      <Field name="dateRange" component={DatePicker} minDate={minDate} maxDate={new Date()} />
      <Field name="sortBy" component={Select} options={SortTrainingOptions} components={{ Option, SingleValue }} />
    </SlyledFilterPanelForm>
  );
};

FilterPanelForm.propTypes = {
  minDate: PropTypes.string,
};

FilterPanelForm.defaultProps = {
  minDate: null,
};

export default reduxForm({
  form: 'FilterPanelForm',
})(FilterPanelForm);
