import React from 'react';
import styled from '@emotion/styled';
import { WhiteColor, BlackColor, InputTextColor } from './colors';

const StyledIcon = styled.svg`
    width: 24px;
    height: 24px;
`;

export const PlusThickIcon = () => (
  <StyledIcon viewBox="0 0 24 24">
    <path
      fill={WhiteColor}
      d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"
    />
  </StyledIcon>
);

export const CloseIcon = () => (
  <StyledIcon viewBox="0 0 24 24">
    <path
      fill={BlackColor}
      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    />
  </StyledIcon>
);

export const CalendarMonthIcon = () => (
  <StyledIcon viewBox="0 0 24 24">
    <path
      fill={InputTextColor}
      d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1
       3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"
    />
  </StyledIcon>
);

export const CaretIcon = () => (
  <StyledIcon viewBox="0 0 24 24">
    <path
      fill={BlackColor}
      d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436
       0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787
        0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
    />
  </StyledIcon>
);
