import React from 'react';
import styled from '@emotion/styled';
import { components } from 'react-select';
import PropTypes from 'prop-types';

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
