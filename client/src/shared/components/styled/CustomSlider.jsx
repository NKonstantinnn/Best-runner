import styled from '@emotion/styled';
import ReactSlider from 'react-slider';

import { WhiteColor, PrimaryColor, GrayColor } from '../../styled/colors';

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 20px;
`;

export const StyledThumb = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${WhiteColor};
  border-radius: 50%;
  border: 2px solid ${PrimaryColor};
  cursor: grab;
`;

export const StyledTrack = styled.div`
  height: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => (props.index === 0 ? PrimaryColor : GrayColor)};
  border-radius: 999px;
`;

export default StyledSlider;
