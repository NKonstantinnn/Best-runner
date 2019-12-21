import styled from '@emotion/styled';
import { Card, Form, Button } from 'reactstrap';

export const SignUpFormWrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 48px 20px 48px;
`;

export const SignUpFormTitle = styled.h3`
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    margin-top: 20px;
`;

export const SignUpFormImage = styled.img`
    max-width: 48px;
`;

export const StyledSignUpForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
        width: 100%;
    }
`;

export const SignUpButton = styled(Button)`
    margin-top: 20px;
`;
