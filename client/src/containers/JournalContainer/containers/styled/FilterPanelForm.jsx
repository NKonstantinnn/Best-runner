import styled from '@emotion/styled';
import { Form } from 'reactstrap';

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
