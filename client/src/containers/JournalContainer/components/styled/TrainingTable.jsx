import styled from '@emotion/styled';

import { WhiteColor, BlackColor } from '../../../../shared/styled/colors';

export const TrainingTableWrapper = styled.div`
  margin-top: 40px;
`;

export const ButtonWrapper = styled.div`
  & > button {
    &:first-of-type {
      margin-right: 8px;
    }

    &:hover {
        & svg path {
            fill: ${WhiteColor};
        }
    } 
  }
`;

export const NoTrainingsMsg = styled.h3`
  font-size: 32px;
  font-weight: 500;
  color: ${BlackColor};
`;
