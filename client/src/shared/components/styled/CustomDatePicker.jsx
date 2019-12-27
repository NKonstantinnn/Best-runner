import styled from '@emotion/styled';
import { WhiteColor, InputBorderColor, InputTextColor } from '../../styled/colors';

const InputWrapper = styled.div`
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

export default InputWrapper;
