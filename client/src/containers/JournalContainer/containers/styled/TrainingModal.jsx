import styled from '@emotion/styled';
import { Form } from 'reactstrap';

export const TrainingModalContent = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 40px;
  min-width: 500px;
  max-height: max-content;
  background: white;
`;

export const TrainingModalTitle = styled.h3`
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
`;

export const TrainingModalForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    & > div {
      width: 100%;
    }
`;

export const TrainingModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  & > button:last-of-type {
    margin-left: 1rem;
  }
`;
