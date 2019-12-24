import styled from '@emotion/styled';

import { WhiteColor } from '../../../../shared/styled/colors';

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
