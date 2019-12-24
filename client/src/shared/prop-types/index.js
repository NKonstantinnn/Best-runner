import PropTypes from 'prop-types';

export const OptionProp = PropTypes.shape({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

export const History = PropTypes.shape({
  push: PropTypes.func.isRequired,
});
