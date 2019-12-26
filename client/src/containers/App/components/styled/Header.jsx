import styled from '@emotion/styled';

import { WhiteColor, PrimaryColor, GrayColor } from '../../../../shared/styled/colors';
import HeaderHeight from '../../../../shared/styled/variables';

export const StyledHeader = styled.div`
  height: ${HeaderHeight};
  background: ${WhiteColor};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  & > .container {
      height: 100%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const HeaderMenuBlock = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HeaderMenuItem = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: ${PrimaryColor};
  margin-left: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-bottom: 2px solid transparent;
  border-color: ${props => (props.active ? PrimaryColor : 'trasparent')};

  &:hover {
    border-color: ${PrimaryColor};
  }

  & a:hover {
    color: ${PrimaryColor};
  }
  
  &:first-of-type {
    margin-left: 0;
  }
`;

export const HeaderSignout = styled.span`
  font-size: 18px;
  line-height: 28px;
  color: ${PrimaryColor};
  margin-left: 10px;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
`;

export const HeaderLogo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderLogoImage = styled.img`
  width: 48px;
  height: 48px;
`;

export const HeaderProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-right: 1px solid ${GrayColor};
`;

export const HeaderProfileImage = styled.img`
  border: 1px solid ${GrayColor};
  border-radius: 50%;
  height: 48px;
`;

export const HeaderProfileUsername = styled.span`
  font-size: 16px;
  color: ${GrayColor};
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
