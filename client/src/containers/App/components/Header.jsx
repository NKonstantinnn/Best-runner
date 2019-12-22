import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledHeader,
  HeaderContent,
  HeaderMenuBlock,
  HeaderMenuItem,
  HeaderSignout,
  HeaderLogo,
  HeaderLogoImage,
  HeaderProfile,
  HeaderProfileImage,
  HeaderProfileUsername,
} from './styled/Header';
import Tab from '../../../shared/types/Tab';

const Header = ({ activeTab }) => (
  <StyledHeader>
    <Container>
      <HeaderContent>
        <HeaderMenuBlock>
          <HeaderLogo>
            <Link to="/">
              <HeaderLogoImage src="/images/logo.png" />
            </Link>
          </HeaderLogo>
          <HeaderMenuItem active={activeTab === Tab.JOURNAL}>
            <Link to="/">Journal</Link>
          </HeaderMenuItem>
          <HeaderMenuItem active={activeTab === Tab.CHARTS}>
            <Link to="/charts">Charts</Link>
          </HeaderMenuItem>
        </HeaderMenuBlock>
        <HeaderMenuBlock>
          <HeaderProfile>
            <HeaderProfileImage src="/images/avatar.png" />
            <HeaderProfileUsername>testuser</HeaderProfileUsername>
          </HeaderProfile>
          <HeaderSignout>Sign out</HeaderSignout>
        </HeaderMenuBlock>
      </HeaderContent>
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  activeTab: PropTypes.oneOf(Object.keys(Tab)).isRequired,
};

export default Header;
