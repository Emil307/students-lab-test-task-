import React from 'react';
import LikeList from '../components/LikeList';
import Sidebar from '../components/Sidebar';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1078px;
  margin: 0 auto;
`

const Profile: React.FC = () => {

  const likes = JSON.parse(localStorage.getItem('likes')!)

  return (
    <Container>
      <Sidebar/>
      <LikeList likes={likes}/>
    </Container>
  )
}

export default Profile;