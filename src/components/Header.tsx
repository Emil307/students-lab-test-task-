import React, { useState } from 'react';
import Popup from '../UI/Popup';
import TagsPopup from './TagsPopup';

import styled from 'styled-components';
import { devices } from '../app/styles/constants';
import profileIcon from '../icons/profile-icon.svg';
import filtersIcon from '../icons/filters-icon.svg';

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

  @media (${devices.md}) {
    padding: 20px 0; 
    flex-direction: column;
    justify-content: space-between;
    height: 110px;
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

const TagsButton = styled.button`
  display: none;

  @media (${devices.md}) {
    display: block;
  }
`

const ProfileLink = styled.a``

const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Container>
        <Logo><a href='/'>Quotes</a></Logo>
        <ProfileLink href='/profile'><img src={profileIcon} alt="profile" /></ProfileLink>
        <TagsButton onClick={() => setActive(true)}><img src={filtersIcon} alt='filters'/></TagsButton>
      </Container>
      <Popup active={active}><TagsPopup/></Popup>
    </>
  )
}

export default Header;