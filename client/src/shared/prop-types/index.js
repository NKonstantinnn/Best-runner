import PropTypes from 'prop-types';

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
