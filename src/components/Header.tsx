import React from 'react';
import styled from 'styled-components';
import profileIcon from '../icons/profile-icon.svg';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  border-bottom: 1px #ddd solid;
`

const Logo = styled.a`
  font-size: 24px;
`

const ProfileLink = styled.a``

const Header: React.FC = () => {
  return (
    <Container>
      <Logo href='/'>Quotes</Logo>
      <ProfileLink href='/profile'><img src={profileIcon} alt="profile" /></ProfileLink>
    </Container>
  )
}

export default Header;