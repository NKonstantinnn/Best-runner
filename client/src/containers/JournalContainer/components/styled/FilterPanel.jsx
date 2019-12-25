import React from 'react';
import styled from '@emotion/styled';
import { components } from 'react-select';
import { Form } from 'reactstrap';
import PropTypes from 'prop-types';

import { ArrowUpThickIcon, ArrowDownThickIcon } from '../../../../shared/styled/icons';
import { OptionProp } from '../../../../shared/prop-types';
import { WhiteColor, InputBorderColor, InputTextColor } from '../../../../shared/styled/colors';

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

const StyledMenu = styled.div`
  & > div {
    z-index: 2;
  }
`;

export const Menu = ({ children, ...other }) => (
  <StyledMenu>
    <components.Menu {...other}>
      {children}
    </components.Menu>
  </StyledMenu>
);

Menu.propTypes = {
  children: PropTypes.element.isRequired,
};

const StyledIndicatorSeparator = styled.span`
  display: none;
`;

export const IndicatorSeparator = () => (
  <StyledIndicatorSeparator />
);

export const DatePickerInput = styled.div`
    background-color: ${WhiteColor};
    border: 1px solid ${InputBorderColor};
    display: flex;
    align-items: center;
    min-height: 38px;
    color: ${InputTextColor};
    font-size: 1rem;
    border-radius: 4px;
    padding: 5px;
    cursor: pointer;
`;

const SlyledFilterPanelForm = styled(Form)`
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
