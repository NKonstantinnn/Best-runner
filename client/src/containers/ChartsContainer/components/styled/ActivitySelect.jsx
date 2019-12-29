import React from 'react';
import styled from '@emotion/styled';
import { components } from 'react-select';
import PropTypes from 'prop-types';

import { BlackColor } from '../../../../shared/styled/colors';
import withInnerRef from '../../../../shared/hocs/withInnerRef';

/* Option */
const StyledOption = withInnerRef(styled.div`
  & > div {
    border-width: 2px 0 2px 0;
    border-style: solid;
    border-color: ${(props) => {
    if (props.isFocused) return props.data.color;
    return 'transparent';
  }};
    color: ${props => props.data.color};
    background-color: transparent;
  }
`);

const Option = ({ cx, ...other }) => (
  <StyledOption {...other}>
    <components.Option cx={cx} {...other} />
  </StyledOption>
);

Option.propTypes = {
  cx: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

/* MultiValueContainer */
const StyledMultiValueContainer = styled.div`
  & > div {
    border: 2px solid ${props => props.data.color};
    background-color: transparent;
  }
`;

const MultiValueContainer = props => (
  <StyledMultiValueContainer {...props}>
    <components.MultiValueContainer {...props} />
  </StyledMultiValueContainer>
);

/* MultiValueRemove */
const StyledMultiValueRemove = styled.div`
  display: flex;
  align-items: center;

  & > div {
    color: ${BlackColor};

    &:hover {
        color: ${props => props.data.color};
        background-color: transparent;
    }
  }
`;

const MultiValueRemove = props => (
  <StyledMultiValueRemove {...props}>
    <components.MultiValueRemove {...props} />
  </StyledMultiValueRemove>
);

export default {
  Option,
  MultiValueContainer,
  MultiValueRemove,
};
