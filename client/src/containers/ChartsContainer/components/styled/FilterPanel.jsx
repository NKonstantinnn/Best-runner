import styled from '@emotion/styled';

const SlyledFilterPanel = styled.div`
    display: flex;
    margin-top: 60px;

    & > div {
        min-width: 140px;
        margin-right: 8px;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

export default SlyledFilterPanel;
