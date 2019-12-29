import PropTypes from 'prop-types';
import { Moment } from 'moment';

export const OptionProp = PropTypes.shape({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

export const History = PropTypes.shape({
  push: PropTypes.func.isRequired,
});

export const User = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  signUpDate: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
});

export const Training = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string,
});

export const RangeDatePickerValue = PropTypes.shape({
  startDate: PropTypes.instanceOf(Moment),
  endDate: PropTypes.instanceOf(Moment),
});

export const StructuredTrainings = PropTypes.shape({
  Running: PropTypes.arrayOf(Training),
  Walking: PropTypes.arrayOf(Training),
  Skiing: PropTypes.arrayOf(Training),
  Bicycle: PropTypes.arrayOf(Training),
});

export const DatasetProp = PropTypes.shape({
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  fill: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.number),
});
