import styled from '@emotion/styled';
import { Card, Form, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PrimaryColor } from '../../../../shared/styled/colors';

export const AuthFormWrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 48px 20px 48px;
`;

export const AuthFormTitle = styled.h3`
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
`;

export const AuthFormTypeText = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
`;

export const AuthFormImage = styled.img`
    max-width: 48px;
`;

export const StyledAuthForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
        width: 100%;
    }
`;

export const AuthFormLink = styled(Link)`
    font-size: 14px;
    color: ${PrimaryColor};
    width: 100%;
    text-align: left;
`;

export const AuthFormButton = styled(Button)`
    margin-top: 20px;
`;
