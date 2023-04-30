import React from 'react';
import styled from 'styled-components';
import { devices } from '../app/styles/constants';
import profileIcon from '../icons/profile-icon.svg';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 259px;
  padding: 0 16px;
  height: 100px;

  @media (${devices.xl}) {
    justify-content: center;
    width: 72px;
    padding: 0 8px;
  }
`

const Logo = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;

  color: #0f0f0f;
  
  @media (${devices.xl}) {
    display: none;
  }
`

const ProfileLink = styled.a``

const Header: React.FC = () => {
  return (
    <Container>
      <Logo><a href='/'>Quotes</a></Logo>
      <ProfileLink href='/profile'><img src={profileIcon} alt="profile" /></ProfileLink>
    </Container>
  )
}

export default Header;