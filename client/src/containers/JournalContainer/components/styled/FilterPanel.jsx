import React from 'react';
import styled from '@emotion/styled';
import { components } from 'react-select';
import PropTypes from 'prop-types';

import { ArrowUpThickIcon, ArrowDownThickIcon } from '../../../../shared/styled/icons';
import { OptionProp } from '../../../../shared/prop-types';

export const Option = ({ children, data, ...other }) => {
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

export const SingleValue = ({ children, data, ...other }) => {
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

const SlyledFilterPanelForm = styled.div`
    display: flex;
    margin-top: 40px;

    & > div {
        min-width: 140px;
        margin-right: 8px;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

export default SlyledFilterPanelForm;
